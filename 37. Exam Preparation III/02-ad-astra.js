function solve(str) {
    let pattern = /([#|])(?<item>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[0-9]+)\1/g;
    
    let validFood;
    let validFoods = [];
    let totalCalories = 0;
    while ((validFood = pattern.exec(str)) !== null) {
        validFoods.push(validFood[0]);
        let calories = validFood.groups['calories'];
        calories = Number(calories);
        totalCalories += calories;
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    for (let line of validFoods) {

        let splitter = /[#|]/;
        let [space, item, date, calories, spaceEnd] = line.split(splitter);
        
        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    );