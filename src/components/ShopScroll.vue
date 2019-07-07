<template>
  <Tabs value="name1">
    <TabPane label="淘宝" name="name1">
      <!-- <Scroll> -->
        <!-- <Card
          dis-hover
          v-for="(item, index) in list1"
          :key="index"
          class="items"
        >
			<router-link :to="{path: `/detail/${item.id}`}">
				<img v-bind:src="item.src" class="lazyimg_img" />
				<div>{{item.desc}}</div>
			</router-link>   
			
        </Card> -->
		<div>
			<div class="goods">
				<img src="../assets/image/1-2.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-2.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-2.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-2.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-2.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-2.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-2.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods"><img src="../assets/image/1-2.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span></div>
		</div>
      <!-- </Scroll> -->
    </TabPane>
    <TabPane label="拼多多" name="name2">
		<div>
			<div class="goods">
				<img src="../assets/image/1-3.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-3.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-3.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-3.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-3.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-3.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-3.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods"><img src="../assets/image/1-3.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span></div>
		</div></TabPane>
    <TabPane label="京东" name="name3">
		<div>
			<div class="goods">
				<img src="../assets/image/1-4.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-4.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-4.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-4.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-4.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-4.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods">
				<img src="../assets/image/1-4.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
			<div class="goods"><img src="../assets/image/1-4.jpg" alt="">
				<span class="price">￥ 99.00</span>
				<span class="describe">芙悦2019新款中年女士套装高贵中老年女装T恤妈妈装夏装雪纺衫女两件套F30109475 蓝色套装 3XL【建议120-135斤】</span>
				<span class="store"> <Icon type="ios-menu-outline" class="color"/>可可商贸</span>
			</div>
		</div>
		</TabPane>
  </Tabs>
	
</template>

// <script>
// export default {
//   data () {
//     return {
//       list1: [
//         { desc: '打印机', src: '//img11.360buyimg.com/mobilecms/s280x280_jfs/t1/41620/18/5376/137511/5cef72eaEbffcfb01/2dd50f9d2a7e5763.jpg!q90.webp' , id:0},
//         { desc: '荣耀平板', src: 'https://img20.360buyimg.com/mobilecms/s280x280_jfs/t1/20365/14/3265/73248/5c258375E0d9dd4b9/c7f7eae7d880dfb9.jpg!q90.webp',id:1 },
//         { desc: '娃哈哈', src: 'https://img12.360buyimg.com/mobilecms/s280x280_jfs/t26638/76/842506700/267883/4b95fa87/5bbb0584N9e18b608.jpg!q90.webp', id:2},
//         { desc: '钓鱼竿', src: 'https://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/83102/9/604/159066/5ced06c6E68122d97/192771ae60280ba3.jpg!q90.webp', id: 3},
//         { desc: '风扇', src: 'https://img11.360buyimg.com/mobilecms/s280x280_jfs/t1/27823/24/9665/84957/5c804f98Ef5f4614f/76a6191057d01d73.jpg!q90.webp',id:4},
//         { desc: '爱力士', src: 'https://img11.360buyimg.com/mobilecms/s280x280_jfs/t1/33263/37/12901/176944/5cf488ecEb3521df8/d23e1ab4391973f1.jpg!q90.webp',id: 5},
//         { desc: '智云', src: 'https://img20.360buyimg.com/mobilecms/s280x280_jfs/t1/841/39/9596/67901/5bac88acE15c111d5/14bec088abc09cb7.jpg!q90.webp',id:6 }
//       ]
//     }
//   },
//   methods: {
//     //   :on-reach-bottom="handleReachBottom"
//     handleReachBottom () {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           const last = this.list1[this.list1.length - 1]
//           for (let i = 1; i < 11; i++) {
//             this.list1.push(last + i)
//           }
//           resolve()
//         }, 2000)
//       })
// 	},
	
//   }
// }
// </script>

<style lang="less">

    #home {
        .ivu-tabs {
            height: auto;
		}
		//商品
		.goods{
			float: left;
			border: 1px solid #ededed;
			width: 45%;
			height: 240px;
			margin-left: 13px;
			margin-bottom: 8px;
			// text-align: center;
			border-radius: 5%;
		}
		//图片
		img{
			width: 100%;
			border-radius:9px 9px 0 0;
		}
		//商品描述
		.describe{
			color: #3d3d3d;
			text-align: center;
			height: 15px;
			width: 100%;
			display: inline-block;
			white-space: nowrap;
			//溢出显示一行
			overflow: hidden;
			text-overflow: ellipsis;
		}
		//价格
		.price{
			color: red;
			margin-left: 3px;
			// text-align: center;
			font-size: 15px;
		}
		//店铺
		.store{
			margin-left: 3px;
			line-height: 30px;
		}
		.color{
			color: palevioletred;
			font-size: 16px;
			font-weight: 700;
		}
	}
    // .items {
    //     height: 200px;
    //     img {max-width: 200px;max-height: 80%;}
    // }
</style>
