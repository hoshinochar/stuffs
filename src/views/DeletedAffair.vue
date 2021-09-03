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
        left="500px">
        unga bunga
      </File>


      <!-- CONTROLS -->
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