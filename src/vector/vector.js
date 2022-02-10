import { Vector3 } from 'three'

export const kreuzProdukt = (vec1, vec2) => {
    return new Vector3(
        vec1.y * vec2.z - vec1.z * vec2.y,
        vec1.z * vec2.x - vec1.x * vec2.z,
        vec1.x * vec2.y - vec1.y * vec2.x
    );
}

/**
 * Euklidische Norm / 2-Norm
 * @returns integer
 */
export const  betrag = (vector) => {
    return Math.sqrt(summennorm(vector));
}

/**
 * Summennorm / 1-Norm
 * @returns 
 */
export const summennorm = (vector) => {
    return Math.pow(vector.x, 2) + Math.pow(vector.y, 2) + Math.pow(vector.z, 2)
}