<template>
	<div class="py-3">
		<v-layout color="transparent" row justify-center>
			<v-flex xs10 md10 lg8>
				<v-divider light></v-divider>
				<p class="text-lg-left subheading pt-4 font-weight-bold" style="color: teal;">Pashion Pria Paling Popular</p>
				<v-container fluid grid-list-lg class="px-0 py-0">
				<v-layout>
					<v-flex xs12 lg12>
					<carousel :per-page-custom="[[320, 1],[480, 2], [768, 4], [1440, 5],[1441, 6]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
						<slide>
							<v-card
							class="mx-auto"
								max-width="185"
								>
								<v-img :src="require('../../assets/cloting1.jpg')" aspect-ratio="1.5" contain>
								</v-img>
								<v-card-title>
									<div>
										<h4 class="subheading mb-0">
											Sanctuany Clotings
										</h4>
										<h4>Rp.150.000</h4>
										<div>
											<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
											<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
										</div>
									</div>
								</v-card-title>
							</v-card>
						</slide>
						<slide>
							<v-card
								class="mx-auto"
								max-width="185"
								>
								<v-img :src="require('../../assets/cloting2.jpg')" aspect-ratio="1.5" contain>
									<v-layout
									align-end
									fill-height
									pa-3
									white--text
									>
									</v-layout>
								</v-img>
								<v-card-title>
									<div>
										<h4 class="subheading mb-0">
											Sanctuany Clotings
										</h4>
										<h4>Rp.150.000</h4>
										<div>
											<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
											<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
										</div>
									</div>
								</v-card-title>
							</v-card>
						</slide>

						<slide>
							<v-card
								class="mx-auto"
								max-width="185"
								>
								<v-img :src="require('../../assets/cloting3.jpg')" aspect-ratio="1.5" contain>
									<v-layout
									align-end
									fill-height
									pa-3
									white--text
									>
									</v-layout>
								</v-img>
								<v-card-title>
									<div>
										<h4 class="subheading mb-0">
											Sanctuany Clotings
										</h4>
										<h4>Rp.150.000</h4>
										<div>
											<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
											<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
										</div>
									</div>
								</v-card-title>
							</v-card>
						</slide>
						<slide>
							<v-card
								class="mx-auto"
								max-width="185"
								>
								<v-img :src="require('../../assets/gambar1.jpg')" aspect-ratio="1.5" contain>
									<v-layout
									align-end
									fill-height
									pa-3
									white--text
									>
									</v-layout>
								</v-img>
								<v-card-title>
									<div>
										<h4 class="subheading mb-0">
											Sanctuany Clotings
										</h4>
										<h4>Rp.150.000</h4>
										<div>
											<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
											<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
										</div>
									</div>
								</v-card-title>
							</v-card>
						</slide>
						<slide>
							<v-card
								class="mx-auto"
								max-width="185"
								>
								<v-img :src="require('../../assets/logo.png')" aspect-ratio="1.5" contain>
									<v-layout
									align-end
									fill-height
									pa-3
									white--text
									>
									</v-layout>
								</v-img>
								<v-card-title>
									<div>
										<h4 class="subheading mb-0">
											Sanctuany Clotings
										</h4>
										<h4>Rp.150.000</h4>
										<div>
											<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
											<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
										</div>
									</div>
								</v-card-title>
							</v-card>
						</slide>
						<slide>
							<v-card
								class="mx-auto"
								max-width="185"
								>
								<v-img :src="require('../../assets/bannerimg2.jpg')" aspect-ratio="1.5" contain>
									<v-layout
									align-end
									fill-height
									pa-3
									white--text
									>
									</v-layout>
								</v-img>
								<v-card-title>
									<div>
										<h4 class="subheading mb-0">
											Sanctuany Clotings
										</h4>
										<h4>Rp.150.000</h4>
										<div>
											<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
											<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
										</div>
									</div>
								</v-card-title>
							</v-card>
						</slide>
					</carousel>
				</v-flex>
				</v-layout>
				<v-flex class="text-center text-lg-right">
					<v-btn color="teal" dark class="mx-0">Lihat Semua</v-btn>
				</v-flex>
				</v-container>
			</v-flex>
			</v-layout>
		


		<div class="py-3">
			<v-layout color="transparent" row justify-center>
				<v-flex xs10 md10 lg8>
					<v-divider light></v-divider>
					<p class="text-lg-left subheading pt-4 font-weight-bold" style="color: teal;">Pashion Wanita Paling Popular</p>
					<v-container fluid grid-list-lg class="px-0 py-0">
					<v-layout>
						<v-flex xs12 lg12>
						<carousel :per-page-custom="[[320, 1],[480, 2], [768, 4], [1440, 5],[1441, 6]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
							<slide>
								<v-card
								class="mx-auto"
									max-width="185"
									>
									<v-img :src="require('../../assets/cloting1.jpg')" aspect-ratio="1.5" contain>
									</v-img>
									<v-card-title>
										<div>
											<h4 class="subheading mb-0">
												Sanctuany Clotings
											</h4>
											<h4>Rp.150.000</h4>
											<div>
												<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
												<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
											</div>
										</div>
									</v-card-title>
								</v-card>
							</slide>
							<slide>
								<v-card
									class="mx-auto"
									max-width="185"
									>
									<v-img :src="require('../../assets/cloting2.jpg')" aspect-ratio="1.5" contain>
										<v-layout
										align-end
										fill-height
										pa-3
										white--text
										>
										</v-layout>
									</v-img>
									<v-card-title>
										<div>
											<h4 class="subheading mb-0">
												Sanctuany Clotings
											</h4>
											<h4>Rp.150.000</h4>
											<div>
												<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
												<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
											</div>
										</div>
									</v-card-title>
								</v-card>
							</slide>

							<slide>
								<v-card
									class="mx-auto"
									max-width="185"
									>
									<v-img :src="require('../../assets/cloting3.jpg')" aspect-ratio="1.5" contain>
										<v-layout
										align-end
										fill-height
										pa-3
										white--text
										>
										</v-layout>
									</v-img>
									<v-card-title>
										<div>
											<h4 class="subheading mb-0">
												Sanctuany Clotings
											</h4>
											<h4>Rp.150.000</h4>
											<div>
												<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
												<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
											</div>
										</div>
									</v-card-title>
								</v-card>
							</slide>
							<slide>
								<v-card
									class="mx-auto"
									max-width="185"
									>
									<v-img :src="require('../../assets/gambar1.jpg')" aspect-ratio="1.5" contain>
										<v-layout
										align-end
										fill-height
										pa-3
										white--text
										>
										</v-layout>
									</v-img>
									<v-card-title>
										<div>
											<h4 class="subheading mb-0">
												Sanctuany Clotings
											</h4>
											<h4>Rp.150.000</h4>
											<div>
												<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
												<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
											</div>
										</div>
									</v-card-title>
								</v-card>
							</slide>
							<slide>
								<v-card
									class="mx-auto"
									max-width="185"
									>
									<v-img :src="require('../../assets/logo.png')" aspect-ratio="1.5" contain>
										<v-layout
										align-end
										fill-height
										pa-3
										white--text
										>
										</v-layout>
									</v-img>
									<v-card-title>
										<div>
											<h4 class="subheading mb-0">
												Sanctuany Clotings
											</h4>
											<h4>Rp.150.000</h4>
											<div>
												<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
												<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
											</div>
										</div>
									</v-card-title>
								</v-card>
							</slide>
							<slide>
								<v-card
									class="mx-auto"
									max-width="185"
									>
									<v-img :src="require('../../assets/bannerimg2.jpg')" aspect-ratio="1.5" contain>
										<v-layout
										align-end
										fill-height
										pa-3
										white--text
										>
										</v-layout>
									</v-img>
									<v-card-title>
										<div>
											<h4 class="subheading mb-0">
												Sanctuany Clotings
											</h4>
											<h4>Rp.150.000</h4>
											<div>
												<v-btn class="mx-0 mt-3" outline color="teal lighten -3">
												<v-icon>shopping_cart</v-icon>Add To Cart</v-btn>
											</div>
										</div>
									</v-card-title>
								</v-card>
							</slide>
						</carousel>
					</v-flex>
					</v-layout>
					<v-flex class="text-center text-lg-right">
						<v-btn color="teal" dark class="mx-0">Lihat Semua</v-btn>
					</v-flex>
				</v-container>
				</v-flex>
			</v-layout>
		</div>
	</div>

</template>
<script>
	import { Carousel, Slide } from 'vue-carousel';
export default {
	components: {
	Carousel,
	Slide
	}
};
</script>
<style scoped>
	div .VueCarousel-inner {
		flex-basis: 210.667px;
	}
</style>