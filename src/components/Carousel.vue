<template>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel"> <img src="../assets/image/lun-1.jpeg" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/image/timg.jpeg" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/image/lun-2.jpeg" alt=""></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
export default {
  data () {
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
    img{
      height: 100%;
      width: 100%;
    }
</style>
