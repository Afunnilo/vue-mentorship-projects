<template>
<div class='dark'>
    <Header />
  <Search />
  </div>
</template>

<script>
import Header from '../components/dark/Header.vue'
import Search from '../components/dark/Search.vue'




export default {
  name: 'Dark',
  components: {
    Header,
    Search,
  }
}
</script>
