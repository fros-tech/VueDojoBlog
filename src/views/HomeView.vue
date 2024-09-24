<template>
  <div class="home">
    <h1>Home</h1>>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <button @click="stopWatchingClick">Stop watching!</button>
    <div v-for="name in matchingnames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  setup() {

     const search = ref('')
     const names = ref(['Joe', 'Jean', 'Carl','Ingrid','Alfred','Albert','Franz','Beethoven','Bert','Ernie','Liza'])

    const stopWatch = watch(search, () => {
      console.log("watch func ran")
    })

    const stopEffect = watchEffect(() => {
      console.log("watcheffect")
    })

     const matchingnames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
     })

     const stopWatchingClick = () => {
      stopWatch()
      stopEffect()
     }

     
      return { names, matchingnames, search, stopWatchingClick }
    
  }
}
</script>
