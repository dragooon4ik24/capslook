'use strict';

$(function() {

    $.fn.maphilight.defaults = {
        fill: true,
        fillColor: 'ffffff',
        fillOpacity: 0.5,
        stroke: false,
        strokeColor: '00ff00',
        strokeOpacity: 1,
        strokeWidth: 1,
        fade: true,
        alwaysOn: false,
        neverOn: false,
        groupBy: false,
        wrapClass: true,
        shadow: false,
        shadowX: 0,
        shadowY: 0,
        shadowRadius: 6,
        shadowColor: '000000',
        shadowOpacity: 0.8,
        shadowPosition: 'outside',
        shadowFrom: false
    }


    $('.capslook-slider__image').maphilight();
    $('.capslook-clothes__img--clothes').maphilight();
    function setCanvasSize () {
        let canvases = document.querySelectorAll('canvas');
        Array.prototype.forEach.call(canvases, (canvasItem)=> {
            canvasItem.style.width = canvasItem.parentNode.style.width;
            canvasItem.style.height = canvasItem.parentNode.style.height;
        });
    }
    setTimeout(setCanvasSize, 500);
});
