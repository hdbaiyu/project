<template>
  <div class="Account">
    <userInfo/>
	<Code />
	<Money />
	<Photo />
  </div>
</template>

<script>
import userInfo from '../components/Users/UserInfo'
import Money from '../components/Users/Money'
import Photo from '../components/Users/Photo'
import Code from '../components/Users/Code'
import axios from 'axios'

export default {
  name: 'user',
  components: {
    userInfo,
    Money,
    Photo,
    Code
  },
  created () {
    // this.fetchUserInfo();
    // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0110a811659f876b&redirect_uri=http://baiyu.free.idcfengye.com/wx/code&response_type=code&scope=SCOPE&state=STATE#wechat_redirect'
  },

  data () {
    return {}
  },
  methods: {
    fetchUserInfo () {
      axios({
        url: '/wx/user',
        method: 'get'
        // data
      })
        .then(res => {
          return res.data
        })
        .then(res => {
          console.log('rs', res.data)
        })
    }
  }
}
</script>

<style lang="less">
.Account {
  // padding: 20px;
  background: #eee;
  .phone-row {
	  margin-top: 10px;
    margin-bottom: 10px;
    border-top: 1px solid #eee;
    padding-top: 20px;
    
  }
  .phone-row:first-child {
    border:0;
  }
  .page {
	  padding: 20px;
    text-align: right;
    margin-bottom: 20px;
  }
}
</style>
