const ipToBit = ([a, b, c, d]) => (+a * 256^3) + (+b * 256^2) + (+c * 256) + +d + 1;

function ipsBetween(ip1, ip2) {
    ip1 = ipToBit(ip1.split('.'));
    ip2 = ipToBit(ip2.split('.'));
    
    return ip2 - ip1;
}

console.log(ipsBetween("20.0.0.10", "20.0.1.0"));