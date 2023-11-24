function deserialize(arr) {
    let newStr = [];

    let i = 0;
    while (arr[i] !== 'end') {
        let line = arr[i];
        let [letter, indexes] = line.split(':');
        let [...index] = indexes.split('/').map(Number);
        let lastIndex = index[index.length - 1];
        
        for (let j = 0; j < index.length; j++) {
            newStr[index[j]] = letter;
        }
        i++;
    }

    console.log(newStr.join(''));
}

deserialize(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);