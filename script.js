//Fetch data from json file and store in variable
currentdate = new Date();
let oneJan = new Date(currentdate.getFullYear(), 0, 1);
let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000) - 1);
let result = Math.ceil((numberOfDays) / 7);
let eve_odd = result % 2;
let day = currentdate.getDay();

console.log(day);
let storage = [
    ["data1[0].sunday.breakfast", "data1[0].sunday.lunch", "data1[0].sunday.snacks", "data1[0].sunday.dinner"],
    ["data[0].monday.breakfast", "data[0].monday.lunch", "data[0].monday.snacks", "data[0].monday.dinner"],
    ["data[0].tuesday.breakfast", "data[0].tuesday.lunch", "data[0].tuesday.snacks", "data[0].tuesday.dinner"],
    ["data[0].wednesday.breakfast", "data[0].wednesday.lunch", "data[0].wednesday.snacks", "data[0].wednesday.dinner"],
    ["data[0].thursday.breakfast", "data[0].thursday.lunch", "data[0].thursday.snacks", "data[0].thursday.dinner"],
    ["data[0].friday.breakfast", "data[0].friday.lunch", "data[0].friday.snacks", "data[0].friday.dinner"],
    ["data[0].saturday.breakfast", "data[0].saturday.lunch", "data[0].saturday.snacks", "data[0].saturday.dinner"]
];
let storage2 = [
    ["data[0].sunday.breakfast", "data[0].sunday.lunch", "data[0].sunday.snacks", "data[0].sunday.dinner"],
    ["data1[0].monday.breakfast", "data1[0].monday.lunch", "data1[0].monday.snacks", "data1[0].monday.dinner"],
    ["data1[0].tuesday.breakfast", "data1[0].tuesday.lunch", "data1[0].tuesday.snacks", "data1[0].tuesday.dinner"],
    ["data1[0].wednesday.breakfast", "data1[0].wednesday.lunch", "data1[0].wednesday.snacks", "data1[0].wednesday.dinner.menu1", "data1[0].wednesday.dinner.menu2", "data1[0].wednesday.dinner.menu3"],
    ["data1[0].thursday.breakfast", "data1[0].thursday.lunch", "data1[0].thursday.snacks", "data1[0].thursday.dinner"],
    ["data1[0].friday.breakfast", "data1[0].friday.lunch", "data1[0].friday.snacks", "data1[0].friday.dinner"],
    ["data1[0].saturday.breakfast", "data1[0].saturday.lunch", "data1[0].saturday.snacks", "data1[0].saturday.dinner"]
];

