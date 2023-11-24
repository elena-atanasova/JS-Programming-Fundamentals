function solve(obj, arr) {
    
    for (let command of arr) {
        let [currCommand, site] = command.split(' ');

        if (currCommand === 'Open') {
            openTab(obj, site);
        } else if (currCommand === 'Close') {
            close(obj, site);
        } else if (command === 'Clear History and Cache') {
            deleteObject(obj);
        }
    }

    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);

    function openTab(obj, site) {
        obj['Open Tabs'].push(site);
        browserLogs(obj, 'Open ' + site);
    }

    function browserLogs(obj, command) {
        obj['Browser Logs'].push(command)
    }

    function close(obj, site) {
        if (obj['Open Tabs'].includes(site)) {
            let index = obj['Open Tabs'].findIndex(x => x === site);
            let result = obj['Open Tabs'].splice(index, 1);
            obj['Recently Closed'].push(result[0]);
            browserLogs(obj, 'Close ' + site);
        }
    }

    function deleteObject(obj) {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
    }
}

solve({"Browser Name":"Google Chrome",
                "Open Tabs":["Facebook","YouTube","Google Translate"], 
                "Recently Closed":["Yahoo","Gmail"], 
                "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail",
                                "OpenFacebook"]},

                ["Close Facebook", "Open StackOverFlow", "Open Google"]);