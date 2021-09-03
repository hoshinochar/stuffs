<template>
  <div>
    <h4 
      :style="`top: ${top}; left: ${left}; color: ${complete ? 'grey' : 'white'}`"
      @click="dialog = true"
      class="file-title"> 
      FILE:{{ number }}
    </h4>

    <v-dialog
      v-model="dialog"
      width="1200"
      class="dialog">
      <v-card
        width="1200"
        height="1000"
        class="card">

        <v-btn
          @click="dialog = false"
          class="x-btn" 
          icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-card-title class="text-h5">
          FILE:{{ number }}
        </v-card-title>

        <v-card-text>
          <slot></slot>
        </v-card-text>

        <v-card-actions class="actions">
          <v-spacer></v-spacer>
          <v-btn
            color="warning"
            text
            @click="clickReset"
          >
            RESET
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="complete = true"
          >
            COMPLETE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'File',
  data () {
    return {
      dialog: false,
      complete: true,
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
    clickReset() {
      this.complete = false;
      this.$emit('reset')
    },
  }
}
</script>

<style lang="scss">

  .x-btn {
    position: absolute;
    left: 1140px;
    top: 10px;
    height: 100px;
    width: 100px;
    .v-icon {
      font-weight: 900 !important;
      font-size: 50px !important;
    }
  }

  .v-btn--icon.v-size--default {
    height: 50px !important;
    width: 50px !important;
  }

  .file-title {
    position: absolute; 
    font-size: 2rem;
    text-shadow: 0px 0px 15px black;
    z-index: 5;
    cursor: pointer;
  }

  .v-card {
    position: absolute !important;
    left: 60px;
    top: 60px;
  }

  .actions {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  
</style>