let data = [
    {
        "sunday": {
            "breakfast": [
                "ALOO PARANTHA",
                "CURD,PICKLE",
                "EGG/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI",
                "KADAI VEG",
                "BRIYANI",
                "CHICKEN GRAVE -NONVEG",
                "KADAI PANNER -VEG",
                "ONION RAITHA",
                "PICKLE/SUGAR/SALT"
            ],
            "snacks": [
                "VEG PUFF TOMATO SAUCE",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "PHULKA, WHITE RICE",
                "MIX VEG SAMBAR",
                "GOBI MANCHURIAN DRY",
                "IVY GOURD CURRY",
                "TOMATO RASAM",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "BANANA"
            ]
        },
        "monday": {
            "breakfast": [
                "IDDLY",
                "VADA",
                "GROUNDNUT CHUTNEY",
                "SAMBAR",
                "OMLET/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "MATHI CHAPATTI",
                "CHOLE MASALA",
                "WHITE RICE",
                "VEG DHALL",
                "BHINDY MASALA",
                "CURD",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "VEG SALAD"
            ],
            "snacks": [
                "RAW BANANA BAJJIONION CHOPPAD",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "CHAPATTI ",
                "SAMBAR RICE",
                "GAJAR SUVA SABZI DRY",
                "ALOO MUTTER MASALA",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "BADAM MILK"
            ]
        },
        "tuesday": {
            "breakfast": [
                "VEG NOODLES",
                "TOMATTO KETCHUP",
                "EGG/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI ,WHITE  RICE",
                "PANCHRATNA DAL ",
                "ALOO JEERA",
                "VATHAKOLAMBU",
                "PARUPUPODI OIL",
                "Fryums,CURD",
                "PICKLE/SUGAR/SALT",
                "SPROUT SALAD"
            ],
            "snacks": [
                "SAMOSA KETCHUP",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "PHULKA, WHITE RICE",
                "TOMATO RICE",
                "PINEAPPLE RASAM",
                "Mix veg curry",
                "CURD",
                "PUDINA THOVAIL",
                "PICKLE/SUGAR/SALT",
                "BREAD CUSTRED"
            ]
        },
        "wednesday": {
            "breakfast": [
                "PLAIN DOSA",
                "COCONUT CHUTTNEY",
                "ALOO MASALA",
                "OMLET/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI",
                "CHILLY SOYA BEAN DRY",
                "WHITE RICE",
                "DALL PALACK",
                "PEPPER RASAM, CURD",
                "MASALAPAPAD",
                "PICKLE/SUGAR/SALT"
            ],
            "snacks": [
                "DHOKLA",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "CHAPATTI ,WHITE RICE",
                "FISH CURRY",
                "PANNER BUTTER MASALA",
                "BEETROOT COCONUT Poriyal",
                "MIXED DALL",
                "CURD/FRYUMS",
                "PICKLE/SUGAR/SALT"
            ]
        },
        "thursday": {
            "breakfast": [
                "PONGAL VADA",
                "WHITE CHUTNEY",
                "SAMBAR",
                "EGG/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CORIANDER LEAF CHAPATTI",
                "MOSOOR DALL",
                "WHITE RICE",
                "ALOOGOBI DRY",
                "LEMON RASAM, CURD",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "BEETROOT SALAD"
            ],
            "snacks": [
                "BREAD BAJJI",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "CHAPATTI , WHITE RICE",
                "PALACK SAGU GRAVY",
                "MOONG DHALL",
                "KADAI VEGETABLE DRY",
                "GARLIC RASAM",
                "FRYUMS",
                "PICKLE/SUGAR/SALT",
                "GULAB JAMUN"
            ]
        },
        "friday": {
            "breakfast": [
                "PESARATTU/SOOJI UPMA",
                "GINGER CHUTTNEY",
                "EGG/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI",
                "WHITE RICE, SAMBAR RICE ",
                "NAVRATAN KORMA CURRY ",
                "BRINJAL CURRY",
                "TOMATO RASAM, CURD",
                "FRYUMS",
                "PICKLE/SUGAR/SALT",
                "VEG SALAD"
            ],
            "snacks": [
                "SPL VADA",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "PHULKA, WHITE RICE",
                "TOMATO TOORDALL",
                "CABBAGE PEAS CURRY",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "FLAVOURED MILK"
            ]
        },
        "saturday": {
            "breakfast": [
                "POORI",
                "CHANNA MASALA",
                "OMLET/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "MINT CHAPATTI,WHITE RICE",
                "DOODHI CHANNA",
                "TOOR DHAAL",
                "CABBAGE MASALA",
                "GARLIC RASAM",
                "CURD",
                "PICKLE/SUGAR/ SALT",
                "SPROUTSALAD"
            ],
            "snacks": [
                "ONION PAKODA KETCHUP",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "CHAPATTI",
                "WHITE RICE",
                "GREENMOONG DHALL",
                "VEG MALAI KOFTA",
                "CURD RICE",
                "PICKLE",
                "SUGAR/SALT",
                "FRUIT KESARI"
            ]
        }
    }
];

