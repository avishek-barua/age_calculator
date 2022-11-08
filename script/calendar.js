// const calendarIcon = document.querySelector('.calendar-icon');
// const calendarPage = document.querySelector('.vanilla-calendar');
// const calendarInfo = document.querySelector('.vanilla-calendar-info');
// calendarIcon.addEventListener("click", () => {
//     calendarPage.classList.add("show");
//     calendarInfo.classList.add("show");
//     const generateDate = (date) => {
//         const year = date.getUTCFullYear();
//         let month = date.getUTCMonth() + 1;
//         let day = date.getUTCDate();

//         month = month < 10 ? `0${month}` : month;
//         day = day < 10 ? `0${day}` : day;

//         return `${year}-${month}-${day}`;
//     };

//     const calendarInfoDate = document.querySelector('#vanilla-calendar-info-date');
//     const calendar = new VanillaCalendar('.vanilla-calendar', {
//         settings: {
//             lang: 'en',
//             selected: {
//                 dates: [generateDate(new Date())],
//             },
//         },
//         actions: {
//             clickDay(e, dates) {
//                 calendarInfoDate.innerText = dates;
//             }
//         },
//     });
//     calendar.init();
//     calendarInfoDate.innerText = generateDate(new Date());
    
// });
