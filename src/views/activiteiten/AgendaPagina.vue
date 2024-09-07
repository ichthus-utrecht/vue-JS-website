<script setup>
import BasisLayout from '@/components/layouts/BasisLayout.vue';
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';

// $(document).ready(function () {
//     var events = {!! json_encode($events, JSON_HEX_TAG) !!};

//     var date = new Date();
//     fillCalendar(date);
//     fillEvents(events, date);
//     changeMonthName(date);

//     $("#agendaCalendarMonthBtnPrev").click(function () {
//         date.setMonth(date.getMonth() - 1);
//         fillCalendar(date);
//         changeMonthName(date);
//         fillEvents(events, date);
//     });

//     $("#agendaCalendarMonthBtnNext").click(function () {
//         date.setMonth(date.getMonth() + 1);
//         fillCalendar(date);
//         changeMonthName(date);
//         fillEvents(events, date);
//     });

//     $("#calendarEventWrapper").height($("#calendarWrapper").height());
// });

// function changeMonthName(d) {
//     var m = getMonthName(d.getMonth());
//     $(".agenda-calendar-month-caption").last().html(m + ' ' + d.getFullYear());
// }

// function getMonthName(m) {
//     const monthNames = ["januari", "februari", "maart", "april", "mei", "juni",
//         "juli", "augustus", "september", "oktober", "november", "december"
//     ];

//     return (monthNames[m])
// }

// function fillCalendar(date) {
//     var calendar = [];

//     var daysAreActive = 0;

//     var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//     var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

//     for (i = 0; calendar.length < 42; i++) {
//         if (i === firstDay) {
//             for (j = 1; j < lastDay + 1; j++) {
//                 calendar.push(j);
//             }
//         } else if (i < firstDay) {
//             calendar.unshift(new Date(date.getFullYear(), date.getMonth(), i * -1).getDate())
//         } else {
//             for (k = 1; calendar.length < 42; k++) {
//                 calendar.push(new Date(date.getFullYear(), date.getMonth() + 1, k).getDate())
//             }
//         }
//     }

//     $(".agenda-calendar-day").each(function (index) {
//         if (calendar[index] === 1) {
//             daysAreActive++;
//         }
//         if (daysAreActive === 1) {
//             $(this).addClass('day-active');
//         } else {
//             $(this).removeClass('day-active');
//         }

//         $(this).empty();

//         const span = document.createElement('span');

//         span.innerText = calendar[index];

//         $(this).append(span);
//     });
// }

// function getEventsByMonth(events, month, year) {

//     eventList = [];

//     for (i = 0; i < events.length; i++) {
//         eventDate = new Date(events[i]['begin_time']);
//         if ((eventDate.getMonth() == month) && (eventDate.getFullYear() == year)) {
//             eventList.push(events[i]);
//         }
//     }

//     return eventList;
// }

// function fillEvents(events, date) {
//     var jsonArray = getEventsByMonth(events, date.getMonth(), date.getFullYear());
//     document.getElementById("agendaHighlightedEvents").innerHTML = '';
//     if (jsonArray) {
//         if (jsonArray.length > 0) {
//             for (i = 0; i < jsonArray.length; i++) {		
//                 eventDate = new Date(jsonArray[i]['begin_time']); // Geeft weer in tijdzone van gebruiker

//                 $(".day-active").each(function (index) {
//                     if ($(this).text() === eventDate.getDate().toString()) {
//                         $(this).children(":first").css('border-bottom', 'solid 2px #1e2258');
//                     }

//                 });

//                 const div = document.createElement('div');

//                 div.className = 'row agenda-highlighted-item';

//                 eventHtml =
//                     '<div class="row-st">' +
//                     '<div class="agenda-highlighted-item-caption">' + jsonArray[i]['title'] + '</div>' +
//                     '<p class="agenda-highlighted-item-description">' + eventDate.toLocaleString('nl-NL')

//                 if (jsonArray[i]['location']) {
//                     eventHtml += ', ' + jsonArray[i]['location'] + '</p></div>';
//                 } else {
//                     eventHtml += '</p></div>';
//                 }

//                 div.innerHTML = eventHtml;

//                 document.getElementById("agendaHighlightedEvents").appendChild(div);
//             }
//         } else {
//             document.getElementById("agendaHighlightedEvents").innerHTML = '<div style="color: gray; position: absolute; top: 50%; width: 100%; text-align: center">Er staan geen activiteiten gepland.</div>'
//         }
//     }

// }
        
</script>

<template>
    <NavigatieBalk/>
    <BasisLayout>
        <iframe src="https://calendar.google.com/calendar/embed?src=c_98ce21d2eb002125a3fbd530f72d4a91a84745227f418dd61024e494dccb1337%40group.calendar.google.com&ctz=Europe%2FAmsterdam" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../../assets/css/app.css';

.centered-image {
    display: block;
    margin: 0 auto !important;
    width: 90% !important;
    height: auto !important;
}
</style>