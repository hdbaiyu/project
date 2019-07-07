<template>
    <div id="detail">
        <Header title="选择下单买号"/>
        <div class="detail">
            <ul>
                <li class="border-1">编号: 311190908909090 <a href="＃" class="aa">电脑下单</a></li>
                <li class="border"></li>
                <li class="border-1">下单价格：<span class="red">19.80</span> 元 （先垫付）</li>
                <li class="border"></li>
                <li class="border-1">完成返还：<span class="red">19.80</span> 元 + 发布点：<span class="red">８</span></li>
                <li class="border"></li>
                <li class="border-1">收货时间：<span class="red">物流显示签收好评</span></li>
                <li class="border"></li>
                <li class="border-1"><span class="blue">收货后，选好评，点亮全部星，不用写评语</span></li>
            </ul>
            <ul>
                <li class="orgne"><span class=""></span></li>
                <li class="border-0">张三 <span class="sex age">男 26-30岁</span></li>
                <li class="blue">等级：<span class="blue">0</span><span class="today-roder">今日接单０　周１　月２</span></li>
                <li class="border"></li>
                <li class="border-0">李四 <span class="sex age">男 21-25岁</span></li>
                <li class="blue">等级：<span class="blue">0</span><span class="today-roder">今日接单０　周１　月２</span></li>
                <li class="border"></li>
                <li class="border-0">王五 <span class="sex age">男 26-30岁</span></li>
                <li class="blue">等级：<span class="blue">0</span><span class="today-roder">今日接单０　周１　月２</span></li>
                <li class="border"></li>
                <li class="border-0">龙六 <span class="sex age">男 31-35岁</span></li>
                <li class="blue">等级：<span class="blue">1000</span><span class="today-roder">今日接单０　周１　月２</span></li>
                <li class="border"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Header from'../../components/Header/index'
export default {
    components:{
        Header
    }
}
</script>

<style lang="less">
    .detail {
        padding: 20px;
        ul {
            list-style-type: none
        }
        //电脑下单
        .aa{
            float: right;
            font-weight: 600;
            color:blue;
        }
        //上字行高
        .border-1{
            line-height: 30px;
        }
        .red {
            color: #ea6f5a;
        }
        .blue{
            color:rgb(49, 143, 230);
        }
        //黄色分割线
        .orgne{
            margin-top: 10px;
            color: #ea6f5a;
            border: 2px solid;
        }
        //性别
        .sex{
            color:green;
            float:right; 
        }
        //年龄
        .age{
            color:green;
            float:right;
        }
        //今日接单
        .today-roder{
            color: gray;
            float: right;
        }
        //下字体行高
        .border-0{
            line-height: 30px; 
        }
        //下字分割线
        .border{
            color:gainsboro;
            border: 1px solid;
        }
        
    }
</style>

