var Loves = [];
var LoveNum = 60;
var xm = 0;
var ym = 9999;
var screenX = 0;
var screenY = 0;

function movbulb() {
    with (this) {
        if (ec < 20) {
            if (Math.abs(x0 - xm) < 100 && Math.abs(y0 - ym) < 100) {
                xx = (xm - x0) / 8;
                yy = (ym - y0) / 8;
                ec++;
            }
        }
        xx *= 0.99;
        yy *= 0.99;
        x0 = Math.round(x0 + Math.cos(y0 / 15) * p) + xx;
        y0 += yy - v;
        if (y0 < -h * 2 || x0 < -w * 2 || x0 > screenX + w * 2) {
            y0 = screenY + N + h * 2;
            x0 = screenX / 2 - 100 + Math.random() * 100;
            ec = 0;
        }
        obj.style.top = y0 - h;
        obj.style.left = x0 - w;
    }
}

function CObj(N, img, w, h) {
    this.obj = document.createElement("img");
    this.obj.src = img.src;
    this.obj.style.position = "fixed";
    this.obj.style.left = -1000;
    document.body.appendChild(this.obj);
    this.N = N;
    this.x0 = 0;
    this.y0 = -1000;
    this.v = 1 + Math.round((80 / h) * Math.random());
    this.p = 1 + Math.round((w / 8) * Math.random());
    this.xx = 0;
    this.yy = 0;
    this.ec = 0;
    this.w = w;
    this.h = h;
    this.movbulb = movbulb;
}

document.onmousemove = function (e) {
    if (window.event) e = window.event;
    xm = document.body.scrollLeft + (e.x || e.clientX);
    ym = document.body.scrollTop + (e.y || e.clientY);
};

function run() {
    for (var i in Loves) Loves[i].movbulb();
    setTimeout(run, 30);
}

//获取屏幕宽高度
function resize() {
    screenX = document.body.offsetWidth;
    screenY = document.body.offsetHeight;
}

//重置屏幕宽高度
window.onresize = resize;

window.onload = function () {
    var imgs = document.getElementById("bubbles").getElementsByTagName("img");

    resize();

    for (var i = 0; i < LoveNum; i++) {
        var sf = imgs[i % imgs.length];
        Loves[i] = new CObj(i, sf, sf.width / 2, sf.height / 2);
    }

    run();


    var loveTime = document.getElementsByClassName('loveTime')[0];
};