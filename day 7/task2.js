function decodeBySentence(message, sentence) {
    let string = '';
    sentence = sentence.replace(/[.,%:;'"]/g, '').split(' ');

    sentence.forEach((word, index) => {
        string = `${string} ${message[index + 1].split(' ')[word.length]}`;
    });
    return `${string[1].toUpperCase()}${string.slice(2)}.`;
}

function decoding(message) {
    if (!message) return '';

    message = message.split(/[\.!\?]+/);
    const firstSentence = message[0].replace(/[.,%:;'"]/g, '').split(' ');

    let decodedStr = decodeBySentence(message, message[0]);

    if (message.length - 1 > firstSentence.length){
        decodedStr = `${decodedStr} ${decodeBySentence(message.slice(firstSentence.length + 1), message[firstSentence.length + 1].trim())}`;
    };
    return decodedStr;
}

// console.log(decoding('Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'));