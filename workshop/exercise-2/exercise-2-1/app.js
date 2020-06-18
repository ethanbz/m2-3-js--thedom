// Preset values
const FROGS = 3;

const track = document.getElementById('track');

//Create lanes
for (let i = 0; i < FROGS; i++) {
    let lane = document.createElement('li');
    let num = document.createElement('span');
    
    lane.setAttribute('id', `lane-${i+1}`);
    num.innerText = `${i+1}`;

    track.appendChild(lane);
    lane.appendChild(num);
}

//Fetch random racers
let racers = [];
for (let i = 0; i < FROGS; i++) {
    let randomFrog;
    do {
        randomFrog = frogStable[Math.round(Math.random()*4)];
    } while (racers.includes(randomFrog));
    racers.push(randomFrog);
    
}

console.log(racers);

//Load frogs into lanes
racers.forEach(racer => {
    let frog = document.createElement('span');
    let index = racers.indexOf(racer);
    frog.classList.add('frog');
    frog.innerText = `${racer.number}`;
    frog.style.background = racer.color;
    frog.id = `frog${index+1}`;
    document.getElementById(`lane-${index+1}`).appendChild(frog);

    racers[index].progress = 0;
    racers[index].lane = `${index+1}`;

});

console.log(racers);

function racingFrog(frog) {
    let hop = Math.round(Math.random()*10);
    let progress = frog.progress;

    let race = setInterval(function () {
        progress += hop;
        hop = Math.round(Math.random()*10);
        if (progress > 100) {
            progress = 100;
            clearInterval(race);
        }

        document.getElementById(`frog${frog.lane}`).style.left = `${progress}%`;

    }, Math.round(Math.random()*1000)+500);
}
console.log(racers);


racers.forEach(frog => {
    racingFrog(frog)
});

console.log(racers);
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
/*const lane = [];
const span = [];
const racers = [];
for (let i = 0; i < FROGS; i++) {
    lane[i] = document.createElement('li');
    track.appendChild(lane[i]);
    span[i] = document.createElement('span');
    lane[i].appendChild(span[i]);
    //span[i].innerText = `lane-${i+1}`;

    racers[i] = frogStable[i];
    
    const frog = document.createElement('span');
    frog.innerText = `${racers[i].number}`;
    frog.style.background = racers[i].color;
    frog.classList.add(`racer${i}`);
    frog.classList.add("frog");
    lane[i].appendChild(frog);

    racers[i].progress = 0;
    racers[i].lane = i;


}

function racingFrog(racer) {
    let progess = racer.progress;
    let hop = Math.random()*10;
    progess += hop;
    document.querySelector(`.racer${racer.lane}`).style.left = progress;
}

racers.forEach(function (racer) {
    // call this function once for each racer.
    racingFrog(racer);
});



const race = setInterval(racingFrog, 2000);
if (racer.style.left >= 100) clearInterval(race);
// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane
*/
