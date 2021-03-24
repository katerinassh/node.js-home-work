function meeting(s) {
    return s.split(';').map(elem => {
        const changed = elem.split(':').map(el => el.toUpperCase());
        return `(${changed[1]}, ${changed[0]})`;
    }).sort().join(' ');
}

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// console.log(meeting(s));