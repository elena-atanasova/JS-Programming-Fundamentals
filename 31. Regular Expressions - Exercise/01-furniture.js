function furniture(arr) {
    let i = 0;
    let line = arr[i];

    let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)$/;
    let validName;
    let sum = 0;

    console.log('Bought furniture:');

    while (line !== 'Purchase') {

        if ((validName = pattern.exec(line)) !== null) {
            let name = validName.groups.name;
            let price = +validName.groups.price;
            let quantity = validName.groups.quantity;

            sum += price * quantity;

            console.log(`${name}`);
        }

        i++;
        line = arr[i];
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);