<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
// import CookieConsent from 'cookie-consent-js/src/cookie-consent.js'

export default defineComponent({
  name: 'App',

  mounted(){
    this.init()
  },

  methods: {
      open(url){
          if(url)
            window.open(url)
      },

      init(){
          // console.log(CookieConsent)              
      },
  }
})
</script>
