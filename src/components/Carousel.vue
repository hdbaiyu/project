<template>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
export default {
	data() {
		return {
			value2: 0
		}
	}
}
</script>
<style lang="less" scoped>
    .demo-carousel {
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #506b9e
}
</style>
