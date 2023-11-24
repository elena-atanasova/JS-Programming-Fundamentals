function calculateResources(base, increment) {

    let baseSize = base * base;
    let bulk = (base - 2) * (base - 2);
    let outerLayer = baseSize - bulk;
    let heightStep = increment;

    let count = 0;
    let pyramidHeight = 0;

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold;

    while (base > 0) {
        count++;
        pyramidHeight++;

        bulk = (base - 2) * (base - 2);
        outerLayer = baseSize - bulk;

        if (bulk === 0) {
            break;
        }

        if (count % 5 !== 0) {
            stone += bulk * heightStep;
            marble += outerLayer * heightStep;
        }

        if (count % 5 === 0) {
            stone += bulk * heightStep;
            lapisLazuli += outerLayer * heightStep;
        }

        base -= 2;
        baseSize = base * base;
    }

    if (base < 0) {
        gold = (base + 2) * (base + 2) * heightStep;
        stone -= gold;
    } else {
        gold = base * base * heightStep;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * heightStep)}`);
}

calculateResources(11, 1);
calculateResources(11, 0.75);
calculateResources(12, 1);
calculateResources(23, 0.5);