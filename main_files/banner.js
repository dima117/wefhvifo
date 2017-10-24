function js_fadeOut(name){ 
     var obj = document.getElementById(name);
     var property=1;  
     var timer=setInterval(frame,10); 
     
     function frame(){ 
        property-=0.05;
        obj.style.opacity=property;
        obj.style.filter='alpha(opacity='+property*100+')';
        console.log(property);
        if(property<0){
           clearInterval(timer); 
           obj.style.display = 'none';
        }
     }
}

  
function js_fadeIn(name){ 
     var obj = document.getElementById(name);
     var property=0;  
     obj.style.display = 'block';
     obj.style.opacity=0;
     obj.style.filter='alpha(opacity=0)';
     var timer=setInterval(frame,10); 
     
     function frame(){ 
        property+=0.05;
        obj.style.opacity=property;
        obj.style.filter='alpha(opacity='+property*100+')';
        console.log(property);
        if(property>1){ clearInterval(timer); }
     }
}


function makeWidth(name,param) {
    var obj = document.getElementById(name);
    obj.style.width = param+'px';

}

function moveX(name,param) {
    var obj = document.getElementById(name);
    var isx  = obj.offsetLeft;
    obj.style.left = isx+param+'px';

}

function showObject(name) { js_fadeIn(name) } 


function hideObject(name) { js_fadeOut(name) }

