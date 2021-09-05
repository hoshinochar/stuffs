<template>
  <v-container class="ma-16">
    <h1 class="text-center">credits</h1>

    <section class="d-flex justify-center">
      <div class="d-flex flex-column">
        <v-hover v-slot="{ hover }">
          <v-card
            width="600"
            height="150"
            @click="redirect('rosuuri');"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover, 'ma-6': true }">
            <v-card-title class="credit-title">
              char live2d model art
            </v-card-title>
            <v-card-title class="credit-subtitle">
              rosuuri
            </v-card-title>
            
            <v-img
              max-width="600"
              max-height="150"
              src="https://media.discordapp.net/attachments/708164441073778708/883866757176131604/unknown.png"
            ></v-img>
            <img
              max-width="50"
              max-height="50"
              class="avatars"
              src="https://media.discordapp.net/attachments/708164441073778708/883861474278273075/x1D44i_Y_400x400.png"/>

          </v-card>
        </v-hover>

        <v-hover v-slot="{ hover }">
          <v-card
            width="600"
            height="150"
            @click="redirect('hazardhornet');"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover, 'ma-6': true }">
            <v-card-title class="credit-title">
              char live2d model rig
            </v-card-title>
            <v-card-title class="credit-subtitle">
              hazard hornet
            </v-card-title>
            
            <v-img
              max-width="600"
              max-height="150"
              src="https://media.discordapp.net/attachments/708164441073778708/883866538761945129/unknown.png"
            ></v-img>
            <img
              max-width="50"
              max-height="50"
              class="avatars"
              src="https://media.discordapp.net/attachments/708164441073778708/883866004185317467/czt1Shrl_400x400.png"/>

          </v-card>
        </v-hover>

        <v-hover v-slot="{ hover }">
          <v-card
            width="600"
            height="150"
            @click="redirect('tamagotaho');"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover, 'ma-6': true }">
            <v-card-title class="credit-title">
              loading screen & alerts
            </v-card-title>
            <v-card-title class="credit-subtitle">
              tamagotaho
            </v-card-title>
            
            <v-img
              max-width="600"
              max-height="150"
              src="https://media.discordapp.net/attachments/708164441073778708/883868356762034226/unknown.png"
            ></v-img>
            <img
              max-width="50"
              max-height="50"
              class="avatars"
              src="https://media.discordapp.net/attachments/708164441073778708/883867716035969094/HgxwL00O_400x400.png"/>

          </v-card>
        </v-hover>

        <v-hover v-slot="{ hover }">
          <v-card
            width="600"
            height="150"
            @click="redirect('esseph_');"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover, 'ma-6': true }">
            <v-card-title class="credit-title">
              bgm: the gallant charlotte
            </v-card-title>
            <v-card-title class="credit-subtitle">
              esseph
            </v-card-title>
            
            <v-img
              max-width="600"
              max-height="150"
              src="https://media.discordapp.net/attachments/708164441073778708/883869027208929321/unknown.png"
            ></v-img>
            <img
              max-width="50"
              max-height="50"
              class="avatars"
              src="https://media.discordapp.net/attachments/708164441073778708/883869243114926080/Ug9kRyIw_400x400.png"/>

          </v-card>
        </v-hover>

        <v-hover v-slot="{ hover }">
          <v-card
            width="600"
            height="150"
            @click="redirect('jobofish');"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover, 'ma-6': true }">
            <v-card-title class="credit-title">
              emotes
            </v-card-title>
            <v-card-title class="credit-subtitle">
              jobofish
            </v-card-title>
            
            <v-img
              max-width="600"
              max-height="150"
              src="https://media.discordapp.net/attachments/708164441073778708/883871014524710912/unknown.png"
            ></v-img>
            <img
              max-width="50"
              max-height="50"
              class="avatars"
              src="https://media.discordapp.net/attachments/708164441073778708/883870347970084904/YKASJQNi_400x400.png"/>

          </v-card>
        </v-hover>

        <v-hover v-slot="{ hover }">
          <v-card
            width="600"
            height="150"
            @click="redirect('umiushiurara');"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover, 'ma-6': true }">
            <v-card-title class="credit-title">
              stream overlays & mad libs brain
            </v-card-title>
            <v-card-title class="credit-subtitle">
              umiushiurara
            </v-card-title>
            
            <v-img
              max-width="600"
              max-height="150"
              src="https://media.discordapp.net/attachments/708164441073778708/883869868531802153/unknown.png"
            ></v-img>
            <img
              max-width="50"
              max-height="50"
              class="avatars"
              src="https://media.discordapp.net/attachments/708164441073778708/883869538914009148/eRobrf75_400x400.png"/>

          </v-card>
        </v-hover>

        <v-hover v-slot="{ hover }">
          <v-card
            width="600"
            height="150"
            @click="redirect('yazakikallin');"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover, 'ma-6': true }">
            <v-card-title class="credit-title">
              stream thumbnail
            </v-card-title>
            <v-card-title class="credit-subtitle">
              yazakikallin
            </v-card-title>
            
            <v-img
              max-width="600"
              max-height="150"
              src="https://media.discordapp.net/attachments/708164441073778708/883871327138750505/unknown.png"
            ></v-img>
            <img
              max-width="50"
              max-height="50"
              class="avatars"
              src="https://media.discordapp.net/attachments/708164441073778708/883871368280690698/lq0Wo-5R_400x400.png"/>

          </v-card>
        </v-hover>
      </div>


    </section>
  </v-container>
</template>

<script>
export default {
  methods: {
    redirect(twitter) {
      window.location.href = `https://twitter.com/${twitter}`;
    }
  }
}
</script>

<style lang="scss">

.credit-title {
  position: absolute;
  right: 0px;
  z-index: 5;
  text-shadow: 0px 0px 15px black;
}

.credit-subtitle {
  position: absolute;
  top: 25px;
  right: 0px;
  z-index: 5;
  text-shadow: 0px 0px 15px black;
}

.avatars {
  position: absolute;
  height: 50px;
  width: 50px;
  bottom: 10px;
  right: 10px;
  // border-radius: 50%;
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

</style>