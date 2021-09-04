<template>
  <v-container class="ma-16">
    <h1 class="text-center">home</h1>

    <section class="d-flex justify-center">

      <v-hover v-slot="{ hover }">
        <v-card
          width="300"
          height="300"
          @click="$router.push({ path: '/deleted-affair' })"
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover, 'ma-6': true }">
          <v-img
            max-width="300"
            max-height="300"
            contain
            src="https://media.discordapp.net/attachments/708164441073778708/883155840629100614/char-white.png?width=742&height=1395"
            id="silhouette"
          ></v-img>
          <v-card-title
            class="screaming">
            char's deleted affair
          </v-card-title>
        </v-card>
      </v-hover>

      <v-hover v-slot="{ hover }">
        <v-card
          width="300"
          height="300"
          @click="$router.push({ path: '/credits' })"
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover, 'ma-6': true }">
          <v-img
            max-width="300"
            max-height="300"
            contain
            src="https://media.discordapp.net/attachments/708164441073778708/883851431847817236/unknown.png"
            id="silhouette"
          ></v-img>
          <v-card-title
            class="screaming2">
            credits
          </v-card-title>
        </v-card>
      </v-hover>
    </section>

  </v-container>
</template>

<style lang="scss">
.screaming {
  position: absolute;
  top: 70px;
  left: -90px;
  transform: rotate(90deg);
  text-shadow: 0px 0px 15px black;
}

.screaming2 {
  position: absolute;
  top: 20px;
  left: -30px;
  transform: rotate(90deg);
  text-shadow: 0px 0px 15px black;
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }
</style>