let data1 = [
    {
        "sunday": {
            "breakfast": [
                "VEG MUGHLAI PARATHA",
                "CURD",
                "PICKLE",
                "EGG/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI",
                "CHICKEN BRIYANI -NONVEG",
                "VEG BRIYANI ",
                "PANNER BUTTER MASALA",
                "KADAI VEG",
                "ONION RAITHA",
                "PICKLE/SUGAR/SALT"
            ],
            "snacks": [
                "DHOKLA",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "PHULKA, WHITE RICE",
                "MOONG DAL",
                "BARBATI CURRY",
                "BHINDI FRY",
                "TOMATO RASAM",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "GULABJUMUN"
            ]
        },
        "monday": {
            "breakfast": [
                "RAVA DOSA",
                "ONION TOMATTO CHUTNEY",
                "SAMBAR",
                "OMLET/BANANA",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "MINT CHAPATTI",
                "GREEN MOONG DHALL",
                "WHITE RICE",
                "VATHAKOLAMBU",
                "PODI",
                "ALOO CAPCICUM",
                "CURD",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "SPROUT SALAD"
            ],
            "snacks": [
                "ALOO SANDWICH",
                "MINT CHUTNEY KETCHUP",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "CHAPATTI",
                "WHITE RICE",
                "SAMBAR RICE",
                "LAUKI MASALA KOFTA",
                "PINEAPPLE RASAM",
                "PAPAD",
                "MANGOPICKLE",
                "PICKLE/SUGAR/SALT",
                "BADAM MILK"
            ]
        },
        "tuesday": {
            "breakfast": [
                "GREEN POORI",
                "ALOO MASALA",
                "EGG-1NO/BANANA 1NO",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI ",
                "WHITE RICE",
                "PALACK SAAG CURRY",
                "LADIES FINGER SAMBAR",
                "Fryums,CURD",
                "PICKLE/SUGAR/SALT",
                "CARROT/TOMATO SALAD"
            ],
            "snacks": [
                "KACHODI KETCHUP",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "PHULKA, WHITE RICE",
                "TAMARIND/LEMON RICE",
                "PANCHRATNA DAL",
                "RAW BANANA DRY",
                "PEPPER RASAM, PUDINA THOVAIL",
                "PICKLE/SUGAR/SALT",
                "Jilebi/SAMIYA PAYASAM"
            ]
        },
        "wednesday": {
            "breakfast": [
                "POHA",
                "COCONUT CHUTTNEY",
                "SAMBAR",
                "OMLET 1NO /BANANA 1NO",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI",
                "COCONUT MILAGAI PODI",
                "WHITE RICE ,TOOR DHAAL",
                "ALOO 65",
                "LEMON RASAM, CURD",
                "MASALAPAPAD",
                "PICKLE/SUGAR/SALT",
                "CUCUMBER SALAD"
            ],
            "snacks": [
                "CHILLI BAJJI",
                "TEA/COFFEE/MILK"
            ],
            "dinner": {
                "menu1": [
                    "SOUP",
                    "DIMEND  PARANTA",
                    "Chicken grave- non veg",
                    "PANNER BUTTER MASALA -VEG",
                    "VEG FRIED RICE",
                    "VEG MANJURIAN",
                    "TOMATTO KETCHUP",
                    "CURD RICE, PICKLE",
                    "FRUIT CUSTARD"
                ],
                "menu2": [
                    "SOUP",
                    "MASALA CHAPPATHI",
                    "GOBI MANJURIAN",
                    "KASHMIRIPULAO",
                    "BUTER CHICKEN",
                    "MATAR PANNER",
                    "RAITHA",
                    "SAMBAR",
                    "SWEET",
                    "PIKLE"
                ],
                "menu3": [
                    "SOUP",
                    "CHAPPATHI",
                    "CHANNAMASALA",
                    "BISIBRLLABATH",
                    "BUTTER CHICKEN",
                    "CHILLY,PANNER ",
                    "ALOO PEAS MASALA DRY",
                    "CURD RICE",
                    "FRYUMS",
                    "SWEET"
                ]
            }
        },
        "thursday": {
            "breakfast": [
                "MASALA PARATHA",
                "ONION RAITHA",
                "PICKLE",
                "EGG-1NO/BANANA 1NO",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "MATHI CHAPATTI, WHITE RICE",
                "MOONG DHALL",
                "KARAKOLAMBU",
                "MALAI KOFTA CURRY",
                "CURD",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "SALAD"
            ],
            "snacks": [
                "ALLO BONDA CHUTNEY",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "CHAPATTI,WHITE RICE",
                "VERITY RICE",
                "TOMATTO DHALL",
                "MEAL MAKER CURRY",
                "GARLIC RASAM",
                "FRYUMS",
                "PICKLE/SUGAR/SALT",
                "SEASONAL FRUITS"
            ]
        },
        "friday": {
            "breakfast": [
                "ONION DOSA",
                "SAMBAR",
                "GROUNDNUT CHUTNEY",
                "EGG-1NO/BANANA 1NO",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI",
                "WHITE RICE, SAMBAR RICE ",
                "RAJMA MASALA",
                "IVY GOURD FRY",
                "TOMATO RASAM, CURD",
                "FRYUMS",
                "PICKLE/SUGAR/SALT",
                "BEETROOT SALAD"
            ],
            "snacks": [
                "CURD VADA",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "PHULKA, WHITE RICE",
                "BRINJAL SAMBAR",
                "BEETROOT COCONUT PORIAL",
                "ALOO MUTTER PANNER ",
                "PAPAD",
                "PICKLE/SUGAR/SALT",
                "FLAVOURED MILK"
            ]
        },
        "saturday": {
            "breakfast": [
                "PLAIN IDLY VADA",
                "WHITE CHUTNEY",
                "SAMBAR",
                "OMLET 1NO /BANANA 1NO",
                "WHEAT BREAD",
                "BUTTER JAM",
                "TEA/COFFEE/MILK"
            ],
            "lunch": [
                "CHAPATTI, WHITE RICE",
                "NAVRATANA KORMA",
                "smbar",
                "CHILLY SOYA BEAN ",
                "PEPPER RASAM",
                "CURD",
                "PICKLE/SUGAR/ SALT",
                "SPROUT SALAD"
            ],
            "snacks": [
                "FRINCH FRIES TOMATO KETCHUP",
                "TEA/COFFEE/MILK"
            ],
            "dinner": [
                "DOSA",
                "TOOR DHALL",
                "GROUNDNUT CHUTNEY",
                "WHITE RICE",
                "GONGURA PICKLE",
                "SUGAR/SALT",
                "FRUITS KESARI"
            ]
        }
    }
];
function build() {
    if (eve_odd === 0) {
        build_table_breakfast(eval(storage[day][0]));

        build_table_lunch(eval(storage[day][1]));

        build_table_snacks(eval(storage[day][2]));

        build_table_dinner(eval(storage[day][3]));
    }
    else {
        build_table_breakfast(eval(storage2[day][0]));

        build_table_lunch(eval(storage2[day][1]));

        build_table_snacks(eval(storage2[day][2]));

        if (day === 3) {
            let ez = random_no();
            build_table_dinner(eval(storage2[day][ez]));
        }
        else {
            build_table_dinner(eval(storage2[day][3]));
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
//random no generator 3 to 5
function random_no() {
    let x = Math.floor(Math.random() * 3) + 3;
    return x;
}
build();
