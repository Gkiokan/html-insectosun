<template>
  <q-item
    clickable
    tag="a"
    active-class="bg-green-6 text-white"
    exact
    :to="link"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EssentialLink',
    props: {
        title: {
          type: String,
          required: true
        },

        caption: {
          type: String,
          default: ''
        },

        link: {
          type: Object,
          default: {}
        },

        icon: {
          type: String,
          default: ''
        }
    },

    methods: {
        isActive(link){
            // todo: active state for deep links
            return this.$route.name
        }
    }
})
</script>
