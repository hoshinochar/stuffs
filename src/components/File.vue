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
      hide-overlay
      width="1200">
      <v-card
        width="1200"
        height="1000">

        <v-btn
          @click="dialog = false"
          class="x-btn" 
          icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-card-title class="text-h4">
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
            @click="$emit('toggle')"
          >
            SHOW/HIDE STORY
          </v-btn>
          <v-btn
            color="error"
            text
            @click="clickReset"
          >
            RESET
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="reveal = true"
            :disabled="!complete"
          >
            REVEAL
          </v-btn>
        </v-card-actions>
        <v-card-actions class="actions-done">
          <v-btn
            color="success"
            text
            @click="dialog = false"
          >
            DONE
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
      reveal: false,
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
    },
    complete: {
      type: Boolean,
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

  .v-card__text {
    font-size: 1.5rem !important;
  }

  .actions {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  .actions-done {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }

  .v-input {
    width: 250px;
  }

  b, strong {
    color: white;
  }
  
  .slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
  }

  .slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to, .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }
</style>