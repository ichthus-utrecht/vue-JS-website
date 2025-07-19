<script setup lang="ts">
import NieuwsItem from '@/components/interactief/NieuwsItem.vue'
import { ref, computed } from 'vue'
import nieuwsItems from '../../assets/nieuwsItems.json'

const newsItemsPerPage = 3

// The maximum number of news items. Otherwise the bar will get too long on mobile.
const maximumNumberOfNewsItems = 15
const newsItemCount = Math.min(nieuwsItems.items.length, maximumNumberOfNewsItems)
const numberOfPages = Math.ceil(newsItemCount / newsItemsPerPage)
const currentPageNumber = ref(1)

// The indexes of the current newsItems that will be viewed. 
// This starts with 1, 2, 3 and will be changed depending on the currentPageNumber.
// It is a computed property, so whenever the currentPageNumber changes this value changes too.
const currentNewsItemIndexes = computed(() => {
  const start = (newsItemsPerPage * (currentPageNumber.value - 1)) + 1
  return Array.from({ length: newsItemsPerPage }, (_, index) => start + index);
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
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" @click="clickPreviousPage">
              <span>&laquo;</span>
            </button>
          </li>
          <li v-for="i in numberOfPages" :key="i">
            <button v-if="i === currentPageNumber" class="page-link active" @click="clickNumberPage(i)">
              {{ i }}
            </button>
            <button v-else class="page-link" @click="clickNumberPage(i)">
              {{ i }}
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
