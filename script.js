//Fetch data from json file and store in variable
currentdate = new Date();
let oneJan = new Date(currentdate.getFullYear(), 0, 1);
let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
let result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
let eve_odd = result % 2;
let day = currentdate.getDay();


let storage = [
    ["data[0].sunday.breakfast", "data[0].sunday.lunch", "data[0].sunday.snacks", "data[0].sunday.dinner"],
    ["data[0].monday.breakfast", "data[0].monday.lunch", "data[0].monday.snacks", "data[0].monday.dinner"],
    ["data[0].tuesday.breakfast", "data[0].tuesday.lunch", "data[0].tuesday.snacks", "data[0].tuesday.dinner"],
    ["data[0].wednesday.breakfast", "data[0].wednesday.lunch", "data[0].wednesday.snacks", "data[0].wednesday.dinner"],
    ["data[0].thursday.breakfast", "data[0].thursday.lunch", "data[0].thursday.snacks", "data[0].thursday.dinner"],
    ["data[0].friday.breakfast", "data[0].friday.lunch", "data[0].friday.snacks", "data[0].friday.dinner"],
    ["data[0].saturday.breakfast", "data[0].saturday.lunch", "data[0].saturday.snacks", "data[0].saturday.dinner"]
];
let storage2 = [
    ["data[0].sunday.breakfast", "data[0].sunday.lunch", "data[0].sunday.snacks", "data[0].sunday.dinner"],
    ["data[0].monday.breakfast", "data[0].monday.lunch", "data[0].monday.snacks", "data[0].monday.dinner"],
    ["data[0].tuesday.breakfast", "data[0].tuesday.lunch", "data[0].tuesday.snacks", "data[0].tuesday.dinner"],
    ["data[0].wednesday.breakfast", "data[0].wednesday.lunch", "data[0].wednesday.snacks", "data[0].wednesday.dinner.menu1", "data[0].wednesday.dinner.menu2", "data[0].wednesday.dinner.menu3"],
    ["data[0].thursday.breakfast", "data[0].thursday.lunch", "data[0].thursday.snacks", "data[0].thursday.dinner"],
    ["data[0].friday.breakfast", "data[0].friday.lunch", "data[0].friday.snacks", "data[0].friday.dinner"],
    ["data[0].saturday.breakfast", "data[0].saturday.lunch", "data[0].saturday.snacks", "data[0].saturday.dinner"]
];

function build() {
    if (eve_odd === 0) {
        fetch('even.json')
            .then(response => response.json())
            .then(data => build_table_breakfast(eval(storage[day][0])));

        fetch('even.json')
            .then(response => response.json())
            .then(data => build_table_lunch(eval(storage[day][1])));

        fetch('even.json')
            .then(response => response.json())
            .then(data => build_table_snacks(eval(storage[day][2])));

        fetch('even.json')
            .then(response => response.json())
            .then(data => build_table_dinner(eval(storage[day][3])));
    }
    else {
        fetch('odd.json')
            .then(response => response.json())
            .then(data => build_table_breakfast(eval(storage2[day][0])));

        fetch('odd.json')
            .then(response => response.json())
            .then(data => build_table_lunch(eval(storage2[day][1])));

        fetch('odd.json')
            .then(response => response.json())
            .then(data => build_table_snacks(eval(storage2[day][2])));

        fetch('odd.json')
            .then(response => response.json())
            .then(data => build_table_dinner(eval(storage2[day][3])));
        if (day === 3) {
            fetch('odd.json')
                .then(response => response.json())
                .then(data => build_table_dinner(eval(storage2[day][4])));

            fetch('odd.json')
                .then(response => response.json())
                .then(data => build_table_dinner(eval(storage2[day][5])));
        }

    }
}

function build_table_breakfast(data) {
    let table = document.getElementById("breakfast");
    let x = data.length;
    for (let i = 0; i < x; ++i) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = data[i];
    }
}

function build_table_lunch(data) {
    let table = document.getElementById("lunch");
    let x = data.length;
    for (let i = 0; i < x; ++i) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = data[i];
    }
}

function build_table_dinner(data) {
    let table = document.getElementById("dinner");
    let x = data.length;
    for (let i = 0; i < x; ++i) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = data[i];
    }
}

function build_table_snacks(data) {
    let table = document.getElementById("snack");
    let x = data.length;
    for (let i = 0; i < x; ++i) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = data[i];
    }
}
build();

