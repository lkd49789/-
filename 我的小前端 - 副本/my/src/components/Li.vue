<template>
	<div id="li">
		<div class="big">
			<span>{{msg.name}}</span>
			<p>{{msg.tetx}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Li',
		props:{
			msg:{
				default:{//页面未加载完成/成功显示的图片
	  				name:'-.-',
	  				txt:'-.-',
	  				background:'blue'
				},
				type:Object
			}
		}
	}
</script>

<style>
	.big{
		width: 67px;
	}
	.big span{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		line-height: 40px;
		text-align: center;
		/* color: white;
		background: 'msg.background'; */
	}
</style>