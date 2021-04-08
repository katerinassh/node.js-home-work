import {validationTask3 as validation} from './validation.js';

function sortBySquare(array) {
    array.sort((a, b) => a.square <= b.square ? 1 : -1);
}

export default function sortTriangles(triangles) {
    let i = 0;
    while (i < triangles.length) {
        const triangle = triangles[i];
        let a, b, c;
        [a, b, c] = [triangle[triangle.vertices[0].toLowerCase()], triangle[triangle.vertices[1].toLowerCase()], triangle[triangle.vertices[2].toLowerCase()]];

        let halfP = (a + b + c) / 2;
        triangle.square = Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));

        const isNotValid = validation(a, b, c, triangle.square);
        const result = isNotValid ? isNotValid : null;
        
        if (result) return {status: result.status, reason: result.reason};
        i++;
    }

    sortBySquare(triangles);
    return triangles.map(triangle => triangle.vertices);
}