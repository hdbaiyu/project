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
	data() {
		return {

		}
		// todos: this.$store.todos
	},
	created() {
		console.log('todos', this.$store.state.todos)
	}
}
</script>

<style lang="less" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
  font-size: 12px;
  background: #eee;
  #registry {
    padding: 2rem;
  }
}
</style>
