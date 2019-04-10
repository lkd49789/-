<template>
	<div id="index">
		<header class="header">
			<div class="left">
				<span class="img">陈</span>
				<span class="txt">前端小站</span>
			</div>
			<div class="right">我</div>
		</header>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item,index in arr" :key="index">
		        	<img :src="item"/>
		        </div>
		        <div class="swiper-pagination"></div>
		    </div>
		</div>
		<Li v-for="item,index in Larr" :msg="item" :key="index"></Li>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import Li from '@/components/Li'
export default {
  name: 'Index',
  mounted(){
			var mySwiper = new Swiper('.swiper-container',{
				autoplay:true,
				 loop: true,
				 scrollbar: {
				    el: '.swiper-scrollbar'
				  },
			})
		},
  data () {
    return {
	     arr:[
	     		require('../assets/banner01.png'),
	     		require('../assets/banner02.png'),
	     		require('../assets/banner03.png'),
	     		require('../assets/banner04.png'),
	     		require('../assets/banner05.png')
	     ],
	     Larr:[
	     	{
	     		name:'小',
	     		tetx:'HTML',
	     		background:'skyblue'
	     	},
	     	{
	     		name:'火',
	     		tetx:'CSS',
	     		background:'red'
	     	},
	     	{
	     		name:'柴',
	     		tetx:'JavaScript',
	     		background:'pink'
	     	},
	     	{
	     		name:'的',
	     		tetx:'HTTP',
	     		background:'green'
	     	},
	     	{
	     		name:'蓝',
	     		tetx:'前端框架',
	     		background:'blue'
	     	},
	     	{
	     		name:'色',
	     		tetx:'前端工具',
	     		background:'orange'
	     	},
	     	{
	     		name:'理',
	     		tetx:'后台相关',
	     		background:'yellow'
	     	},
	     	{
	     		name:'想',
	     		tetx:'移动端',
	     		background:'black'
	     	}
	     ]
    }
	},
	components: {
		Li
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.swiper-container{
		height: 207px;
	}
	.swiper-container img{
		width: 100%;
		height: 100%;
	}
	.header{
		width: 100%;
		height: 40px;
		position: relative;
	}
	.left{
		width: 100px;
	}
	.left .img{
		display: inline-block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: cornflowerblue;
		color: white;
		line-height: 32px;
		text-align: center;
	}
	.txt{
		font-size: 14px;
		color: dodgerblue;
	}
	.right{
		position: absolute;
		right: 0px;
		top: 0px;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: deepskyblue;
		line-height: 32px;
		text-align: center;
		color: white;
	}
</style>
