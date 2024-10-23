<script setup lang="ts">
import BasisLayout from '@/components/layouts/BasisLayout.vue'
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue'
import { ref, useTemplateRef } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import nlLocale from '@fullcalendar/core/locales/nl'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
/** @ts-ignore */
import { Modal } from 'bootstrap'
import type { CalendarOptions, EventClickArg, FormatterInput } from '@fullcalendar/core/index.js'

const modalTitle = ref('')
const modalStartDate = ref(new Date())
const modalEndDate = ref(new Date())
const modalLocation = ref('')
const locale = 'nl-NL' // The locale you want the dates to be shown in.

const myModal = useTemplateRef('myModal')
const googleApiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY
// Calendar options
const calendarOptions = ref<CalendarOptions>({
  plugins: [dayGridPlugin, googleCalendarPlugin ],
  googleCalendarApiKey: googleApiKey,
  events: {
    googleCalendarId: 'id5f59r2sp5c76qkghkvbh5l6bjom84v@import.calendar.google.com'
  },
  initialView: 'dayGridMonth',  // Set the initial view (dayGridMonth, timeGridWeek, etc.)
  locale: nlLocale,
  eventTimeFormat: { // like '14:30'
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false
  } as FormatterInput,
  eventClick: showModal,
});

function showModal(info: EventClickArg) {
  info.jsEvent.preventDefault(); // don't let the browser navigate
  console.log(info.event)
  info.event.extendedProps.location
  modalTitle.value = info.event.title
  modalStartDate.value = info.event.start!
  modalEndDate.value = info.event.end!
  modalLocation.value = info.event.extendedProps.location
  
  // not sure what this does, ChatGPT made it work
  const modalInstance = new Modal(myModal.value)
  modalInstance.show()
}

</script>

<template>
  <NavigatieBalk/>
  <BasisLayout>
    <div class="d-grid gap-4">
      <div>
        Hieronder staat de agenda der C.S.V. Ichthus Utrecht.
      </div>
      <div class="pb-4">
        <FullCalendar
          :options="calendarOptions"
        />
      </div>
    </div>
  </BasisLayout>
  <FooterBalk />
  <!-- Modal -->
  <div class="modal fade" ref="myModal" id="eventDetailModal" tabindex="-1">
    <div class="modal-dialog modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-4">{{ modalTitle}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
          Begin: {{ modalStartDate.toLocaleDateString(locale) }} om {{ modalStartDate.toLocaleTimeString(locale) }} <br/>
          Einde: {{ modalEndDate.toLocaleDateString(locale) }} om {{ modalEndDate.toLocaleTimeString(locale) }} <br/>
          Locatie: {{ modalLocation }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
@import '../../assets/css/app.css';

a.fc-col-header-cell-cushion {
  text-decoration: none;
  color: black;
}
a.fc-daygrid-day-number {
  text-decoration: none
}
:root {
  --fc-event-border-color: var(--bs-blue) !important
}
.centered-image {
    display: block;
    margin: 0 auto !important;
    width: 90% !important;
    height: auto !important;
}
</style>