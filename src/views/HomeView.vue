<template>
  <div class="home">
    Home
    <p>My name is {{ name }}, my age is {{ age }}</p>
    <button @click="handleClick">Click Me! I Dare you!</button>
    <button @click="age++">Add one to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  setup() {

    // const p = ref(null) // instead of this.$ref
    // let name='Mario'  // Will not be reactive
    const name = ref('Mario')  // makes name reactive
    const age = ref(30)

    const handleClick = () => {
      name.value = 'Luigi'
      age.value=35
    }

    return { name, age, handleClick}
  }
}
</script>
