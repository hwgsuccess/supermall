<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.tabbar{
		display: flex;
		position:fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 49px;
		background-color: #f6f6f6;
		box-shadow: 0 -1px 1px rgba(0,0,0,0.1);
		z-index: 9;
	}	
</style>