import { Vector3 } from 'three';
import { render, init } from './engine/engine'

import { createCube, createLine, createPlane, createVisualVector } from './engine/utils'
import { kreuzProdukt } from './vector/vector';

init();

//createCube(new Vector3(0, 0, 0), new Vector3(2, 2, 2), 0x2f2f2f)

let v1 = new Vector3(1, 1, 1);
let v2 = new Vector3(0, -1, 1);
let v3 = new Vector3(1/3, 1/3, 1/3);

let w = createVisualVector(kreuzProdukt(v1, v2, 0xff00ff) );

let l1 = createVisualVector(v1, 0xff0000) // ROT
let l2 = createVisualVector(v2, 0x00ff00) // GRÜN
let l3 = createVisualVector(v3, 0x0000ff) // BLAU

const p1 = createPlane(v1, v2, 0xf2f200);

const animate = () => {
	requestAnimationFrame( animate );

    render();
}
animate();