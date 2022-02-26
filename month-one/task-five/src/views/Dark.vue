<template>
<div class=''>
  <div class='is-primary'>
  <Header />
  <Search />
  </div>
  
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
