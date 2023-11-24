function oddOccurrences(str) {
    let map = new Map();
    str = str.split(' ');
    for (let st of str) {
        st = st.toLowerCase();
        if (!map.has(st)) {
            map.set(st, 1);
        } else {
            map.set(st, map.get(st) + 1);
        }
    }

    let output = [];
    for (let [key, value] of map) {
        if(value % 2 !== 0) {
            output.push(key);
        }
    }
    
    console.log(output.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');