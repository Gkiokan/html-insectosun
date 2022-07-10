<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  methods: {
      open(url){
          if(url)
            window.open(url)
      }
  }
})
</script>
