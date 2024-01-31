<template>
    <router-view />
    <vue-cookie-comply
        headerTitle="Datenschutz Hinweise"
        headerDescription="Wir benutzen einige essenzielle Speicher Technicken um die Funktionalität der Webseite zu gewährleisten."
        preferencesLabel="Mehr Infos"
        acceptAllLabel="Ok, verstanden!"
        :preferences="$root.preferences"
        ref="cc"
        @on-accept-all-cookies="$root.onAccept"
        @on-save-cookie-preferences="$root.onSavePreferences">       

        <template v-slot:modal-header>
          <div class="q-mt-lg q-mb-md text-h5">Datenschutz Einstellungen</div>
        </template>

        <template v-slot:modal-body="{ preference, index }">
            <div class="q-my-md">
              <div class="text-bold">{{ preference.title }}</div>
              <p class="q-ma-none">{{ preference.description }}</p>
            </div>
        </template>

        <template v-slot:modal-footer>
          <footer>
              <div class="flex justify-between">
                  <q-btn unelevated color="grey-8" no-caps label="Datenschutz Infromationen" @click="() => { 
                        this.closeCC(); 
                        this.$router.push({ name: 'imprint', hash: '#datenschutz' }); 
                      }" />
                  <q-btn unelevated color="green" no-caps label="OK" @click="closeCC" />
              </div>
          </footer>
        </template>
    </vue-cookie-comply>    
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  mounted(){
    this.init()
  },

  data(){ return {
      preferences: [
        {
          title: 'InsectoSun essential',
          description: 'Ausführung von Javascript für das dynamische Rendering von der Webseite.',
          items: [{ label: 'Active', value: 'performance', isRequired: true }],
        },
        {
          title: 'Vimeo',
          description: 'Abspielen von Videos über embedded Videos. Vimeo setzt technische Cookies, aber kein Tracking.',
          items: [{ label: 'Active', value: 'performance', isRequired: true }],
        },        
      ],
  }},

  methods: {
      open(url){
          if(url)
            window.open(url)
      },

      init(){

      },

      onAccept(){

      },

      onSavePreferences(){

      },

      openCC(){
          this.$refs.cc.showCookieComply = true;
          this.$refs.cc.isModalOpen = true;
      },

      closeCC(){
          this.$refs.cc.showCookieComply = false;
          this.$refs.cc.isModalOpen = false;
      }

  }
})
</script>
