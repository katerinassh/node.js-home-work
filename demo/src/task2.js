import {validationTask2 as validation} from './validation.js';
// const nerdamer = require("nerdamer");

const diagonally = (widthBig, heightBig, diagonalBig, widthSmall, heightSmall) => {
    nerdamer.set('SOLUTIONS_AS_OBJECT', true);
    const ang = nerdamer.solveEquations([`${widthBig} * ${widthBig} = (${widthBig} - x)^2 + (${heightBig} - y)^2`, `y * (${heightBig} - y) = x * (${widthBig} - x)`]);
    const widthAvailable = Math.sqrt(Math.pow(ang.x, 2) + Math.pow(ang.y, 2));
    const lengthExtra = diagonalBig - widthBig;

    const tan = Math.tan(Math.atan(widthAvailable / lengthExtra));
    const heightAllowed = (diagonalBig - widthSmall) * tan;

    return heightSmall < heightAllowed ? true : false;
}

export default function isImpossiblePutInto(env1, env2) {
    const isNotValid = validation(env1, env2);
    const result = isNotValid ? isNotValid : '';
    if (result) return {status: result.status, reason: result.reason};

    const {a, b} = env1;
    const {c, d} = env2;

    const width1 = Math.max(a, b);
    const height1 = Math.min(a, b);
    const width2 = Math.max(c, d);
    const height2 = Math.min(c, d);

    if (width1 < width2 && height1 < height2) return 1;
    if (width1 > width2 && height1 > height2) return 2;

    const diagonal1 = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    const diagonal2 = Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2));
    let isPossible;

    if (width1 > width2 && height1 < height2 && diagonal2 > diagonal1) {
        isPossible = diagonally(width2, height2, diagonal2, width1, height1) ? 1 : null;
    }
    if (width2 > width1 && height2 < height1 && diagonal1 > diagonal2) {
        isPossible = diagonally(width1, height1, diagonal1, width2, height2) ? 2 : null;
    }
    
    if (isPossible) return isPossible;
    return 0;
}
