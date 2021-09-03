<template>
  <div>
    <h4 
      :style="`top: ${top}; left: ${left};`"
      @click="clickFile"
      class="file-title"> 
      FILE:{{ number }}
    </h4>

    <v-dialog
      v-model="dialog"
      width="500"
    >
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'File',
  data () {
    return {
      dialog: false,
    }
  },
  props: {
    number: {
      type: String,
      default: '00',
    },
    top: {
      type: String,
    },
    left: {
      type: String,
    }
  },
  methods: {
    clickFile() {
      this.dialog = true;
    }
  }
}
</script>

<style lang="scss">

  .file-title {
    position: absolute; 
    font-size: 2rem;
    text-shadow: 0px 0px 15px black;
    z-index: 5;
  }

</style>