function splitter(str) {
    let splitted = str.split(/(?=[A-Z])/);
    splitted = splitted.join(', ');
    console.log(splitted);
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');