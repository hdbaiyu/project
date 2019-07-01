<template>
  <h2 class="home">
    <router-link to="/helloword">helloword {{ test }}</router-link>
  </h2>
</template>

<script>
export default {
	data() {
		return {
			test: 'rssrs'
		}
	}
}
</script>
