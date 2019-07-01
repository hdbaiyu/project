<template>
  <footer>
    <div id="footer">
      <div class="item">
        <router-link to="/registry">
          <Icon size="20" type="logo-reddit"/>
          <div>新人注册</div>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/">
          <Icon size="20" type="md-ionic"/>
          <div>登录大厅</div>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/server">
          <Icon size="20" type="md-contacts"/>
          <div>客户中心</div>
        </router-link>
      </div>
      <div class="item" v-if="isAdmin">
        <router-link to="/admin">
          <Icon size="20" type="ios-contact"/>
          <div>账户管理</div>
        </router-link>
      </div>
      <div class="item" v-else>
        <router-link to="/account">
          <Icon size="20" type="ios-contact"/>
          <div>我的</div>
        </router-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      isAdmin: false
    }
  }
}
</script>
<style lang="less">
#app {
    background: #fff;
}
footer {
  background: #fff;
  height: 50px;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  width: 100%;
}
#footer {
  display: flex;
  flex-direction: row;
  text-align: center;
  .item {
    padding-top: 10px;
    width: 25%;
    // line-height: 40px;
    a {
        color: #333;
    }
    .router-link-exact-active {
        color:#2d8cf0;
    }
  }
}
</style>
