<template lang="html">
  <div class='row q-col-gutter-lg q-mb-md'>
      <div class='col-xs-12 col-md-6'>

          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            class="shadow-10 rounded-borders"
            style="height: 557px"
            v-if="gallery.length"
          >
            <q-carousel-slide v-for="(gallery,i) in gallery" :name="i" :img-src="gallery" />
          </q-carousel>

          <q-img :src="image" class="shadow-10 rounded-borders" v-else />
      </div>
      <div class='col-xs-12 col-md-6'>
          <div class="text-h4 q-mt-none q-mb-md title">
              <div class="font-weight-bold">{{ title }}</div>
          </div>

          <slot />
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProduktInfo',

  props: {
      image: {},
      title: {},
      gallery: { type: Array, default: [] },
  },

  data(){ return {
      slide: 1,
      autoplay: 1600,
  }}
}
</script>

<style lang="css" scoped>
</style>
