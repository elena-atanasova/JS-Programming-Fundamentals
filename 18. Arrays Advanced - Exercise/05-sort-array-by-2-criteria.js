function sortArray(arr) {
    let twoCriteriaSort = (cur, next) => cur.length - next.length || cur.localeCompare(next);
    arr.sort(twoCriteriaSort);
    console.log(arr.join('\n'));
}

sortArray(['alpha','beta','gamma']);