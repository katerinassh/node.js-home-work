function sortTriangles(triangles) {
    let max = -Infinity;
    triangles.forEach(({vertices, a, b, c}, index) => {
        let halfP = (a + b + c)/2;
        let square = Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));
        if (index != 0) 
    });
}