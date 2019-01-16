<template>
  <!-- <container> -->
  <v-container fluid grid-list-md>
    <v-layout row wrap justify-center>
      <!-- <v-flex xs12 lg8> -->
        <v-flex xs12 sm6 md8 lg6 class="d-inline-block">
         <v-card>
            <v-img
              class="white--text"
              max-height="300px"
              :src="require('../../assets/bannerimg.jpg')" aspect-ratio="2"
            >
            <v-layout fill-height align-end pa-3>
              <v-flex xs12 flexbox class="d-block">
                <span class="headline">Top 10 Australian beaches</span>
                <div class="m-0">
                  <v-btn outline color="teal" class="mx-0">View Colections</v-btn>
                </div>
              </v-flex>
            </v-layout>
            </v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg4 class="d-inline-block">
          <v-layout row wrap>
            <v-flex d-flex>
             <v-card>
                <v-img
                  class="white--text"
                  max-height="150px"
                  :src="require('../../assets/bannerimg2.jpg')" aspect-ratio="2"
                >
                <v-layout fill-height align-end pa-3>
                  <v-flex xs12 flexbox class="d-block">
                    <span class="headline">Top 10 Australian beaches</span>
                    <div class="m-0">
                      <v-btn outline color="teal" class="mx-0">View Colections</v-btn>
                    </div>
                  </v-flex>
                </v-layout>
                </v-img>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card>
                <v-img
                  class="white--text"
                  max-height="140px"
                  :src="require('../../assets/gambar1.jpg')" aspect-ratio="2"
                >
                <v-layout fill-height align-end pa-3>
                  <v-flex xs12 flexbox class="d-block">
                    <span class="headline">Top 10 Australian beaches</span>
                    <div class="m-0">
                      <v-btn outline color="teal" class="mx-0">View Colections</v-btn>
                    </div>
                  </v-flex>
                </v-layout>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
    <!-- </v-flex> -->
    </v-layout>
  </v-container>
  <!-- </container> -->
</template>
<script>
  export default {
    data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  }
</script>