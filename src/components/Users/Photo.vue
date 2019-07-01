<template>
    <Card class="br">
        <p slot="title">我的相册</p>
        <Row v-for="item in data">
            <i-col span="18" >
                <img :src="item.imgSrc" style="width:45%" />
            </i-col>
            <i-col span="6">
                <h3>{{item.desc}}</h3>
                <div class="action">
                    <i-button type="info" @click="editor(item)">编辑</i-button>
                    <i-button type="error" @click="del(item.id)">删除图片</i-button>
                </div>
            </i-col>
        </Row>
        <Modal
            fullscreen
            v-model="visibles"
            title="编辑图片"
            :loading="loading"
            @on-ok="asyncOK"
            @on-cancel="visibles = false"
        >
            <p>
                <Input type="textarea" v-model="update.desc" placeholder="请输入内容"  />
                <img :src="update.imgSrc" />
                <div class="demo-upload-list" v-for="item in uploadList">
                    <template v-if="item.status === 'finished'">
                        <img :src="item.url">
                        <div class="demo-upload-list-cover">
                            <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                        </div>
                    </template>
                    <template v-else>
                        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                    </template>
                </div>
                <Upload
                    ref="upload"
                    :show-upload-list="false"
                    :on-success="handleSuccess"
                    :format="['jpg','jpeg','png','gif']"
                    :max-size="2048"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    :before-upload="handleBeforeUpload"
                    multiple
                    action="//jsonplaceholder.typicode.com/posts/"
                    style="display: inline-block;">
                        <i-button type="primary"><Icon type="ios-cloud-upload-outline" size="30"></Icon>上传图片</i-button>
                </Upload>
            </p>
        </Modal>

        <div class="page">
            <Page :total="100" show-total></Page>
        </div>
    </Card>
</template>
<script>
    export default {
        name:'photo',
        data() {
            return {
                update: {},
                visibles: false,
                loading: false,
                uploadList: [],
                data:[
                    {id:'1',imgSrc:'https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/82674/20/1901/144729/5d03107fE02fb7203/abdd08faeacba763.jpg!q90.webp',desc:'Apple Macbook Pro 13.3【带触控栏】Core i5 8G 256G SSD 深空灰 苹果笔记本电脑 轻薄本 MR9Q2CH/A'},
                    {id:'2',imgSrc:'https://img11.360buyimg.com/mobilecms/s500x500_jfs/t1/73271/3/1979/144578/5d0517faE3aeb9ca8/47d09525f6660679.png',desc:'小米(MI)15.6英寸游戏笔记本电脑（英特尔八代酷睿I5-8300H 8G 1T+256G SSD GTX1060 6G 72%NTSC高色域 FHD）深空灰'},
                    {id:'3',imgSrc:'https://img11.360buyimg.com/mobilecms/s280x280_jfs/t1/48131/18/1805/97841/5cf87e52E5961a34f/fd5b597988ba23e6.jpg!q90.webp',desc:'联威通千杯不- 台式机'},
                    {id:'4',imgSrc:'https://img11.360buyimg.com/mobilecms/s280x280_jfs/t1/52729/17/2232/195314/5d005fdbE88462547/d85ac5d98554b414.jpg!q90.webp',desc:'飞联普2K显示器'},
                    {id:'5',imgSrc:'https://img20.360buyimg.com/mobilecms/s280x280_jfs/t21283/320/1481856150/193627/fc22c671/5b2b1502N9545aefc.jpg!q90.webp',desc:'联想全民K歌'},
                    {id:'6',imgSrc:'https://img14.360buyimg.com/mobilecms/s280x280_jfs/t1/11954/26/3989/906689/5c249dfaE1220b72e/8e693c3fa80e3c62.png!q90.webp',desc:'华为荣q手机'},
                ]
            }
        },
        created() {
                console.log('1111', this.visible)

        },
        methods: {
            editor(item) {
                this.update = item
                this.visibles = true
                this.loading = false

                console.log('ssfsfs', this.visible)
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多可上传五张图片'
                    });
                }
                return check;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            asyncOK() {
                // 提交数据请求
            },
            del(id) {
                this.$Modal.confirm({
                    title: '确认操作',
                    content: '<p>确认要删除这块图片？</p>',
                    loading: true,
                    onOk: () => {
                        const newList = this.data.filter((list)=> {
                            return id !== list.id
                        })
                        this.data = newList;
                        this.$Modal.remove();
                    }
                });

            }
        }
    }
</script>
<style lang="less">
    .action {
        margin: 20px 0;
    }
</style>
