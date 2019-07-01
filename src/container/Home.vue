<template>
    <div id="home">
        <Carousel />
        <ShopScroll />
        <Footer />
        <BackTop></BackTop>
    </div>
</template>

<script>
import Footer from './Footer'
import Carousel from '../components/Carousel'
import ShopScroll from '../components/ShopScroll'
export default {
	name: 'Home',
	components: {
		Footer,
		Carousel,
		ShopScroll

	}
}
</script>
