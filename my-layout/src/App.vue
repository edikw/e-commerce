<template>
	<v-app>
		<v-toolbar height="80" color="light">
			<v-layout class="mt-0">
				<v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer">
				</v-toolbar-side-icon>
				<v-flex xs2 align-self-center>
					<v-img
						:src="require('./assets/logo.svg')"
						class="m-0"
						contain
						height="50">
					</v-img>
				</v-flex>
				<v-menu class="mr-5 hidden-md-and-down" offset-y >
		      <v-list-tile
		        slot="activator"
		      ><v-icon class="mr-2">menu</v-icon>
		        Category
		      </v-list-tile>
		      <v-list>
		        <v-list-tile
		          v-for="(item, index) in category"
		          :key="index"
		        >
		          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
		        </v-list-tile>
		      </v-list>
		    </v-menu>
				<v-layout class="justify-center">
					<v-flex xs8 lg12>
						<v-text-field
							class="m-0 pt-0"
							flat
							label="Search"
							prepend-inner-icon="search"
							color="purple">  
						</v-text-field>
					</v-flex>
				</v-layout>

				<v-layout align-center justify-center class="hidden-md-and-down">
					<v-menu offset-y>
						<v-badge left color="warning" slot="activator">
				      <span slot="badge">6</span>
				      <v-icon
				        medium
				      >
				        shopping_cart
				      </v-icon>
				    </v-badge>
						
						<v-card>
							<v-list-tile>
								<v-list-tile-title>Total barang: 0</v-list-tile-title>
							</v-list-tile>
							<v-divider light></v-divider>
								<div class="px-5">
									<v-img :src="require('./assets/cart.png')"></v-img>
								</div>
							<v-list-tile>
								<v-list-tile-title>Belum ada barang yang ditambahkan</v-list-tile-title>
							</v-list-tile>
							<v-divider light></v-divider>
								<div class="text-center">
				          <v-btn flat color="purple">Lihat Keranjang</v-btn>
								</div>
						</v-card>
					</v-menu>
				</v-layout>
				<v-layout class="hidden-md-and-down justify-center align-center" id="account" v-if="show">
						<div class="d-flex">
							<v-menu open-on-hover offset-y>
								<v-avatar slot="activator">
						      <img
						        :src="require('./assets/a.jpg')"
						        alt="John"
						        tile
						      >
						    </v-avatar>
						    <v-list class="py-0">
							    <v-list-tile
									>
										<v-icon>account_circle</v-icon>
										<v-list-tile-content class="ml-2">
											<v-list-tile-title>Profile</v-list-tile-title>
										</v-list-tile-content>
									</v-list-tile>
									<v-list-tile
									>
										<v-icon>shopping_cart</v-icon>
										<v-list-tile-content class="ml-2">
											<v-list-tile-title>Keranjang</v-list-tile-title>
										</v-list-tile-content>
									</v-list-tile>

									<v-list-tile
									>
										<v-icon>history</v-icon>
										<v-list-tile-content class="ml-2">
											<v-list-tile-title>History pesanan</v-list-tile-title>
										</v-list-tile-content>
									</v-list-tile>

									<v-list-tile
									>
										<v-icon>settings</v-icon>
										<v-list-tile-content class="ml-2">
											<v-list-tile-title>Setting</v-list-tile-title>
										</v-list-tile-content>
									</v-list-tile>
									<v-divider light></v-divider>
									<v-list-tile v-on:click="logout">
										<v-icon>settings</v-icon>
										<v-list-tile-content class="ml-2">
											<v-list-tile-title>Logout</v-list-tile-title>
										</v-list-tile-content>
									</v-list-tile>
								</v-list>
					    </v-menu>
					    <div class="d-inline-block ml-2">
								<p caption class="mb-0">Hay,</p><p class="mb-0">Edi kurniawan</p>
					    </div>
						</div>
				</v-layout>

				<div class="hidden-md-and-down justify-center" v-if="showlogin">
					<v-dialog max-width="400px" v-model="dialog">
						<v-btn
							slot="activator"
							color="purple darken-4"
							depressed
							outline
						>Login</v-btn>
						<v-card>
			        <v-card-title style="justify-content: center;">
			          <span class="headline text-center">Login</span>
			        </v-card-title>
			        <v-card-text>
			          <v-container grid-list py-0>
			            <v-layout wrap>
			              <v-flex lg12>
			                <v-text-field label="User name" required  v-model="username" color="purple"></v-text-field>
			              </v-flex>
			              <v-flex xs12>
			                <v-text-field
						            :append-icon="show2 ? 'visibility_off' : 'visibility'"
						            :type="show2 ? 'password' : 'text'"
						            name="input-10-2"
						            label="Visible"
						            hint="At least 8 characters"
						            class="input-group--focused"
						            color="purple"
						            @click:append="show2 = !show2"

						          ></v-text-field>
			              </v-flex>
						        <v-card-title class="px-0 py-0">
						          <span style="color: #FF5252; cursor: pointer;">Lupa Password?</span>
						        </v-card-title>
			            </v-layout>
			          </v-container>
			        </v-card-text>

		          <v-spacer></v-spacer>
			        <v-card-title>
			          <v-btn color="blue" dark block v-on:click="login">Login</v-btn>
			        </v-card-title>
			      </v-card>
					</v-dialog>

					<v-dialog max-width="400px" v-model="dialogDaftar">
						<v-btn
							color="teal"
							dark
							depressed
							slot="activator"
						>
						Daftar
						</v-btn>
						<v-card>
			        <v-card-title style="justify-content: center;">
			          <span class="headline text-center">Daftar</span>
			        </v-card-title>
			        <v-card-text>
			          <v-container grid-list py-0>
			            <v-layout wrap>
			              <v-flex lg12>
			                <v-text-field 
				                label="User name" 
				                required  
				                v-model="username" 
				                color="purple"
				                :rules="nameRules">
			                </v-text-field>
			              </v-flex>
			              <v-flex lg12>
			                <v-text-field label="Email" required  v-model="email" color="purple" type="email" :rules="emailRules" required></v-text-field>
			              </v-flex>
			              <v-flex lg12>
			                <v-text-field
						            :append-icon="show2 ? 'visibility_off' : 'visibility'"
						            :type="show2 ? 'password' : 'text'"
						            :rules="[rules.required, rules.min]"
						            name="input-10-2"
						            label="Visible"
						            hint="At least 8 characters"
						            class="input-group--focused"
						            color="purple"
						            required
						            @click:append="show2 = !show2"
						          ></v-text-field>
			              </v-flex>
			            </v-layout>
			          </v-container>
			        </v-card-text>

		          <v-spacer></v-spacer>
			        <v-card-title>
			          <v-btn color="blue" dark block @click="dialogDaftar = false">Daftar</v-btn>
			        </v-card-title>
			      </v-card>
					</v-dialog>


				</div>

			</v-layout>
		</v-toolbar>
			<v-navigation-drawer
				v-model="drawer"
				:mini-variant="mini"
				absolute
				dark
				temporary
			>
				<v-layout justify-end>
					<v-list-tile @click.stop="mini = !mini">
						<v-icon>chevron_left</v-icon>
					</v-list-tile>
					<v-list-tile v-if="mini" @click.stop="mini = !mini">
						<v-list-tile-action>
							<v-icon>chevron_right</v-icon>
						</v-list-tile-action>
					</v-list-tile>
				</v-layout>
				<v-divider light></v-divider>
				<v-list class="py-3" v-show="!mini && showlogin">
					<v-list-tile >
						<v-dialog max-width="400px" v-model="dialog">
							<v-btn 
								depressed 
								large 
								color="purple" 
								slot="activator">
								Login
							</v-btn>
							<v-card>
				        <v-card-title style="justify-content: center;">
				          <span class="headline text-center">Login</span>
				        </v-card-title>
				        <v-card-text>
				          <v-container grid-list py-0>
				            <v-layout wrap>
				              <v-flex lg12>
				                <v-text-field label="User name" required  v-model="username" color="purple"></v-text-field>
				              </v-flex>
				              <v-flex xs12>
				                <v-text-field
							            :append-icon="show2 ? 'visibility_off' : 'visibility'"
							            :type="show2 ? 'password' : 'text'"
							            name="input-10-2"
							            label="Visible"
							            hint="At least 8 characters"
							            class="input-group--focused"
							            color="purple"
							            @click:append="show2 = !show2"
							          ></v-text-field>
				              </v-flex>
							        <v-card-title class="px-0 py-0">
							          <span style="color: #FF5252; cursor: pointer;">Lupa Password?</span>
							        </v-card-title>
				            </v-layout>
				          </v-container>
				        </v-card-text>
			          <v-spacer></v-spacer>
				        <v-card-title>
				          <v-btn color="blue" dark block v-on:click="login">Login</v-btn>
				        </v-card-title>
				      </v-card>
						</v-dialog>
						<v-dialog max-width="400px" v-model="dialogDaftar">
							<v-btn 
								depressed 
								large
								slot="activator">
								Daftar
							</v-btn>
							<v-card>
				        <v-card-title style="justify-content: center;">
				          <span class="headline text-center">Daftar</span>
				        </v-card-title>
				        <v-card-text>
				          <v-container grid-list py-0>
				            <v-layout wrap>
				              <v-flex lg12>
				                <v-text-field 
					                label="User name" 
					                required  
					                v-model="username" 
					                color="purple"
					                :rules="nameRules">
				                </v-text-field>
				              </v-flex>
				              <v-flex lg12>
				                <v-text-field label="Email" required  v-model="email" color="purple" type="email" :rules="emailRules" required></v-text-field>
				              </v-flex>
				              <v-flex lg12>
				                <v-text-field
							            :append-icon="show2 ? 'visibility_off' : 'visibility'"
							            :type="show2 ? 'password' : 'text'"
							            :rules="[rules.required, rules.min]"
							            name="input-10-2"
							            label="Visible"
							            hint="At least 8 characters"
							            class="input-group--focused"
							            color="purple"
							            required
							            @click:append="show2 = !show2"
							          ></v-text-field>
				              </v-flex>
				            </v-layout>
				          </v-container>
				        </v-card-text>
			          <v-spacer></v-spacer>
				        <v-card-title>
				          <v-btn color="blue" dark block v-on:click="signup">Daftar</v-btn>
				        </v-card-title>
				      </v-card>
						</v-dialog>
					</v-list-tile>
				</v-list>
				<v-list v-if="show">
					<v-list-tile avatar tag="div">
						<v-list-tile-avatar>
							<img :src="require('./assets/logo.svg')">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Edi Kw</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
				<v-list class="pt-0" dense v-if="show">
				<v-divider light></v-divider>
					<v-list-tile
					>
						<v-list-tile-action>
							<v-icon>account_circle</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Profile</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile
					>
						<v-list-tile-action>
							<v-icon>shopping_cart</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Keranjang</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

					<v-list-tile
					>
						<v-list-tile-action>
							<v-icon>history</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>History pesanan</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

					<v-list-tile
					>
						<v-list-tile-action>
							<v-icon>settings</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Setting</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

					<v-list-tile
					>
						<v-list-tile-action>
							<v-icon>settings</v-icon>
						</v-list-tile-action>

						<v-list-tile-content v-on:click="logout">
							<v-list-tile-title>Logout</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

				</v-list>
				<v-list v-show="!mini">
					<v-list-group
						value="true"
					>
						<v-list-tile slot="activator">
							<v-list-tile-title>Category</v-list-tile-title>
						</v-list-tile>
						<v-list-tile 
						v-for=" cat in category" 
							:key ="cat.title">
								<v-list-tile-title>{{cat.title}}</v-list-tile-title>
						</v-list-tile>
					</v-list-group>
				</v-list>
			</v-navigation-drawer>

		<content>
			<Home/>
		</content>

		<v-card flat class="hidden-md-and-up">
			<v-bottom-nav
				:value="true"
				color="transparent"
			>
				<v-btn
					color="purple"
					flat
					value="home"
				>
					<span>Home</span>
					<v-icon>home</v-icon>
				</v-btn>

				<v-btn
					color="purple"
					flat
					value="pesanan"
				>
					<span>Pesanan</span>
					<v-icon>history</v-icon>
				</v-btn>

				<v-btn
					color="purple"
					flat
					value="keranjang"
				>
					<span>Keranjang</span>
					<v-icon>shopping_cart</v-icon>
				</v-btn>

				<v-btn
					color="purple"
					flat
					value="akun"
				>
					<span>Akun</span>
					<v-icon>account_circle</v-icon>
				</v-btn>
			</v-bottom-nav>
		</v-card>
		<v-footer
		    height="auto"
		    color="grey darken-4"
		    class="hidden-md-and-down"
	  	>
	    <v-layout
	      justify-center
	      row
	      wrap
	    >
	      <v-btn
	        v-for="link in links"
	        :key="link"
	        color="white"
	        flat
	        round
	      >
	        {{ link }}
	      </v-btn>
	      <v-flex
	        
	        py-3
	        text-xs-center
	        white--text
	        xs12
	      >
	        &copy;2019 | <p class="d-inline-block">Edi kurniawan wibowo</p>
	      </v-flex>
	    </v-layout>
	  </v-footer>
	</v-app>
