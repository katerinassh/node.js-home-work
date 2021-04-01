function format(value) {
    return formated = value < 10 ? `0${value}` : value;
}

function countdown(miliseconds) {
    if(typeof miliseconds != 'number') return 'Invalid input';

    const convertedDate = [];
    const sign = miliseconds < 0 ? '-' : '+';

    const hours = format(Math.floor(Math.abs(miliseconds) / (1000 * 60 * 60))),
          minutes = format(Math.floor((Math.abs(miliseconds) / (1000 * 60)) % 60)),
          seconds = format(Math.floor(Math.abs(miliseconds) / 1000 % 60));
    convertedDate.push(hours, minutes, seconds);

    return `${sign}${convertedDate.join(':')}`
}

console.log(countdown(360000000));