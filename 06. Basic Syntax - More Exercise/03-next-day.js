function nextDay(year, month, date) {
    let day = new Date(year, month - 1, date);
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);

    let yearFormat = nextDay.getFullYear();
    let monthFormat = nextDay.getMonth() + 1;
    let dayFormat = nextDay.getDate();

    console.log(`${yearFormat}-${monthFormat}-${dayFormat}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
