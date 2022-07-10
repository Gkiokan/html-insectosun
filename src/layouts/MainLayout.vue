<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar class="bg-transparent text-grey-9">
        <q-btn flat dense icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          InsectoSun
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-md">
          <q-btn unelevated class="q-py-md" color="green-8" label="Insektenschutz" />
          <q-btn unelevated class="q-py-md" text-color="grey-9" label="Sonnenschutz" />
          <q-btn unelevated class="q-py-md" text-color="grey-9" label="Kontakt" />
        </div>

        <q-space />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :show-if-above="false"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg text-grey-9">
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
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
