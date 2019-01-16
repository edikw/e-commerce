<template>
	<div>
		<v-layout row justify-center>
			<v-flex xs10 sm10 lg8>
				<v-tabs
					color="teal lighten-3"
					slider-color="teal"
					:grow="true"
					:centered="true"
				>
					<v-tab
						ripple
					>
						Featured
					</v-tab>
					<v-tab-item
						class="my-2"
						color="transparent" >
						<v-card flat>
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
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
										</v-img>
										<v-card-title>
												<div>
													<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
									</v-img>
										<v-card-title>
											<div>
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
									</v-img>
										<v-card-title>
											<div>
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
									</v-img>
										<v-card-title>
											<div>
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
									</v-img>
										<v-card-title>
											<div>
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
							<!-- </v-flex> -->
						</v-card>
						<v-flex class="text-center text-lg-right">
							<v-btn color="teal" dark class="mx-0">Lihat Semua</v-btn>
						</v-flex>
					</v-tab-item>

					<v-tab
						ripple
					>Hot Sale
					</v-tab>
					<v-tab-item
					 color="transparent">
						<v-card flat>
							<v-flex
								xs12
								class="my-2"
							>
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
													<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
										</v-img>
											<v-card-title>
												<div>
													<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
											</v-img>
												<v-card-title>
													<div>
														<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
											</v-img>
												<v-card-title>
													<div>
														<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
											</v-img>
												<v-card-title>
													<div>
														<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
											</v-img>
												<v-card-title>
													<div>
														<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
						</v-card>
						<v-flex class="text-center text-lg-right">
								<v-btn color="teal" dark class="mx-0">Lihat Semua</v-btn>
						</v-flex>
					</v-tab-item>
					<v-tab
						ripple
					>
						Best Offers
					</v-tab>
					<v-tab-item
						class="my-2"
						color="transparent" >
						<v-card flat>
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
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
										</v-img>
										<v-card-title>
												<div>
													<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
									</v-img>
										<v-card-title>
											<div>
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
									</v-img>
										<v-card-title>
											<div>
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
									</v-img>
										<v-card-title>
											<div>
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
									</v-img>
										<v-card-title>
											<div>
												<h4 class="subheading mb-0">Sanctuany Clotings</h4>
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
							<!-- </v-flex> -->
						</v-card>
						<v-flex class="text-center text-lg-right">
							<v-btn color="teal" dark class="mx-0">Lihat Semua</v-btn>
						</v-flex>
					</v-tab-item>

				</v-tabs>
			</v-flex>
		</v-layout>
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
	.poto{
		height: 200px;
		position: relative;
		overflow: hidden;   
	}
	.poto img{
		height: auto;
		width: auto;
		max-width: 100%;
		max-height: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>