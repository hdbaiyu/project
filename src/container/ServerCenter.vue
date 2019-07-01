<template>
    <div id="serverCenter">

        <img src="../assets/wecode.jpg" alt="" />
        <div class="startKey">请在上班时间联系: </div>
        <div class="startTime">9:00-11:30  13:30-17:00</div>
    </div>
</template>

<script>
export default {
	name: 'Server'
}
</script>
<style lang="less">
    #serverCenter {
        padding:50px 20px;
        text-align: center;
        img {
            max-width: 300px;
        }
        .startKey {
            line-height: 40px;
            text-indent: 10px;
            margin-top: 20px;
        }
        .startTime {
            font-size: 16px;
            // margin:30px 10px;
            line-height: 50px;
            text-align: center;
        }
    }
</style>

