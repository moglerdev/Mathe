import { WebGLRenderer, Scene } from 'three';

import { width, height } from './window'
import { camera, updateCamera, getIsCameraActiveControl } from './camera'

export const scene = new Scene();
export const renderer = new WebGLRenderer();

var elapsedTime = 0;

export const init = () => {
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    renderer.domElement.style.overflowY = "visible";
    
    camera.position.set( 0, 0, 100 );

    updateCamera();
}

export const render = () => {
    elapsedTime++;

    if(getIsCameraActiveControl()) {
       updateCamera();
    }

	renderer.render( scene, camera );
}

export const add = ( mesh ) => {
    scene.add( mesh );
}

export const remove = ( mesh ) => {
    scene.remove(mesh);
}