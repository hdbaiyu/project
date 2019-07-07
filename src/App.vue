<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './container/Footer'
export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {

    }
    // todos: this.$store.todos
  },
  created () {
    // console.log('todos', this.$store.state.todos)
  }
}
</script>

<style lang="less" >
body {
  font-size: 12px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  #registry {
    padding: 2rem 30px;
    background: #eee;

    .tips {
      margin-bottom: 30px;
    }
  }
}
</style>
