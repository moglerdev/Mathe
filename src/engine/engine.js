import { width, height, scene, renderer } from './window'
import { camera, updateCamera, getIsCameraActiveControl } from './camera'

import * as THREE from 'three'

var elapsedTime = 0;

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}, false)

export const init = () => {
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    renderer.domElement.style.overflowY = "visible";
    
    camera.position.set( 0, 0, 100 );

    scene.add(new THREE.AxesHelper(100))

    updateCamera(elapsedTime);
}

export const render = () => {
    elapsedTime++;

    updateCamera(elapsedTime);

	renderer.render( scene, camera );
}

export const add = ( mesh ) => {
    scene.add( mesh );
}

export const remove = ( mesh ) => {
    scene.remove(mesh);
}