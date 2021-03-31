function simple() {
    const prop = {
        time: 1,
        image: '.',
        id: 0
    };
    
    prop.id = setInterval(tic => {
        if(tic.time % 3 == 0) prop.image = '•••';
        if(tic.time % 3 == 2) prop.image = '••';
        if(tic.time % 3 == 1) prop.image = '•';
        console.clear();
        console.log(prop.image);
    
        tic.time++;
    }, 500, prop);
}

function spin4() {
    const prop = {
        time: 1,
        images: ['◷', '◶', '◵', '◴'],
        id: 0
    };
    
    prop.id = setInterval(tic => {
        console.clear();

        if(tic.time % 4 == 1) console.log(prop.images[0]);
        if(tic.time % 4 == 2) console.log(prop.images[1]);
        if(tic.time % 4 == 3) console.log(prop.images[2]);
        if(tic.time % 4 == 0) console.log(prop.images[3]);
    
        tic.time++;
    }, 200, prop);
}

function bouncingBall() {
    const prop = {
        time: 1,
        image: '●',
        id: 0
    };

    prop.id = setInterval(tic => {
        console.clear();

        if(tic.time == 1 || tic.time == 9) console.log(`( ${prop.image}     )`);
        if(tic.time == 2 || tic.time == 8) console.log(`(  ${prop.image}    )`);
        if(tic.time == 3 || tic.time == 7) console.log(`(   ${  prop.image}   )`);
        if(tic.time == 4 || tic.time == 6) console.log(`(    ${   prop.image}  )`);
        if(tic.time == 5) console.log(`(     ${    prop.image} )`);

        if (tic.time == 9) tic.time = 1;
        tic.time++;
    }, 1000, prop);
}

function arrow3() {
    const prop = {
        time: 1,
        images: ['▶', '▷'],
        id: 0
    };

    prop.id = setInterval(tic => {
        console.clear();

        if(tic.time == 1) console.log(`(${prop.images[0]} ${prop.images[1]} ${prop.images[1]} ${prop.images[1]} ${prop.images[1]})`);
        if(tic.time == 2) console.log(`(${prop.images[1]} ${prop.images[0]} ${prop.images[1]} ${prop.images[1]} ${prop.images[1]})`);
        if(tic.time == 3) console.log(`(${prop.images[1]} ${prop.images[1]} ${prop.images[0]} ${prop.images[1]} ${prop.images[1]})`);
        if(tic.time == 4) console.log(`(${prop.images[1]} ${prop.images[1]} ${prop.images[1]} ${prop.images[0]} ${prop.images[1]})`);
        if(tic.time == 5) console.log(`(${prop.images[1]} ${prop.images[1]} ${prop.images[1]} ${prop.images[1]} ${prop.images[0]})`);

        if (tic.time == 5) tic.time = 0;
        tic.time++;
    }, 600, prop);
}

function arrow() {
    const prop = {
        time: 1,
        images: ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'],
        id: 0
    };

    prop.id = setInterval(tic => {
        console.clear();

        console.log(`${prop.images[tic.time - 1]}`);

        if (tic.time == 8) tic.time = 0;
        tic.time++;
    }, 300, prop);
}

function grow() {
    const prop = {
        time: 0,
        images: ['▂','▃', '▅', '▆', '▇'],
        id: 0
    };

    prop.id = setInterval(tic => {
        console.clear();

        console.log(`${prop.images[tic.time] || prop.images[Math.abs(tic.time)]}`);

        if (tic.time == 4) tic.time = -4;
        tic.time++;
    }, 200, prop);
}

function line() {
    const prop = {
        time: 0,
        images: ['|', '—-'],
        id: 0
    };

    prop.id = setInterval(tic => {
        console.clear();

        console.log(`${prop.images[tic.time]}`);

        if (tic.time == 1) tic.time = -1;
        tic.time++;
    }, 500, prop);
}

function pie() {
    const prop = {
        time: 0,
        images: ['└', '┌', '┐','┘'],
        id: 0
    };

    prop.id = setInterval(tic => {
        console.clear();

        console.log(`${prop.images[tic.time]}`);

        if (tic.time == 3) tic.time = -1;
        tic.time++;
    }, 500, prop);
}

function star() {
    const prop = {
        time: 0,
        images: ['✶', '✷', '✸','✹', '✺'],
        id: 0
    };

    prop.id = setInterval(tic => {
        console.clear();

        console.log(`${prop.images[tic.time]}`);

        if (tic.time == 4) tic.time = -1;
        tic.time++;
    }, 500, prop);
}

function bounce() {
    const prop = {
        time: 1,
        image: '●',
        id: 0
    };

    prop.id = setInterval(tic => {
        console.clear();

        if(tic.time == 1) console.log(` \n \n${prop.image}`);
        if(tic.time == 2) console.log(` \n${prop.image}\n `);
        if(tic.time == 3) console.log(`${prop.image}\n \n `);

        if (tic.time == 3) tic.time = 0;
        tic.time++;
    }, 500, prop);
}


// simple();
// spin4();
// bouncingBall();
// arrow3();
// arrow();
// grow();
// line();
// pie();
// star();
// bounce();

