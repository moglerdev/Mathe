import { Vector3 } from 'three';
import { PerspectiveCamera } from 'three';

import { width, height, renderer } from './window'

import { CameraControlPAV } from './controller'

const canv = renderer.domElement;

export const camera = new PerspectiveCamera( 45, width / height, 0.1, 500 );

export const controls = new CameraControlPAV(camera, 
    document.body,
    new Vector3(0, 0, 0));

// EVENT HANDLER FOR
//      MOUSE PRESSED
canv.onmousedown = (e) => {
    if(e.button == 0) {
        controls.lock();
    }
}

export const getIsCameraActiveControl = () => { return isActive };

export const updateCamera = (elapsedTime) => {
    controls.update(elapsedTime);
}