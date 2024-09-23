<template>
  <div class="home">
    Home
    <p>My name is {{ name }}, my age is {{ age }}</p>
    <button @click="handleClick">Click Me! I Dare you!</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  setup() {
    let name = 'Mario'  // not reactive values
    let age = 30  // not reactive values as in data()

    const handleClick = () => {
      console.log('you clicked me')
    }

    return { name, age, handleClick }
  }
}
</script>
