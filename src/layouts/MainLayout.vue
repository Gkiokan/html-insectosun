<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar class="bg-transparent text-grey-9">
        <q-btn flat dense icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          InsectoSun
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-md" v-if="false">
            <q-btn unelevated exact class="q-py-md" color="green-8" label="Insektenschutz" :to="{ name: 'home' }" />
            <q-btn unelevated class="q-py-md" text-color="grey-9" label="Sonnenschutz" :to="{ name: 'sun' }" />
            <q-btn unelevated class="q-py-md" text-color="grey-9" label="Kontakt" />
        </div>

        <div class="q-gutter-md">
            <q-btn unelevated  class="q-py-md" v-for="(item,i) in links" :key="'link_'+i"
              :label="item.title" :to="item.link" :class="isCurrentRoute(item.link) ? 'bg-green-6 text-white' : 'text-grey-9'"
            />

        </div>

        <q-space />

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" class="text-grey-9" :show-if-above="false" bordered>
        <q-list>
            <q-item-label header> InsectoSun </q-item-label>
            <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>

        <q-separator inset />

        <q-list>
            <EssentialLink v-for="link in supportLinks" :key="link.title" v-bind="link" />
        </q-list>

        <q-separator inset />

        <div class="q-mt-md text-center">
          <q-btn color="red" tag="a" href="tel:08988562848">
              Kostenlose Beratung <br>
              089 / 88 56 28 48
          </q-btn>
        </div>

    </q-drawer>

    <q-page-container class="bg text-grey-9">
        <router-view />
        <MainFooter />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import MainFooter from './MainFooter'

const linksList = [
  {
    title: 'Insektenschutz',
    link: { name: 'home' }
  },
  {
    title: 'Sonnenschutz',
    link: { name: 'sun' }
  },
  {
    title: 'Kontakt',
    link: { name: 'contact' }
  },
]

const supportLinks = [
  {
    title: 'Impressum',
    link: { name: 'imprint' }
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    MainFooter,
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      links: linksList,
      essentialLinks: linksList,
      supportLinks,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  methods: {
      isCurrentRoute(route){
          if(this.$route.name == route.name)
            return true

          return false
      }
  }
})
</script>

<style lang="scss" scoped>
.q-layout {
    &::before {
      content: '';
      position: absolute; z-index: 1;
      top: 0px; left: 0px; right: 0px; bottom: 0px;
      background: center center no-repeat #fff;
      // background-image: url('/img/bg/bg-hexa.webp'); // nope
      // background-image: url('/img/bg/bg-hexa2.webp');
      background-image: url('/img/bg/bg-squad.webp');
      // background-image: url('/img/bg/bg-wab.webp');
      opacity: .7;
      filter: grayscale(1);
      background-size: cover;
    }

    .q-page {
        position: relative;
        z-index: 2;
    }
}

</style>
