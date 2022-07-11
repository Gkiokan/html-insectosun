<template lang="html">
  <q-page padding>

      <Container>
          <h1 class="title">Kontakt</h1>

          Rufen Sie uns einfach an und vereinbaren Sie erhalten eine kostenlose Beratung <br>
          <br>

          <q-btn outline color="green-6" size="md" href="tel:08988562848">
              Kostenlose Beratung <br v-if="!$q.screen.gt.md">089 / 88 56 28 48
          </q-btn>

      </Container>
</q-page>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
