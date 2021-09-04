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
        left="470px"
        :complete="file01a.length > 0 && file01b.length > 0 && file01c.length > 0"
        v-on:reset="reset('01')"
        v-on:toggle="showfile01story = !showfile01story">
        <transition name="slide">
          <section v-if="showfile01story">
            After her one-year anniversary, Char traveled to Axis for a short break. Deciding to further her education, she registered at the University of <strong>{{ file01a || '_______' }}</strong>. It was at this time that she bought new combat boots that were tested by stepping on <strong>{{ file01b || '_______' }}</strong>. The experience was described as <strong>{{ file01c || '_______' }}</strong> in her recollections.
          </section>
        </transition>

        <section class="mt-10">
          <v-text-field
            label="Food"
            v-model="file01a"
            outlined
          ></v-text-field>
          <v-text-field
            label="Tsunderia Member"
            v-model="file01b"
            outlined
          ></v-text-field>
          <v-text-field
            label="Adjective"
            v-model="file01c"
            outlined
          ></v-text-field>
        </section>
      </File>

      <File 
        number="02"
        top="750px"
        left="580px"
        :complete="file02a.length > 0 && file02b.length > 0 && file02c.length > 0"
        v-on:reset="reset('02')"
        v-on:toggle="showfile02story = !showfile02story">
        <transition name="slide">
          <section v-if="showfile02story">
            Following this period, Char decided to challenge herself further by honing her skills in <strong>{{ file02a || '_______' }}</strong> and watermelon crushing. Like a(n) <strong>{{ file02b || '_______' }}</strong> madman, she squeezed watermelons day in and day out. The results were <strong>{{ file02c || '_______' }}</strong> and resulted in the destructon of many melons.
          </section>
        </transition>

        <section class="mt-10">
          <v-text-field
            label="Activity"
            v-model="file02a"
            outlined
          ></v-text-field>
          <v-text-field
            label="Adjective"
            v-model="file02b"
            outlined
          ></v-text-field>
          <v-text-field
            label="Feeling"
            v-model="file02c"
            outlined
          ></v-text-field>
        </section>
      </File>

      <File 
        number="03"
        top="530px"
        left="460px"
        :complete="file03a.length > 0 && file03b.length > 0 && file03c.length > 0"
        v-on:reset="reset('03')"
        v-on:toggle="showfile03story = !showfile03story">
        <transition name="slide">
          <section v-if="showfile03story">
            Later, she ventured to the mountains by <strong>{{ file03a || '_______' }}</strong>. The journey was long and perilous. In the mountains she encountered all sorts of beasts, including a mythical <strong>{{ file03b || '_______' }}</strong>. It was only through her attempts to build a <strong>{{ file03c || '_______' }}</strong> that she was able to escape, but she had lost a piece of this mobile suit in the experience.
          </section>
        </transition>

        <section class="mt-10">
          <v-text-field
            label="Method of Transportation"
            v-model="file03a"
            outlined
          ></v-text-field>
          <v-text-field
            label="Imaginary Creature"
            v-model="file03b"
            outlined
          ></v-text-field>
          <v-text-field
            label="Type of Gundam or MS"
            v-model="file03c"
            outlined
          ></v-text-field>
        </section>
      </File>

      <File 
        number="04"
        top="480px"
        left="670px"
        :complete="file04a.length > 0 && file04b.length > 0 && file04c.length > 0"
        v-on:reset="reset('04')"
        v-on:toggle="showfile04story = !showfile04story">
        <transition name="slide">
          <section v-if="showfile04story">
            Weary from her travel, Char eventually came back to her home in Tsunderia. However, things were not as she left them. <strong>{{ file04a || '_______' }}</strong>  had invaded during her absence and it was only with the power of <strong>{{ file04b || '_______' }}</strong> that her and her friends were able to ward them. The day of this battle will forever be marked as <strong>{{ file04c || '_______' }}</strong> Wednesday.
          </section>
        </transition>

        <section class="mt-10">
          <v-text-field
            label="Plural Noun"
            v-model="file04a"
            outlined
          ></v-text-field>
          <v-text-field
            label="Noun"
            v-model="file04b"
            outlined
          ></v-text-field>
          <v-text-field
            label="Adjective"
            v-model="file04c"
            outlined
          ></v-text-field>
        </section>
      </File>

      <File 
        number="05"
        top="330px"
        left="500px"
        :complete="file05a.length > 0 && file05b.length > 0 && file05c.length > 0"
        v-on:reset="reset('05')"
        v-on:toggle="showfile05story = !showfile05story">
        <transition name="slide">
          <section v-if="showfile05story">
            Finally, with peace close in vision, Char decided that there was more for her in the world than education. Dropping out of University, she decided to make one final stop at <strong>{{ file05a || '_______' }}</strong> before heading back into space. There she had a fated encounter with <strong>{{ file05b || '_______' }}</strong>. It is said they spent what little time they had together in bliss <strong>{{ file05c || '_______' }}</strong>.
          </section>
        </transition>

        <section class="mt-10">
          <v-text-field
            label="Location"
            v-model="file05a"
            outlined
          ></v-text-field>
          <v-text-field
            label="Vtuber Waifu"
            v-model="file05b"
            outlined
          ></v-text-field>
          <v-text-field
            label="Activity"
            v-model="file05c"
            outlined
          ></v-text-field>
        </section>
      </File>
      
      <File 
        number="06"
        top="140px"
        left="530px"
        :complete="file06a.length > 0 && file06b.length > 0"
        v-on:reset="reset('06')"
        v-on:toggle="showfile06story = !showfile06story">
        <transition name="slide">
          <section v-if="showfile06story">
            And like that... 7 years past. Now she's returned with thighs built like <strong>{{ file06a || '_______' }}</strong> and a new mission. She is going to make the world a <strong>{{ file06b || '_______' }}</strong> place.
          </section>
        </transition>

        <section class="mt-10">
          <v-text-field
            label="Noun"
            v-model="file06a"
            outlined
          ></v-text-field>
          <v-text-field
            label="Adjective"
            v-model="file06b"
            outlined
          ></v-text-field>
        </section>
      </File>

      <!-- LOG -->
      <v-dialog
        v-model="log"
        hide-overlay
        width="1200">
        <v-card
          width="1200"
          height="1000">

          <v-btn
            @click="log = false"
            class="x-btn" 
            icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <v-card-title class="text-h4">
            LOG
          </v-card-title>

          <v-card-text>
            <section v-if="file01a.length > 0 && file01b.length > 0 && file01c.length > 0" class="ma-8">
              After her one-year anniversary, Char traveled to Axis for a short break. Deciding to further her education, she registered at the University of <strong>{{ file01a }}</strong>. It was at this time that she bought new combat boots that were tested by stepping on <strong>{{ file01b }}</strong>. The experience was described as <strong>{{ file01c }}</strong> in her recollections.
            </section>

            <section v-if="file02a.length > 0 && file02b.length > 0 && file02c.length > 0" class="ma-8">
              Following this period, Char decided to challenge herself further by honing her skills in <strong>{{ file02a }}</strong> and watermelon crushing. Like a(n) <strong>{{ file02b }}</strong> madman, she squeezed watermelons day in and day out. The results were <strong>{{ file02c }}</strong> and resulted in the destructon of many melons.
            </section>

            <section v-if="file03a.length > 0 && file03b.length > 0 && file03c.length > 0" class="ma-8">
              Later, she ventured to the mountains by <strong>{{ file03a }}</strong>. The journey was long and perilous. In the mountains she encountered all sorts of beasts, including a mythical <strong>{{ file03b }}</strong>. It was only through her attempts to build a <strong>{{ file03c }}</strong> that she was able to escape, but she had lost a piece of this mobile suit in the experience.
            </section>

            <section v-if="file04a.length > 0 && file04b.length > 0 && file04c.length > 0" class="ma-8">
              Weary from her travel, Char eventually came back to her home in Tsunderia. However, things were not as she left them. <strong>{{ file04a }}</strong>  had invaded during her absence and it was only with the power of <strong>{{ file04b }}</strong> that her and her friends were able to ward them. The day of this battle will forever be marked as <strong>{{ file04c }}</strong> Wednesday.
            </section>

            <section v-if="file05a.length > 0 && file05b.length > 0 && file05c.length > 0" class="ma-8">
              Finally, with peace close in vision, Char decided that there was more for her in the world than education. Dropping out of University, she decided to make one final stop at <strong>{{ file05a }}</strong> before heading back into space. There she had a fated encounter with <strong>{{ file05b }}</strong>. It is said they spent what little time they had together in bliss <strong>{{ file05c }}</strong>.
            </section>

            <section v-if="file06a.length > 0 && file06b.length > 0" class="ma-8">
              And like that... 7 years past. Now she's returned with thighs built like <strong>{{ file06a }}</strong> and a new mission. She is going to make the world a <strong>{{ file06b }}</strong> place.
            </section>

          </v-card-text>
        </v-card>

      </v-dialog>

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
          @click="log = true"
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
      log: false,

      // SHOW STORY (NOTE: THIS IS HORRIBLE DON'T DO THIS)
      showfile01story: false,
      showfile02story: false,
      showfile03story: false,
      showfile04story: false,
      showfile05story: false,
      showfile06story: false,

      // FILES
      file01a: '',
      file01b: '',
      file01c: '',
      file02a: '',
      file02b: '',
      file02c: '',
      file03a: '',
      file03b: '',
      file03c: '',
      file04a: '',
      file04b: '',
      file04c: '',
      file05a: '',
      file05b: '',
      file05c: '',
      file06a: '',
      file06b: '',
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
        case '02':
          this.file02a = '';
          this.file02b = '';
          this.file02c = '';
          break;
        case '03':
          this.file03a = '';
          this.file03b = '';
          this.file03c = '';
          break;
        case '04':
          this.file04a = '';
          this.file04b = '';
          this.file04c = '';
          break;
        case '05':
          this.file05a = '';
          this.file05b = '';
          this.file05c = '';
          break;
        case '06':
          this.file06a = '';
          this.file06b = '';
          break;
        default:
          // THIS IS ALSO THE WORST THING EVER PLEASE DON'T DO THIS
          this.file01a = '';
          this.file01b = '';
          this.file01c = '';
          this.file02a = '';
          this.file02b = '';
          this.file02c = '';
          this.file03a = '';
          this.file03b = '';
          this.file03c = '';
          this.file04a = '';
          this.file04b = '';
          this.file04c = '';
          this.file05a = '';
          this.file05b = '';
          this.file05c = '';
          this.file06a = '';
          this.file06b = '';
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

  .v-card {
    position: absolute !important;
    left: 60px;
    top: 60px;
  }

  .v-card__text {
    font-size: 1.5rem !important;
  }

  b, strong {
    color: white;
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