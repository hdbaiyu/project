<template>
  <div class="user-Info">
    <Row>
      <i-col span="4">
        <div class="logos">
            <Avatar shape="square" :src="imgsrc" size="large" />

        </div>
        <Icon type="arrow-resize"></Icon>
      </i-col>
      <i-col span="16">
        <div class="name">
            大宇
        </div>
      </i-col>
      <i-col span="4">
        <div class="">
            <i-button type="primary" shape="circle">编辑资料</i-button>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'userInfo',
  data () {
    return {
      imgsrc: '/assets/logo.png'
    }
  },
  created () {
    console.log('imgsrc')
  }
}
</script>
<style lang="less">
.user-Info {
  background: orchid;
  padding: 2rem;
  color: white;
  .logo {
      height: 100px;
      overflow: hidden;
      width: 100px;
      border-radius: 50%;
      img {
          max-width: 100%;
      }
  }
  .name {
      font-size: 1.5em;
  }
}
</style>
