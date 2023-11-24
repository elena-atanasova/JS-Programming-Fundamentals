function printDay(num) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let output = num > 0 && num <= 7 ? days[num - 1] : "Invalid day!";
    
    console.log(output);
}

printDay(3);
printDay(7);