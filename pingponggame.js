//2 players
//getMatchCount(2,9,10,9,12);

//4 players
//getMatchCount(4,9, 10,9, 12,13, 15,10, 18);
getMatchCount(7,
    9, 11,
    12, 14,
    13, 15,
    11, 18,
    14, 18,
    10, 14,
    15, 18);

function getMatchCount(...args) {

    let singleCount = 0;
    let doubleCount = 0;
    let players = {};
    let playerCount = args[0];
    let playersArray = args.slice(1, playerCount * 2 + 1);


    let time = {
        '9': [], '10': [], '11': [], '12': [], '13': [],
        '14': [], '15': [], '16': [], '17': [], '18': [],
    };


    for (let i = 0; i < playerCount; i++) {
        players[i] = playersArray.splice(0, 2);
    }

    for (let p in players) {
        let playerNumber = parseInt(p) + 1;

        let pt = players[p];
        let start = pt[0];
        let end = pt[1];
        for (var k = start; k < end; k++) {
            time[k].push(playerNumber);
        }
    }

    for (let t in time) {
        let timeSlot = time[t];
        if (timeSlot.length > 3) {
            doubleCount += 1;
        }
        if (timeSlot.length >= 2 && timeSlot.length < 4) {
            singleCount += 1;
        }
    }

    console.log("Output", singleCount, " ", doubleCount);
}


