<template>
  <div class="home">
    <h1>Home</h1>>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingnames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {

     const search = ref('')
     const names = ref(['Joe', 'Jean', 'Carl','Ingrid','Alfred','Albert','Franz','Beethoven','Bert','Ernie','Liza'])

     const matchingnames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
     })
     
      return { names, matchingnames, search }
    
  }
}
</script>
