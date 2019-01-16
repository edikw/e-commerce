<template>
	<div>
		<v-carousel hide-delimiters class="hidden-sm-and-down" v-if="items" flat>
		    <v-carousel-item
		      v-for="(item,i) in items"
		      :key="i"
		      :src="item.src"
		    ></v-carousel-item>
		</v-carousel>
	</div>
</template>

<script>
  export default {
    data () {
		return {
			items: [
				{
				src: require('../../assets/bannerimg.jpg')
				},
				{
				src: require('../../assets/cloting3.jpg')
				},
				{
				src: require('../../assets/banner1.jpg')
				},
				{
				src: require('../../assets/banner2.jpg')
				}
			]
		}
    }
  }
</script>
<style scoped>
</style>