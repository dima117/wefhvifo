window.ptlHeadElements=new Array();
window.ptlHead=document.getElementsByTagName("head")[0];
for(var child=window.ptlHead.firstChild; child!=null;child=child.nextSibling) {
    if("LINK"==child.tagName) {
        window.ptlHeadElements.push(child.href);
    } else if("SCRIPT"==child.tagName) {
        window.ptlHeadElements.push(child.href)
    }
}

/**
 * A cross-browser method that replaces the markup of an element. The behavior
 * is similiar to calling element.outerHtml=text in internet explorer. However
 * this method also takes care of executing javascripts within the markup on
 * browsers that don't do that automatically.
 * Also this method takes care of replacing table elements (tbody, tr, td, thead)
 * on browser where it's not supported when using outerHTML (IE, Opera).
 *
 * mode is null for replace, "before" or "after"
 */
function ptlReplaceOuterHtml(element, text, mode) {
    if (element.outerHTML) { // internet explorer or opera support outerHtml
		// find out the element's index and next element (if any).
		// outerHtml can replace element with multiple elements and we need
		// to track the new elements in order to execute the script elements
		// they contain
		var next = element.nextSibling;

		var tn = element.tagName;

		// elements inside tables have to be treated special
		if (tn != 'TBODY' && tn != 'TR' && tn != "TD" && tn != "THEAD") {
			// not inside table - regular replace
			element.outerHTML = mode=='before'?text+element.outerHTML : mode=='after'?element.outerHTML+text:text;
		} else {
			// this is a hack to get around the fact that internet explorer doesn't allow the
			// outerHtml attribute on table elements
			var tempDiv = document.createElement("div");
			tempDiv.innerHTML = '<table style="display: none">' + text + '</table>';

			// we may have inserted multiple elements, so we need to take care of all of them
			var tempParent = tempDiv.getElementsByTagName(tn).item(0).parentNode;

			var elemNext = element.nextSibling;
            while(tempParent.childNodes.length > 0) {
                var tempElement = tempParent.childNodes[0];
                if('after'==mode) {
                    element.parentNode.insertBefore(tempElement, elemNext);
                } else {
                    element.parentNode.insertBefore(tempElement, element);
                }
            }

			//element.parentNode.replaceChild(tempDiv.getElementsByTagName(tn).item(0), element);
			if('before'!=mode && 'after'!=mode) element.parentNode.removeChild(element);
		}

    } else {
    	// create range and fragment
        var range = element.ownerDocument.createRange();
        range.selectNode(element);
		var fragment = range.createContextualFragment(text);

        if('before'==mode) {
            element.parentNode.insertBefore(fragment, element);
        } else if('after'==mode) {
            element.parentNode.insertBefore(fragment, element.nextSibling);
        } else {
            element.parentNode.replaceChild(fragment, element);
        }
    }
}

function ptlReplaceInterval(from,to, text) {
    while(from.nextSibling!=to) from.parentNode.removeChild(from.nextSibling);
    ptlReplaceOuterHtml(from,text,'after');
}

function ptlFormEncode(text) {
    if (encodeURIComponent) {
        return encodeURIComponent(text);
    } else {
        return escape(text);
    }
}

function ptlFormSerializeSelect(select){
	// if it is a non-multiple select, iterating on each element is not required
	if (select.multiple == false){
		return ptlFormEncode(select.name) + "=" + ptlFormEncode(select.value) + "&";
	}

    //else
    var result = "";
    for (var i = 0; i < select.options.length; ++i) {
        var option = select.options[i];
        if (option.selected) {
            result += ptlFormEncode(select.name) + "=" + ptlFormEncode(option.value) + "&";
        }
    }
    return result;
}

// this function intentionally ignores image and submit inputs
function ptlFormSerializeInput(input) {
    var type = input.type.toLowerCase();
    if ((type == "checkbox" || type == "radio") && input.checked) {
        return ptlFormEncode(input.name) + "=" + ptlFormEncode(input.value) + "&";
    } else if (type == "text" || type == "password" || type == "hidden" || type == "textarea") {
		return ptlFormEncode(input.name) + "=" + ptlFormEncode(input.value) + "&";
	} else {
		return "";
    }
}

// Returns url/post-body fragment representing element (e)
function ptlFormSerializeElement(e) {
    var tag = e.tagName.toLowerCase();
    if (tag == "select") {
        return ptlFormSerializeSelect(e);
    } else if (tag == "input" || tag == "textarea") {
        return ptlFormSerializeInput(e);
    } else {
    	return "";
    }
}


function ptlFormSerialize(element) {
    while(element.tagName.toLowerCase() != "form" && element.tagName.toLowerCase() != "body") {
        element=element.parentNode;
    }

    if (element.tagName.toLowerCase() == "form"){
        var result = "";
        for (var i = 0; i < element.elements.length; ++i) {
            var e = element.elements[i];
            if (e.name && e.name != "" && !e.disabled) {
                result += ptlFormSerializeElement(e);
            }
        }
        return result;
    } else {
        return ""
    }
}

