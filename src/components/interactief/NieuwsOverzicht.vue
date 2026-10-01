<script setup lang="ts">
import NieuwsItem from '@/components/interactief/NieuwsItem.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import nieuwsItems from '../../assets/nieuwsItems.json'

const newsItemsPerPage = 3
const newsItemCount = nieuwsItems.items.length
const numberOfPages = Math.ceil(newsItemCount / newsItemsPerPage)
const currentPageNumber = ref(1)

// The indexes of the current newsItems that will be viewed. 
// This starts with 1, 2, 3 and will be changed depending on the currentPageNumber.
// It is a computed property, so whenever the currentPageNumber changes this value changes too.
const currentNewsItemIndexes = computed(() => {
  const start = (newsItemsPerPage * (currentPageNumber.value - 1)) + 1
  return Array.from({ length: newsItemsPerPage }, (_, index) => start + index);
})

// Calculate the window width to determine how many page buttons can be displayed at once.
const windowWidth = ref(window.innerWidth)
function updateWindowWidth() { windowWidth.value = window.innerWidth }
onMounted(() => window.addEventListener('resize', updateWindowWidth))
onUnmounted(() => window.removeEventListener('resize', updateWindowWidth))

const maxVisiblePageButtons = computed(() => {
  if (windowWidth.value < 400) return 3
  if (windowWidth.value < 576) return 5
  if (windowWidth.value < 768) return 7
  return numberOfPages
})

// Only display the maximum fitted pages
const visiblePageNumbers = computed(() => {
  const max = maxVisiblePageButtons.value
  if (numberOfPages <= max) return Array.from({ length: numberOfPages }, (_, i) => i + 1)
  let start = Math.max(1, currentPageNumber.value - Math.floor(max / 2))
  let end = Math.min(numberOfPages, start + max - 1)
  start = Math.max(1, end - max + 1)
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

function clickNumberPage(pageNumber: number)  {
  currentPageNumber.value = pageNumber
}

function clickNextPage() {
  if(currentPageNumber.value < numberOfPages) currentPageNumber.value++
}

function clickPreviousPage() {
  if(currentPageNumber.value > 1) currentPageNumber.value--
}

function clickJumpBack() {
  currentPageNumber.value = Math.max(1, visiblePageNumbers.value[0] - maxVisiblePageButtons.value)
}

function clickJumpForward() {
  currentPageNumber.value = Math.min(numberOfPages, visiblePageNumbers.value[visiblePageNumbers.value.length - 1] + 1)
}

</script>

<template>
  <div class="row justify-content-center">
    <div class="col-10">
      <div class="mt-5"></div>
      <div v-for="i in currentNewsItemIndexes" :key="i"> <!-- Laat meest recente n nieuwsitems zien -->
        <NieuwsItem :nummer="i" />
      </div>
      <div class="mt-5"></div>
      <nav>
        <ul class="pagination flex-wrap justify-content-center">
          <li class="page-item">
            <button class="page-link" @click="clickPreviousPage">
              <span>&laquo;</span>
            </button>
          </li>
          <li v-if="visiblePageNumbers[0] > 1" class="page-item">
            <button class="page-link" @click="clickJumpBack">
              <span>&hellip;</span>
            </button>
          </li>
          <li v-for="i in visiblePageNumbers" :key="i">
            <button v-if="i === currentPageNumber" class="page-link active" @click="clickNumberPage(i)">
              {{ i }}
            </button>
            <button v-else class="page-link" @click="clickNumberPage(i)">
              {{ i }}
            </button>
          </li>
          <li v-if="visiblePageNumbers[visiblePageNumbers.length - 1] < numberOfPages" class="page-item">
            <button class="page-link" @click="clickJumpForward">
              <span>&hellip;</span>
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" @click="clickNextPage">
              <span>&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
