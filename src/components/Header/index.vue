<template>
    <nav id="header-nav">
        <span @click="goBack" class="back">
            <Icon type="ios-arrow-back" />
        </span>
        <span class="title">{{title || '秀呗'}}</span>
    </nav>
</template>

<script>
export default {
    name: 'header',
    props: ['title'],
    data() {
        return {
        }
    },
    methods: {
        goBack(){
            console.log('router', this.$router)
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less">
    #header-nav {
        height: 50px;
        line-height: 50px;
        position: relative;
        padding:0 20px;
        box-shadow: 0 0 7px #eee;
        .back {
            font-size: 18px;
            cursor: pointer;
        }
        .title {
            display: inline-block;
            width: 50%;
            position: absolute;
            left: 25%;
            text-align: center;
        }
    }
</style>
