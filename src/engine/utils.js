import { BoxGeometry, MeshPhongMaterial, Mesh, LineBasicMaterial, Vector3, BufferGeometry, Line } from 'three'
import { add } from './engine'

export const createLine = (points, color) => {
    const material = new LineBasicMaterial({ color: color });
    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry, material);
    add(line);

    return line;
}

export const createCube = (pos, size, color) => {
    const geometry = new BoxGeometry(size.x, size.y, size.z);
    const material = new MeshPhongMaterial( { color: color } );
    const cube = new Mesh( geometry, material );

    cube.position.x = pos.x;
    cube.position.y = pos.y;
    cube.position.z = pos.z;

    add(cube);

    return cube;
}

export const BVR = new Vector3(0, 0, 0);

export const createVisualVector = (pos, color) => {
    let l = createLine(
        [BVR, pos],
        color
    )
    let c = createCube(pos, new Vector3(0.1, 0.1, 0.1), color)
    return [l, c];
}