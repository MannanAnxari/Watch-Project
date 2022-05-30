const content = document.querySelector('section');

let currentPosition = window.pageYOffset;
var offset = 0;
speed = 0.04;
scrollWrap = document.querySelector('section');


function skewEffect() {
    const newPosition = window.pageYOffset;
    const dif = newPosition - currentPosition;

    // let skew = dif * .8;
    let skew = dif * .5;
    let rotate = dif * .4;

    content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`
    currentPosition = newPosition;
    requestAnimationFrame(skewEffect);
}
skewEffect();

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

// smoothScroll();


const search = document.querySelector('.search');
const icon = document.querySelector('.icon');

// This is For Expend Search Bar
// icon.onclick = function() {
//     search.classList.toggle('active')
// }

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("itms");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active0");
        current[0].className = current[0].className.replace(" active0", "");
        this.className += " active0";
    });
}

function hasClass(element, className) {
    return `${element.className}`.indexOf(`${className}`) > -1;
}

const btn = document.querySelector('.u-btn');
const btn1 = document.querySelector('.u-btn1');
const cards = document.querySelector('.cards');

btn.addEventListener('click', () => {
    if (hasClass(cards, 'z-active')) {
        cards.className = cards.className.replace(' z-active', '')
    } else {
        cards.className += ' z-active'

    }
})

btn1.addEventListener('click', () => {
    if (hasClass(cards, 'z-active')) {
        cards.className = cards.className.replace(' z-active', '')
    } else {
        cards.className += ' z-active'
    }
})

function text1change() {
    document.getElementById('src').src = 'assets/images/text1.png';
    document.getElementById('src2').src = 'assets/images/textp.png';

}

function text2change() {
    document.getElementById('src').src = 'assets/images/text2.png';
    document.getElementById('src2').src = 'assets/images/textp1.png';


}