function ajax(element,action) {
    var parameters=ptlFormSerialize(element);
    for(var i=2; i<arguments.length; i++) {
        parameters = parameters + '&' + arguments[i];
    }
    var url = (element.tagName.toLowerCase() == "form") ? element.action : undefined;
    ajaxWithoutForm(action,parameters, url)
    return false;
}

if (Function.prototype.bind == null) {
	Function.prototype.bind = function(object) {
		var __method = this;
		return function() {
			return __method.apply(object, arguments);
		}
	}
}

// do not collect form fields - call ajax only with supplied parameters
function ajaxWithoutForm(action,parameters,url) {
    if(arguments.length ==1) parameters="";
    if (!url) {
    	url=window.location.href;
    }

    // set a special flag to allow server distinguish between ajax and non-ajax requests
    var body="ptl-ajax=true&ptl-action=" + action + "&ptl-pagestate=" + ptlFormEncode(ptlGetState())
    if(parameters.substring(0,1)!='&') parameters='&'+parameters;

    var request = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();

    request.open("POST", url, true);
    request.onreadystatechange = ptlCallback.bind(request);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    request.send(body+parameters);

    if (window.ptlAjaxCallInitiated) {
        window.ptlAjaxCallInitiated();
    }

    return false;
}

function ptlCallback() {
    if(this.readyState == 4) {
        if (this.status == 200 || this.status == "") { // as stupid as it seems, IE7 sets satus to "" on ok
            // parse the response if the callback needs a DOM tree
            var xmldoc;
            //alert("Request="+window.ptlCall.responseText)
            if (typeof(window.XMLHttpRequest) != "undefined" && typeof(DOMParser) != "undefined") {
                var parser = new DOMParser();
                xmldoc = parser.parseFromString(this.responseText, "text/xml");
            } else if (window.ActiveXObject) {
                xmldoc = this.responseXML;
            }
            // invoke the loaded callback with an xml document
            window.ptlProcessCallback(xmldoc);
        }
        if ( window.ptlAjaxCallCompleted ) {
            window.ptlAjaxCallCompleted();
        }
        //this.onreadystatechange = function() {};
        this.abort();
    }
}

function ptlProcessCallback(envelope) {
    var root = envelope.getElementsByTagName("ajax-response")[0];

    if (!root) return;
    for (var i = 0; i < root.childNodes.length; ++i) {
        var node = root.childNodes[i];

        if (node.tagName == "component") {
           ptlProcessComponent(node);
        } else if (node.tagName == "repeatable") {
            var id = node.getAttribute("id");
            var index = parseInt(node.getAttribute("index"));
            var mode=node.getAttribute("mode");
            if(mode=='insert' && index==0) {
                var after=document.getElementById("ptl$"+id+"$B");

                // change the ids of others
                for(var renamed=document.getElementById("ptl$"+id+"$"+ index); renamed; index++) {
                    var nextRenamed=document.getElementById("ptl$"+id+"$"+ (index+1));
                    renamed.id = "ptl$"+id+"$"+(index+1);
                    renamed=nextRenamed;
                }
                ptlReplaceOuterHtml(after,node.firstChild.nodeValue,'after')
            } else if(mode=='insert') {
                var before=document.getElementById("ptl$"+id+"$E");
                ptlReplaceOuterHtml(before,node.firstChild.nodeValue,'before')
            } else if(mode=='update'){
                var before=document.getElementById("ptl$"+id+"$"+(index==0?"B":index-1));
                var after=document.getElementById("ptl$"+id+"$"+index);
//                alert("replacing="+before.id+" "+after.id)
                ptlReplaceInterval(before,after,node.firstChild.nodeValue)
                after.parentNode.removeChild(after)
            } else if(mode=='delete'){
                var before=document.getElementById("ptl$"+id+"$"+(index==0?"B":index-1));
                var after=document.getElementById("ptl$"+id+"$"+index);
                ptlReplaceInterval(before,after,"")

                // delete one marker tag and change the ids of others
                after.parentNode.removeChild(after)
                var renamed=document.getElementById("ptl$"+id+"$"+ (++index));
                while(renamed) {
                    renamed.id = "ptl$"+id+"$"+(index-1)
                    renamed=document.getElementById("ptl$"+id+"$"+ (++index));
                }
            }
        } else if (node.tagName == "evaluate") {
           ptlProcessEvaluation(node);
        } else if (node.tagName == "header-contribution") {
          ptlProcessHeaderContribution(node);
        }
    }
}


function ptlProcessComponent(node) {
    // get the component id
    var compId = node.getAttribute("id");
    var text="";

    // get the new component body
    if (node.hasChildNodes()) {
        text = node.firstChild.nodeValue;
    }

    // get existing component
    var element = document.getElementById(compId);

    if (element == null || typeof(element) == "undefined") {
        window.status=("Component with id '"+compId+"' not found while trying to perform markup update. ");
    } else {
        // replace the component
        ptlReplaceOuterHtml(element, text);
    }
}

