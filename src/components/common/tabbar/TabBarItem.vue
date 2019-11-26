<template>
	<div class="tabbar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>		
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			activeColor: {
				type: String,				
				default: 'deepPink'
			}
		},		
		data() {
			return {
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) != -1
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods: {
			itemClick() {
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tabbar-item{
		flex: 1;
		text-align: center;
		font-size: 14px;
	}
	.tabbar-item img{
		width: 22px;
		height: 22px;
		margin: 3px 0 2px;
		vertical-align: middle;
	}
</style>