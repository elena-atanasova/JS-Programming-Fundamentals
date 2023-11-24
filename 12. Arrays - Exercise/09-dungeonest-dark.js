function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;

    arr = arr[0].split("|");
    
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        let firstPart = command[0];
        let num = Number(command[1]);

        if(firstPart === "potion") {
            health += num;
            if (health >= 100) {
                num = num - (health - 100);
                health = 100;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if(firstPart === "chest") {
            coins += num;
            console.log(`You found ${num} coins.`);

        } else {
            health -= num;
            if(health > 0) {
                console.log(`You slayed ${firstPart}.`);
            } else if(health <= 0) {
                console.log(`You died! Killed by ${firstPart}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }

        if(i === arr.length - 1) {
            console.log(`You've made it!`);
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);