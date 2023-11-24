function manageAccount(arr) {
    let account = arr[0];
    account = account.split(" ");   // make the acount to array of games
    
    let commands = arr.slice(1, arr.length);

    let i = 0;
    let command = commands[i];

    while(command !== "Play!") {
        command = command.split(" ");

        let instruction = command[0];
        let game = command[1];

        if (instruction === "Install") {
            if(!account.includes(game)){
                account.push(game);
            }
            
        } else if (instruction === "Uninstall") {
            if(account.includes(game)){
                for (let i = 0; i < account.length; i++) {
                    if (account[i] === game) {
                        account.splice(i, 1);
                    }
                }
            }
        } else if (instruction === "Update") {
            if(account.includes(game)){
                for (let i = 0; i < account.length; i++) {
                    if (account[i] === game) {
                        account.splice(i, 1);
                        account.push(game);
                        break;
                    }
                }
            }
        } else if (instruction === "Expansion") {
            game = game.split("-");
            let gameName = game[0];
            let expansion = game[1];
            if(account.includes(gameName)){
                for (let i = 0; i < account.length; i++) {
                    if (account[i] === gameName) {
                        account.splice(i + 1, 0, `${gameName}:${expansion}`);
                        break;
                    }
                }
            }
        }

        i++;
        command = commands[i];
    }
    
    console.log(account.join(" "));
}

manageAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
manageAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);