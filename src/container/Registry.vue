<template>
  <div id="registry">
    <Tips />
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="100"
      
    >
      <div v-if="isLogin">
        <FormItem label="身份证号码" prop="ID">
          <Input v-model="formValidate.ID" placeholder="请输入身份证号码" />
        </FormItem>
        <FormItem label="银行卡号" prop="bank">
          <Input v-model="formValidate.bank" placeholder="请输入银行卡号" />
        </FormItem>
      </div>
      <div v-else>
        <FormItem label="用户名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="formValidate.password" placeholder="请输入登录密码" />
        </FormItem>

        <FormItem label="手机号码" prop="iphone">
          <Input v-model="formValidate.iphone" placeholder="请输入手机号码" />
        </FormItem>
        <FormItem label="验证码" prop="code">
          <Input v-model="formValidate.code" placeholder="请输入验证码" />
        </FormItem>
      </div>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import axios from "axios";
import Tips from "../components/Tips";
export default {
  components: {
    Tips
  },
  data() {
    return {
      isLogin: false, // 是否已登录
      formValidate: {
        name: "",
        password: "",
        // bank: '',
        iphone: "",
        code: "",
        ID: "",
        bank: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "名字不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 16, message: "密码最多16位字符", trigger: ["blur", "change"] }
        ],
        iphone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value) {
                if (!/^1[0-9]{10}$/.test(value)) {
                  callback("请输入正确的手机号码！");
                }
                callback();
              }
              callback("请输入手机号码");
            }
          }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        ID: [{ required: true, message: "请输入身份证号码", trigger: "blur" }],
        bank: [{ required: true, message: "请输入证件号码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      let data;
      this.$refs[name].validate(valid => {
        console.log("valid", valid);
        if (this.isLogin) {
          //   this.$refs[name].validateField("ID");
          //   this.$refs[name].validateField("band");
          const { ID, bank } = this.formValidate;
          data = { ID, bank };
        }
        if (valid) {
          console.log(this.formValidate);
          data = {
            name: this.formValidate.name,
            iphone: this.formValidate.iphone,
            code: this.formValidate.code,
            password: this.formValidate.password
          };
          console.log("data", data);
          this.$Message.success("Success!");
          axios({
            url:
              "https://www.fastmock.site/mock/b1fd005840930b6041e6aa66cf98bf46/going/api/going",
            method: "get"
            // data
          })
            .then(res => {
              console.log("res", res);
              return res.data;
              this.title = "success";
            })
            .then(res => {
              console.log("data111", res.data);
            });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