function ptlProcessEvaluation(node) {
    var text = node.firstChild.nodeValue;

//    try {
        eval(text);
//    } catch (exception) {
//        window.status="Exception evaluating javascript: " + exception;
//    }
}

function ptlProcessHeaderContribution(node) {
    var file = node.getAttribute("src");
    for(var i=0;i<window.ptlHeadElements.length;i++)
        if(window.ptlHeadElements[i]==file) return;
    window.ptlHeadElements.push(file);

    if (file.endsWith(".css")) {
        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = file;
        css.type = "text/css";
        window.ptlHead.appendChild(css);
    } else if (file.endsWith(".js")) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.href = file;
        window.ptlHead.appendChild(js);
    }
}

function ptlSetState(str) {
    var fld=document.getElementById("ptl-pagestate");
    if(fld) fld.value=str;
}

function ptlGetState() {
    var fld=document.getElementById("ptl-pagestate");
    return fld ? fld.value : "";
}

function ptlStdUpload(){
    var form = document.getElementById('ptlRootForm');
    form.method = 'POST';
    form.enctype = 'multipart/form-data';
    form.encoding = 'multipart/form-data';
    form.submit();
}

function ptlUpload(form,token){
    window.parent.setTimeout('ptlUploadRefresh()', 300);

    window.parent.document.getElementById('ptlUploadProgress').style.display='block';
    window.parent.document.getElementById('uploadIframe').style.display='none';
    form.submit();
}

function ptlUploadFinish(){
    window.parent.document.getElementById('ptlUploadProgress').style.display='none';
    window.parent.document.getElementById('uploadIframe').style.display='block';
}

function ptlUploadRefresh() {
    var container=document.getElementById('ptlUploadProgress');
    var div=document.getElementById('ptlUploadProgressBar');
    if(container && container.style.display=='block' && div.style.width!='100%') {
        var body="ptl-ajax=true&ptl-action=queryUploadProgress&ptl-pagestate=" + ptlFormEncode(ptlGetState())+'&'+ptlFormSerialize(div)
        var request = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
        request.open("POST", window.location.href, true);
        request.onreadystatechange = ptlCallback.bind(request);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(body);

        if (window.ptlAjaxCallInitiated) {
            window.ptlAjaxCallInitiated();
        }

        window.setTimeout('ptlUploadRefresh()', 5000);
    }
}


function splitMouseDown(event,div,isVertical,action, mouseUpHandler) {
    div.style.position="relative"
    div.style.top="0px"
    div.style.left="0px"
    window.draggedCursorY=event.clientY;
    window.draggedCursorX=event.clientX;
    window.dragged=div;
    window.draggedVertical=isVertical;
    window.draggedAction=action;
    window.mouseUpHandler = mouseUpHandler;
    addEvent(document,"mousemove",splitMouseMove)
    addEvent(document,"mouseup",splitMouseUp)
    stopEvent(event)
}
function splitMouseUp(event) {
    var d=window.dragged;
    d.style.position="static";
    var h=(d.previousSibling.offsetHeight+event.clientY-window.draggedCursorY);
    var v=(d.previousSibling.offsetWidth+event.clientX-window.draggedCursorX);
    if(window.draggedVertical) d.previousSibling.style.height=h+"px"
    if(!window.draggedVertical) d.previousSibling.style.width=v+"px"
    d.previousSibling.childNodes[0].style.position="relative"
    d.previousSibling.childNodes[0].style.position="static"
    removeEvent(document,"mousemove",splitMouseMove)
    removeEvent(document,"mouseup",splitMouseUp)
    if (window.mouseUpHandler != null && (typeof window.mouseUpHandler) != 'undefined')
        window.mouseUpHandler(d.previousSibling, d, d.nextSibling);
    if(window.draggedAction.length>0) ajaxWithoutForm(window.draggedAction,"splitterPos="+(window.draggedVertical?h:v))
}
function splitMouseMove(e) {
    if(draggedVertical)
        // vertical splitters have no maximum boundary, since bottom block is just shifted down, not resized
        window.dragged.style.top = Math.max(-window.dragged.previousSibling.offsetHeight,e.clientY-window.draggedCursorY)+"px";
    else
        window.dragged.style.left = Math.min(window.dragged.nextSibling.offsetWidth-5,Math.max(-window.dragged.previousSibling.offsetWidth,e.clientX-window.draggedCursorX))+"px";
    stopEvent(e)
}


function addEvent(object,event,handler) {
    if(document.attachEvent)
        object.attachEvent('on'+event,handler);
    else
        object.addEventListener(event,handler,false);
}

function removeEvent(object,event,handler) {
    if(document.detachEvent)
        object.detachEvent('on'+event,handler);
    else
        object.removeEventListener(event,handler,false);
}

function stopEvent(e) {
    if(!e) e = event;
    if(typeof(e.stopPropagation) == 'function') e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    if(typeof(e.cancelBubble) == 'boolean') e.cancelBubble = true;
    e.returnValue = false;
    return false;
}



