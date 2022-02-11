import { BoxGeometry, MeshBasicMaterial, Mesh, LineBasicMaterial, Vector3, BufferGeometry, Line } from 'three'

import { add, remove, render, init } from './engine/engine'

init();

window.scrollTo(window.scrollX, window.scrollY - 1);
window.scrollTo(window.scrollX, window.scrollY + 1);


const createLine = (points, color) => {
    const material = new LineBasicMaterial({ color: color });
    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry, material);
    add(line);

    return line;
}

const createCube = (pos, size, color) => {
    const geometry = new BoxGeometry(size.x, size.y, size.z);
    const material = new MeshBasicMaterial( { color: color } );
    const cube = new Mesh( geometry, material );

    cube.position.x = pos.x;
    cube.position.y = pos.y;

    add(cube);

    return cube;
}

createCube(new Vector3(0, 0, 0), new Vector3(2, 2, 2), 0x2f2f2f)

const animate = () => {
	requestAnimationFrame( animate );

    render();
}
animate();