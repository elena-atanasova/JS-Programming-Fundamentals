function calculateBitcoins(arr) {
    let days = arr.length;  // days spent mining
    let count = 0;

    let i = 0;
    let goldPerDay = arr[i];

    let totalMoney = 0;
    let bitcoins = 0;
    let purchases = [];

    while(days > 0) {
        count++;
        goldPerDay = arr[i];

        if(count === 3) {
            goldPerDay = 0.70 * goldPerDay;
            count = 0;
        }

        totalMoney += goldPerDay * 67.51;

        while (totalMoney >= 11949.16) {
            bitcoins++;
            totalMoney -= 11949.16;
            purchases.push(count);
        }

        days--;
        i++;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if(purchases.length > 0) {
        console.log(`Day of the first purchased bitcoin: ${purchases[0]}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

calculateBitcoins([100, 200, 300]);
calculateBitcoins([50, 100]);
calculateBitcoins([3124.15, 504.212, 2511.124]);