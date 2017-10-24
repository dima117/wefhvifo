var parent = document.getElementById('parent');
var wrapper = document.getElementById('wrapper');
var block = document.getElementById('target');
var advs = block.getElementsByClassName('adv');
var images = block.getElementsByClassName('adv__image');
var contents = block.getElementsByClassName('adv__content');

//#region stages

const START = 60;
const END = 120;

const VH = window.screen.height - END - START;
const HEIGHT_MIN = 120;
const HEIGHT_MAX = 320;
const HEIGHT_DIFF = HEIGHT_MAX - HEIGHT_MIN;
const POS_MAX = VH + HEIGHT_MAX;

const ROW_COUNT = 2;
const ADV_HEIGHT_MIN = HEIGHT_MIN / ROW_COUNT;
const ADV_HEIGHT_MAX = HEIGHT_MAX / ROW_COUNT;
const ADV_HEIGHT_DIFF = HEIGHT_DIFF / ROW_COUNT;

const STAGES = [
    0,
    HEIGHT_MIN,
    HEIGHT_MAX,
    VH,
    VH + HEIGHT_DIFF,
    VH + HEIGHT_MAX    
];

const ALL_CLASSES = [
    'parent_stage_0',
    'parent_stage_1',
    'parent_stage_2',
    'parent_stage_3',
    'parent_stage_4',
    'parent_stage_5'
];

function getStageClass(pos) {
    for(var i = STAGES.length - 1; i >= 0; i--) {
        if (STAGES[i] <= pos) {
            return `parent_stage_${i}`;
        }
    }
}

//#endregion

var timeline = new anime.timeline({ autoplay: false })
    .add({
        targets: parent,
        easing: 'linear',
        duration: POS_MAX,
        offset: 0,
        update: function() {
            const className = getStageClass(this.currentTime);
            parent.classList.remove(...ALL_CLASSES);
            parent.classList.add(className);

            switch (className) {
                case 'parent_stage_1':
                    wrapper.style.top = `${START}px`;
                    break;
                case 'parent_stage_3':
                    wrapper.style.top = `${VH - HEIGHT_MAX + START}px`;
                    break;
                default:
                    wrapper.style.top = '';
                    break;
            }
        }
    })
    .add({
        targets: block,
        easing: 'linear',
        duration: POS_MAX,
        offset: 0,
        height: [
            { value: HEIGHT_MIN, duration: 0 },
            { value: HEIGHT_MIN, duration: HEIGHT_MIN },
            { value: HEIGHT_MAX, duration: HEIGHT_DIFF },
            { value: HEIGHT_MAX, duration: VH - HEIGHT_MAX },
            { value: HEIGHT_MIN, duration: HEIGHT_DIFF },
            { value: HEIGHT_MIN, duration: HEIGHT_MIN }
        ] 
    })
    .add({
        targets: [].slice.call(advs, 2),
        easing: 'linear',
        duration: POS_MAX,
        offset: 0,
        translateY: [
            { value: -ADV_HEIGHT_DIFF, duration: 0 },
            { value: -ADV_HEIGHT_DIFF, duration: HEIGHT_MIN },
            { value: 0, duration: HEIGHT_DIFF },
            { value: 0, duration: VH - HEIGHT_MAX },
            { value: -ADV_HEIGHT_DIFF, duration: HEIGHT_DIFF },
            { value: -ADV_HEIGHT_DIFF, duration: HEIGHT_MIN }
        ] 
    })
    .add({
        targets: images,
        easing: 'linear',
        duration: POS_MAX,
        offset: 0,
        opacity: [
            { value: 0, duration: 0 },
            { value: 0, duration: HEIGHT_MIN },
            { value: 1, duration: HEIGHT_DIFF },
            { value: 1, duration: VH - HEIGHT_MAX },
            { value: 0, duration: HEIGHT_DIFF },
            { value: 0, duration: HEIGHT_MIN }
        ]
    })
    .add({
        targets: contents,
        easing: 'linear',
        duration: POS_MAX,
        offset: 0,
        translateY: [
            { value: -ADV_HEIGHT_MAX, duration: 0 },
            { value: -ADV_HEIGHT_MAX, duration: HEIGHT_MIN },
            { value: -ADV_HEIGHT_MAX, duration: HEIGHT_DIFF },
            { value: -ADV_HEIGHT_MIN, duration: VH - HEIGHT_MAX - 80, delay: 40 },
            { value: -ADV_HEIGHT_MAX, duration: HEIGHT_DIFF, delay: 40 },
            { value: -ADV_HEIGHT_MAX, duration: HEIGHT_MIN }
        ]
    });


function onScroll() {
    var pos = parent.getBoundingClientRect().bottom - START;
    pos < 0 && (pos = 0);
    pos > POS_MAX && (pos = POS_MAX);

    timeline.seek(pos);
}

// window.onscroll = onScroll;
window.onscroll = () => requestAnimationFrame(onScroll);    