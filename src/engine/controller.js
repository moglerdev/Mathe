import { Vector3, Vector2 } from "three";
import { height, width } from "./window";

export const mousePos = new Vector2(0, 0);

document.exitPointerLock = document.exitPointerLock    ||
                           document.mozExitPointerLock;


document.addEventListener("mousemove", (e) => {
    mousePos.x = e.layerX;
    mousePos.y = e.layerY;
}, false);

export class CameraControlPAV {
    __camera = null;
    __element = document.body; 
    __lockAt = new Vector3(0,0,0);

    __curPos = new Vector2(11, 11);

    __radius = 10;
    __minRadius = 2;
    __maxRadius = 100;
    __speed = 0.005;

    __isLocked = false;

    __isAnimated = false;
    
    constructor(camera, element = document.body, lockAt = new Vector3(0,0,0)) {
        this.__lockAt = lockAt;
        if (element == null) {
            element = document.body;
        }
        this.__element = element;
        this.__camera = camera;

        const onPointerLock = (e) => {
            this.__isLocked = true;
            document.body.style.cursor = "none";
        }

        const onPonterUnlock = (e) => {
            this.__isLocked = false;
            document.body.style.cursor = "default";
        }

        const onPointerLockChange = (e) => {
            if(document.pointerLockElement != null 
                || document.mozPointerLockElement != null) {
                onPointerLock(e);
            } else {
                onPonterUnlock(e);
            }
        }

        const onMouseMove = (e) => {
            if(this.__isLocked) {
                this.__curPos.x += (mousePos.x - (width / 2)) //+ this.__lastPos.x;
                let y = this.__curPos.y + (-mousePos.y + (height / 2))//+ this.__lastPos.y;
                this.__curPos.y = y;
            }
        }

        const onWheel = (e) => {
            this.__radius += -e.wheelDeltaY / 40;
            if (this.__radius < this.__minRadius) {
                this.__radius = this.__minRadius;
            } else if(this.__radius > this.__maxRadius) {
                this.__radius = this.__maxRadius;
            }
        }
        
        element.addEventListener("mousemove", onMouseMove, false);

        document.addEventListener("pointerlockchange", onPointerLockChange, false);

        window.addEventListener("wheel", onWheel, false);
    }

    lock() {
        this.__element.requestPointerLock();
    }

    unlock() {
        this.__element.exitPointerLock();
    }

    update(elapsedTime) {
        let x = this.__curPos.x;
        let y = this.__curPos.y;
        if(this.__isLocked) {
        }
        else if(this.__isAnimated) {
            this.__radius = Math.abs(Math.cos(this.__speed * (elapsedTime / 2)) * 10) + 10;
            x = elapsedTime / 2;
            y = elapsedTime / 4;
        }
    
        this.__camera.position.x = this.__radius * Math.cos(this.__speed * x) + this.__lockAt.x;
        this.__camera.position.y = this.__radius * Math.sin(this.__speed * y) + this.__lockAt.y;
        this.__camera.position.z = this.__radius * Math.sin(this.__speed * x) + this.__lockAt.z;
    
        this.__camera.lookAt( this.__lockAt.x, this.__lockAt.y, this.__lockAt.z );
    }
}