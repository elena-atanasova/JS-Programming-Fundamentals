function cardGame(arr) {
    let map = new Map();

    for (let player of arr) {
        let [name, cards] = player.split(': ');
        cards = cards.split(', ');

        let cardSet = new Set(cards);
        playingCards = Array.from(cardSet);
        if (!map.has(name)) {
            map.set(name, playingCards);
        } else {
            let newCards = map.get(name).concat(playingCards);
            newCards = new Set(newCards);
            newCards = Array.from(newCards);
            map.set(name, newCards);
        }
    }

    for (let [key, value] of map) {
        value = Array.from(value);
        console.log(`${key}: ${sumCards(value)}`);
    }

    function sumCards(arr) {
        let sum = 0;

        for (let card of arr) {
            let el = card.split('');
            let type = el.pop();
            let power = el.join('');
            if (power === 'J') {
                power = 11;
            } else if (power === 'Q') {
                power = 12;
            } else if (power === 'K') {
                power = 13;
            } else if (power === 'A') {
                power = 14;
            }

            switch (type) {
                case 'S':
                    sum += power * 4;
                    break;
                case 'H':
                    sum += power * 3;
                    break;
                case 'D':
                    sum += power * 2;
                    break;
                case 'C':
                    sum += power * 1;
                    break;
                default:
                    break;
            }
        }
        return sum;
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);


