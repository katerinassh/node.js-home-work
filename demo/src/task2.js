export default function isImpossiblePutInto({a, b}, {c, d}) {
    if ((a < c && b < d) || (a < d && b < c)) return 1;
    else if ((c < a && d < b) || (d < a && c < b)) return 2;
    else return 0;
}

// какой результат выдавать, если конверты одинаковые