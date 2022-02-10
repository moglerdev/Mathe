import { PerspectiveCamera, Vector2 } from 'three';

import { width, height } from './window'

export const camera = new PerspectiveCamera( 45, width / height, 0.1, 500 );
export const mousePos = new Vector2(0, 0);

const startPos = new Vector2(0, 0);
const curPos = new Vector2(0, 0);
const lastPos = new Vector2(0, 0);

var radius = 10;
const speed = 0.01; 

var isActive = false;

// EVENT HANDLER FOR 
//      MOUSE MOVEMENT
document.onmousemove = function(e){
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;

    if(isActive) {
        e.preventDefault();

        curPos.x = (mousePos.x - startPos.x) + lastPos.x;
        curPos.y = (mousePos.y - startPos.y) + lastPos.y;
    }
}

// EVENT HANDLER FOR
//      MOUSE PRESSED
document.onmousedown = () => {
    startPos.x = mousePos.x;
    startPos.y = mousePos.y;
    isActive = !isActive;
    document.body.style.cursor = isActive ? "none" : "default";
}

// EVENT HANDLER FOR
//      MOUSE RELEASED
document.onmouseup = () => {
    lastPos.x = curPos.x;
    lastPos.y = curPos.y;
}

window.onwheel = (e) => {
    radius += e.wheelDeltaY / 20;
    if (radius < 10) {
        radius = 10;
    } else if(radius > 100) {
        radius = 100;
    }
}

export const getIsCameraActiveControl = () => { return isActive };

export const updateCamera = () => {
    let x = curPos.x;
    let y = curPos.y;

    camera.position.x = radius * Math.cos(speed * x);
    camera.position.y = radius * Math.sin(speed * y);
    camera.position.z = radius * Math.sin(speed * x);

    camera.lookAt( 0, 0, 0 );
}