const nerdamer = require("nerdamer");

function failed(reason) {
    return {status: 'failed', reason: reason};
}

function validationTask2(env1, env2) {
    if (!env1 || !env2) return failed('You did not enter parameters of all envelops');

    const {a, b} = env1;
    const {c, d} = env2;
    if (!a || !b || !c || !d) return failed('You did not enter all the required parameters');
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number') return failed('Each side must be a number');
    if (a < 1 || b < 1 || c < 1 || d < 1) return failed('Minimum length of each side 1');
    if (a > 100000 || b > 100000 || c > 100000 || d > 100000) return failed('Maximum length of each side 100000');
}

const diagonally = (widthBig, heightBig, diagonalBig, widthSmall, heightSmall) => {
    nerdamer.set('SOLUTIONS_AS_OBJECT', true);
    const ang = nerdamer.solveEquations([`${widthBig} * ${widthBig} = (${widthBig} - x)^2 + (${heightBig} - y)^2`, `y * (${heightBig} - y) = x * (${widthBig} - x)`]);
    const widthAvailable = Math.sqrt(Math.pow(ang.x, 2) + Math.pow(ang.y, 2));
    const lengthExtra = diagonalBig - widthBig;

    const tan = Math.tan(Math.atan(widthAvailable / lengthExtra));
    const heightAllowed = (diagonalBig - widthSmall) * tan;

    return heightSmall < heightAllowed ? true : false;
}

exports.isImpossiblePutInto = function(env1, env2) {
    const isNotValid = validationTask2(env1, env2);
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