</template>

<script>
import Home from './views/Home.vue'
// import ImageBar from './components/ImageBar/ImageBar.vue'

export default {
	name: 'App',
	components: {
		Home,
		// ImageBar
	},
	data () {
		return {
			show : false,
			showlogin: true,
			drawer: null,
			loader: null,
			loading1: false,
			loading2: false,
			items: [
				{ title: 'Profile', icon: 'account_circle' },
				{ title: 'Keranjang', icon: 'shopping_cart' },
				{ title: 'History pesanan', icon: 'history' },
				{ title: 'Setting', icon: 'settings' },
				{ title: 'Logout', icon: 'settings' }
			],
			mini: false,
			right: null,
			category: [
					{title: 'Memancing'},
					{title: 'Memasak'},
					{title: 'Menjahit'},
					{title: 'Melamun'},
					{title: 'Menggonggong'},
					{title: 'Mencangkul'},
			],
			dialog: false,
			dialogDaftar: false,
			username: '',
			nameRules: [
		        v => !!v || 'Name is required',
		        v => v.length <= 10 || 'Name must be less than 10 characters'
	      	],
			password: '',
			rules: {
	          required: value => !!value || 'Required.',
	          min: v => v.length >= 8 || 'Min 8 characters',
	          emailMatch: () => ('The email and password you entered don\'t match')
	        },
			email: '',
			emailRules: [
		        v => !!v || 'E-mail is required',
		        v => /.+@.+/.test(v) || 'E-mail must be valid'
	      	],
	        show2: true,
	        links: [
		        'Home',
		        'About Us',
		        'Services',
		        'Contact Us'
	      	]
		}
	},
	methods: {
		login(){
				this.show = true;
				this.showlogin = false;
				this.dialog = false
		},
		signup(){
				this.show = false;
				this.dialogDaftar = false;
		},
		logout(){
			this.showlogin = true;
			this.show = false;
		}
	},
	watch: {
			loader () {
				const l = this.loader
				this[l] = !this[l]

				setTimeout(() => (this[l] = false), 3000)

				this.loader = null
			}
	}
}
</script>
<style>
* {
	font-family: sans-serif;
}
	.custom-loader {
		animation: loader 1s infinite;
		display: flex;
	}
	@-moz-keyframes loader {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes loader {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@-o-keyframes loader {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@keyframes loader {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.custom-loader1 {
		animation: loader 1s infinite;
		display: flex;
	}
	@-moz-keyframes loader {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes loader {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@-o-keyframes loader {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	@keyframes loader {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	aside{
		width: 282px;
	}
	.theme--light.v-input:not(.v-input--is-disabled) input, .theme--light.v-input:not(.v-input--is-disabled) textarea {
		font-size: small;
	}
	#account p{
		font-family: 'Montserrat', sans-serif;
	}
	div .text-center {
		text-align: center;
	}
</style>