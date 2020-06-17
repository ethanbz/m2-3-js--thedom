// Preset values
const FROGS = 3;

const track = document.getElementById('track');

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
const lane = [];
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
