<script setup>
import StandardLayoutWithHeader from '@/components/layouts/StandardLayoutWithHeader.vue';
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <img class="row page-title-image page-title-image-m centered-image" src="@/assets/images/nav.jpg">
    <StandardLayoutWithHeader pageHeader="Agenda" 
        description="Onderstaand de geplande activiteiten van Ichthus Utrecht. Voor de datum en tijd wordt de tijdzone van je apparaat gebruikt" > 
    <div class="w-100 justify-content-center" id="agendaContainer">
        <div class="row" id="agendaWrapper">
            <div class="col-12 col-md-6 agenda-calendar">
                <div class="row agenda-calendar-month-caption-wrapper">
                    <button class="agenda-calender-month-btn" id="agendaCalendarMonthBtnPrev"
                            unselectable="true">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="agenda-calendar-month-caption"></div>
                    <button class="agenda-calender-month-btn" id="agendaCalendarMonthBtnNext"
                            unselectable="true">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <ul class="agenda-calendar-month" id="calendarWrapper">
                    <li class="agenda-calendar-legend row">
                        <div class="agenda-calendar-legend-day">
                            Zo
                        </div>
                        <div class="agenda-calendar-legend-day">
                            Ma
                        </div>
                        <div class="agenda-calendar-legend-day">
                            Di
                        </div>
                        <div class="agenda-calendar-legend-day">
                            Wo
                        </div>
                        <div class="agenda-calendar-legend-day">
                            Do
                        </div>
                        <div class="agenda-calendar-legend-day">
                            Vr
                        </div>
                        <div class="agenda-calendar-legend-day">
                            Za
                        </div>
                    </li>
                    <li class="agenda-calendar-week row">
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                    </li>
                    <li class="agenda-calendar-week row">
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                    </li>
                    <li class="agenda-calendar-week row">
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                    </li>
                    <li class="agenda-calendar-week row">
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                    </li>
                    <li class="agenda-calendar-week row">
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                    </li>
                    <li class="agenda-calendar-week row">
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                        <div class="agenda-calendar-day"></div>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-6 agenda-highlighted" id="calendarEventWrapper">
                <div class="agenda-highlighted-caption">
                    Uitgelichte activiteiten
                </div>
                <div class="agenda-highlighted-events" id="agendaHighlightedEvents">

                </div>
                <a href="https://calendar.google.com/calendar/ical/{{config('services.google.calendar_id')}}/public/basic.ics">Voeg toe aan agenda</a>
            </div>
        </div>
    </div>
        </StandardLayoutWithHeader>
       <FooterBalk />
</template>

<style scoped lang="css">
@import '../../assets/css/app.css';

.centered-image {
    display: block;
    margin: 0 auto !important;
    width: 90% !important;
    height: auto !important;
}
</style>