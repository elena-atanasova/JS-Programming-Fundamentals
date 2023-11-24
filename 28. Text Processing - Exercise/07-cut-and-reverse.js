function cutReverse(str) {
    let firstHalf = str.split('').slice(0, str.length / 2);
    let secondHalf = str.split('').slice(str.length / 2, str.length);
    firstHalf = firstHalf.reverse();
    secondHalf = secondHalf.reverse();
    console.log(firstHalf.join(''));
    console.log(secondHalf.join(''));
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');