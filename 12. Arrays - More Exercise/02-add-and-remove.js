function addRemove(commands) {
    let output = [];
    let num = 0;
    for (let i = 0; i < commands.length; i++) { 
        num++;
        if (commands[i] === "add") {
            output.push(num);
        } else if(commands[i] === "remove") {
            output.pop(commands[commands.length - 1]);
        }
    }

    if(output.length <= 0) {
        console.log("Empty");
    } else {
        output = output.join(" ");
        console.log(output);
    }  
}

addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove([['remove', 'remove', 'remove']]);