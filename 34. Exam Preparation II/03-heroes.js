function heroes(input) {
    let n = Number(input.shift());
    let heroCommands = input.slice(0, n);
    let commands = input.slice(n);

    let heroes = {};
    for (let h of heroCommands) {
        let [hero, hp, mp] = h.split(' ');
        hp = Number(hp);
        mp = Number(mp);

        heroes[hero] = {};
        heroes[hero].hp = hp;
        heroes[hero].mp = mp;
    }

    // start playing the game
    while (commands[0] !== 'End') {
        let line = commands.shift();

        let [action, ...rest] = line.split(' - ');
        if (action === 'CastSpell') {
            let [heroName, mpNeeded, spellName] = rest;
            mpNeeded = Number(mpNeeded);
            if (heroes[heroName].mp >= mpNeeded) {
                heroes[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (action === 'TakeDamage') {
            let [heroName, damage, attacker] = rest;

            let oldHP = heroes[heroName].hp;
            heroes[heroName].hp -= damage;
            if (heroes[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${Math.abs(heroes[heroName].hp - oldHP)} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }

        } else if (action === 'Recharge') {
            let [heroName, recharge] = rest;
            recharge = Number(recharge);

            let oldMP = heroes[heroName].mp;

            heroes[heroName].mp += recharge;
            if (heroes[heroName].mp > 200) {
                heroes[heroName].mp = 200;
            }
            console.log(`${heroName} recharged for ${heroes[heroName].mp - oldMP} MP!`);

        } else if (action === 'Heal') {
            let [heroName, amount] = rest;
            amount = Number(amount);

            let oldHP = heroes[heroName].hp;

            heroes[heroName].hp += amount;
            if (heroes[heroName].hp > 100) {
                heroes[heroName].hp = 100;
            }
            console.log(`${heroName} healed for ${heroes[heroName].hp - oldHP} HP!`);
        }
    }

    if (commands[0] === 'End') {
        let entries = Object.entries(heroes);
        entries.sort(([valueA, refA], [valueB, refB]) => {
            let hpA = refA.hp;
            let hpB = refB.hp;
            return hpB - hpA || valueA.localeCompare(valueB);
        });

        for (let [k, v] of Object.entries(heroes)) {
            console.log(k);
            console.log(`  HP: ${v.hp}`);
            console.log(`  MP: ${v.mp}`);
        }
    }
}

heroes((["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]));