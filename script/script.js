const daySelect = document.querySelector('.date-of-birth #day');
const monthSelect = document.querySelector('.date-of-birth #month');
const yearSelect = document.querySelector('.date-of-birth #year');

const daySelect1 = document.querySelector('.age-at-the-date #day2');
const monthSelect1 = document.querySelector('.age-at-the-date #month2');
const yearSelect1 = document.querySelector('.age-at-the-date #year2');

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

(function populateMonths() {
    for (let i = 0; i < months.length; i++) {
        let option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
        // monthSelect1.appendChild(option);
    }
    monthSelect.value = 'January';
    // monthSelect1.value = 'January';
})();

(function populateMonths2() {
    for (let i = 0; i < months.length; i++) {
        let option = document.createElement('option');
        option.textContent = months[i];
        monthSelect1.appendChild(option);
    }
    monthSelect1.value = 'January';
})();


let previousDay;
let previousDay2;
function populateDays(month) {
    while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild);
    }
    while (daySelect1.firstChild) {
        daySelect1.removeChild(daySelect1.firstChild);
    }

    let dayNum;
    let year = yearSelect.value;

    if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
        dayNum = 31
    } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        dayNum = 30
    } else {
        if (new Date(year, 1, 29).getMonth() === 1) {
            dayNum = 29;
        } else {
            dayNum = 28;
        }
    }
    for (let i = 1; i <= dayNum; i++) {
        const option = document.createElement('option');
        option.textContent = i;
        daySelect.appendChild(option);
    }
    for (let i = 1; i <= dayNum; i++) {
        const option1 = document.createElement('option');
        option1.textContent = i;
        daySelect1.appendChild(option1);
    }
    if (previousDay) {
        daySelect.value = previousDay;
        if (daySelect.value === '') {
            daySelect.value = previousDay - 1;
        }
        if (daySelect.value === '') {
            daySelect.value = previousDay - 2;
        }
        if (daySelect.value === '') {
            daySelect.value = previousDay - 3;
        }
    }
    if (previousDay2) {
        daySelect1.value = previousDay2;
        if (daySelect1.value === '') {
            daySelect1.value = previousDay2 - 1;
        }
        if (daySelect1.value === '') {
            daySelect1.value = previousDay2 - 2;
        }
        if (daySelect1.value === '') {
            daySelect1.value = previousDay2 - 3;
        }
    }
}
populateDays(monthSelect.value);
populateDays(monthSelect1.value);

yearSelect.onchange = function () {
    populateDays(monthSelect.value);
}
monthSelect.onchange = function () {
    populateDays(monthSelect.value);
}
daySelect.onchange = function () {
    previousDay = daySelect.value;
}
daySelect1.onchange = function () {
    previousDay2 = daySelect1.value;
}
const selectDate = document.querySelector('.vanilla-calendar');

selectDate.onchange = function () {

    console.log("hello");
    let year = (selectDate.value).split('-')[0];
    let month = months[((selectDate.value).split('-')[1]) - 1];
    let day = (selectDate.value).split('-')[2];

    yearSelect.value = year;
    monthSelect.value = month;
    if (day < 10) {
        day = day % 10;
        daySelect.value = day;
        previousDay = daySelect.value
    } else {
        daySelect.value = day;
        previousDay = daySelect.value
    }
}

const button = document.querySelector(".btn button");
const showResult = document.querySelector(".show-result");

button.addEventListener("click", () => {
    showResult.classList.add("show");
})

const recentDate = document.querySelector(".recent-date input");
recentDate.addEventListener("click", () => {

});

button.addEventListener('click', () => {
    const montDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const getDobMonthValue = (element) => element == monthSelect.value;
    const dobDay = parseInt(daySelect.value);
    const dobMonth = parseInt((months.findIndex(getDobMonthValue)) + 1);
    const dobYear = parseInt(yearSelect.value);


    const getAadMonthValue = (element) => element == monthSelect1.value;
    let aadDay = parseInt(daySelect1.value);
    let aadMonth = parseInt((months.findIndex(getAadMonthValue)) + 1);
    let aadYear = parseInt(yearSelect1.value);
    if (dobYear !== '' || aadYear !== '') {
        if (dobDay > aadDay) {
            aadDay += parseInt(montDays[dobMonth - 1]);
            aadMonth -= 1;
        } if (dobMonth > aadMonth) {
            aadYear -= 1;
            aadMonth += 12;
        }
        const ageYear = aadYear - dobYear;
        const ageMonth = aadMonth - dobMonth;
        const ageDay = aadDay - dobDay;
        console.log(ageYear);
        console.log(ageMonth);
        console.log(ageDay);
        document.getElementById('age-year-month-day').innerText = ageYear + ' Year(s) ' + ageMonth + ' Month(s) ' + ageDay + ' Day(s)';
        document.getElementById('age-month-day').innerText = ' or, ' + ((ageYear * 12) + ageMonth) + ' Month(s) ' + ageDay + ' Day(s)';
        document.getElementById('age-week-day').innerText = ' or, ' + (((ageYear * 12) + ageMonth) * 4) + ' Week(s) ' + ageDay + ' Day(s)';
        document.getElementById('age-day').innerText = ' or, ' + (((((ageYear * 12) + ageMonth) * 4) * 7) + ageDay) + ' Day(s)';
        document.getElementById('age-hour').innerText = ' or, ' + ((((((ageYear * 12) + ageMonth) * 4) * 7) + ageDay) * 24) + ' Hour(s)';
        document.getElementById('age-minute').innerText = ' or, ' + (((((((ageYear * 12) + ageMonth) * 4) * 7) + ageDay) * 24) * 60) + ' Minute(s)';
        document.getElementById('second').innerText = ' or, ' + ((((((((ageYear * 12) + ageMonth) * 4) * 7) + ageDay) * 24) * 60) * 60) + ' Second(s)';
    } else {
        return;
    }

});