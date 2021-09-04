<template>
  <div id="overlay">
    <!-- LEFT SIDE -->
    <div id="game-container">
      <v-img
        max-width="550"
        max-height="1020"
        src="https://media.discordapp.net/attachments/708164441073778708/883155840629100614/char-white.png?width=742&height=1395"
        id="silhouette"
      ></v-img>

      <!-- FILES -->
      <File 
        number="01"
        top="900px"
        left="500px"
        :complete="(file01a.length > 0 && file01b.length > 0 && file01c.length > 0)"
        v-on:reset="reset('01')"
        v-on:toggle="showfile01story = !showfile01story">
        <transition name="slide">
          <section v-if="showfile01story" class="story">
            After her one year anniversary, Char traveled to Axis to take a break. She decided to further her education by attending the University of <strong>{{ file01a || '_______' }}</strong>. During that time, she bought new combat boots and tested them out by stepping on <strong>{{ file01b || '_______' }}</strong>.  Something <strong>{{ file01c || '_______' }}</strong> Something.
          </section>
        </transition>

        <section class="mt-10">
          <v-text-field
            label="Type of Food"
            v-model="file01a"
            outlined
          ></v-text-field>
          <v-text-field
            label="Tsunderia Member"
            v-model="file01b"
            outlined
          ></v-text-field>
          <v-text-field
            label="Something"
            v-model="file01c"
            outlined
          ></v-text-field>
        </section>
      </File>


      <!-- CONTROLS -->
      <v-card-actions class="actions">
        <v-btn
          color="error"
          text
          @click="reset()"
        >
          RESET
        </v-btn>
        <v-btn
          color="primary"
          text
        >
          LOG
        </v-btn>
      </v-card-actions>
    </div>

    <!-- RIGHT SIDE -->
    <h2 id="game-title">char's deleted affair</h2>
    <h2 id="game-subtitle">MAD LIBS ED.</h2>
    <div id="chatbox">
      <h3 id="chat-title">— chat —</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import File from '@/components/File.vue'

export default {
  name: 'DeletedAffair',
  components: {
    File,
  },
  data () {
    return {
      // SHOW STORY (NOTE: THIS IS HORRIBLE DON'T DO THIS)
      showfile01story: false,

      // FILES
      file01a: '',
      file01b: '',
      file01c: '',
    }
  },
  methods: {
    reset (file) {
      switch(file) {
        case '01':
          this.file01a = '';
          this.file01b = '';
          this.file01c = '';
          break;
        default:
      }
    },
  },
}
</script>

<style lang="scss">
#overlay {
  width: 1920px;
  height: 1080px;
  border: solid 3px #A2A2A2;
  margin: 20px;

  #game-container {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 1220px;
    height: 1020px;
    border: solid 3px #626262;

    #silhouette {
      position: absolute;
      left: 300px;
    }
  }

  #game-title {
    position: absolute;
    left: 1320px;
    top: 50px;
    font-size: 4rem;
  }

  #game-subtitle {
    position: absolute;
    left: 1690px;
    top: 110px;
    font-size: 2rem;
  }

  .actions {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  #chatbox {
    position: absolute;
    left: 1280px;
    top: 200px;
    border: solid 3px #626262;
    margin: 20px;
    width: 610px;
    height: 850px;

    #chat-title {
      color: #b2b2b2;
      font-size: 2rem;
      text-align: center;
      margin-top: 20px;
    }
  }

}
</style>