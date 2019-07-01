<template>
    <Card class="br">
        <p slot="title">
            我的钱包
        </p>
        <!-- <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-arrow-right"></Icon>
            查看更多
        </a> -->
        <Row>
            <i-col span="8">
                <div>0.00</div>
                可提现
            </i-col>
            <i-col span="8">
                <div>0.00</div>
                提现中
            </i-col>
            <i-col span="8">
                <div>0.00</div>
                交易中心
            </i-col>
        </Row>
    </Card>
</template>
<script>
    export default {
    }
</script>
