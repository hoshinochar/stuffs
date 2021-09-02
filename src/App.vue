<template>
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Stuffs',
}
</script>

<style lang="scss">
  .theme--dark.v-application {
    background: #161616 !important;
    color: #FFFFFF;
  }
</style>
