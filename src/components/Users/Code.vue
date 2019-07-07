<template>
  <Card class="br">
    <p slot="title">邀请码</p>
    <Row>
      <i-col span="17">
        <Input element-id="codeText" value="123455657565gdfgdfgdgd"/>
      </i-col>
      <i-col span="6">
        <span>&nbsp;</span>
        <i-button @click="copyCode">点击复制</i-button>
      </i-col>
    </Row>
    <p :style="{lineHeight:'50px'}">我的邀请</p>
    <Table border :columns="columns1" :data="data1"></Table>
  </Card>
</template>

<script>
export default {
  name: 'code',
  data () {
    return {
      columns1: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '微信号',
          key: 'weChat'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          weChat: '大宇'
        },
        {
          name: 'Jim Green',
          weChat: 'abc22'
        }
      ]
    }
  },
  methods: {
    copyCode () {
      const codeInput = document.getElementById('codeText')
      codeInput.select()
      try {
        var successful = document.execCommand('copy')
        var msg = successful ? '成功复制到剪贴板' : '不支持点击复制到剪贴板'
        if (successful) {
          this.$Notice.success({
            title: msg
          })
          return
        }
        this.$Notice.error({
          title: msg
        })
      } catch (err) {}
    }
  }
}
</script>
