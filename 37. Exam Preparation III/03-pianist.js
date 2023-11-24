function pianist(input) {
    let n = input.shift();
    let composerInfo = input.splice(0, n);

    let musicPieces = {};
    for (let m of composerInfo) {
        let [piece, composer, key] = m.split('|');
        musicPieces[piece] = {};
        musicPieces[piece].composer = composer;
        musicPieces[piece].key = key;
    }
    
    while (input[0] !== 'Stop') {
        let command = input.shift();
        let [action, ...instructions] = command.split('|');
        
        if (action === 'Add') {
            let [piece, composer, key] = instructions;
            if (!musicPieces.hasOwnProperty(piece)) {
                musicPieces[piece] = {};
                musicPieces[piece].composer = composer;
                musicPieces[piece].key = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (action === 'Remove') {
            let [piece] = instructions;
            if (musicPieces.hasOwnProperty(piece)) {
                delete musicPieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action === 'ChangeKey') {
            let [piece, newKey] = instructions;
            if (musicPieces.hasOwnProperty(piece)) {
                musicPieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for (let [k, v] of Object.entries(musicPieces)) {
        console.log(`${k} -> Composer: ${v.composer}, Key: ${v.key}`);
    }
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',

    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);