function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let fightNo = 0;
    let expenses = 0;
    let isHelmetBroken = false;
    let isSwordBroken = false;
    let brokenShieldCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        fightNo++;

        if(fightNo % 2 == 0) {
            expenses += helmetPrice;
            isHelmetBroken = true;
        }

        if(fightNo % 3 == 0) {
            expenses += swordPrice;
            isSwordBroken = true;
        }

        if(isHelmetBroken === true && isSwordBroken === true) {
            expenses += shieldPrice;
            brokenShieldCount++;
        }

        if(brokenShieldCount % 2 == 0 && brokenShieldCount != 0) {
            expenses += armorPrice;
            brokenShieldCount = 0;
        }

        isHelmetBroken = false;
        isSwordBroken = false;  
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

calculateExpenses(7, 2, 3, 4, 5);
calculateExpenses(23, 12.50, 21.50, 40, 200);