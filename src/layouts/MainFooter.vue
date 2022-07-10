<template lang="html">
<div class='footer bg-grey-2'>

  <Container class="inner">
      <div class="q-mb-md">
          <div class="text-h2">
              InsectoSun
              <span class="text-green-6 q-px-md">|</span>
              <small class="text-grey-6">professioneler Insekten- und Sonnenschutz</small>
          </div>
          <q-space style="height: 30px" />
          <q-btn color="red" size="lg" href="tel:08988562848">
              Kostenlose Beratung <br v-if="!$q.screen.gt.md">089 / 88 56 28 48
          </q-btn>
      </div>
      <q-space style="height: 30px" />

      <div class='row q-col-gutter-md'>
          <div class='col-xs-12 col-sm-6 col-md-3 col-lg-2'>
              Sascha Smajlovic <br>
              Treffauerstr. 47 <br>
              81373 München <br>
              <q-space style="height: 30px" />
          </div>

          <div class='col-xs-12 col-sm-6 col-md-3 col-lg-2'>
              Tel: 089 / 88 56 28 48 <br>
              Fax: 089 / 88 56 28 49 <br>
              Mobil: 0176 / 77777756 <br>
              <q-space style="height: 30px" />
          </div>

          <div class='col-xs-12 col-sm-6 col-md-3 col-lg-2'>
              <q-btn unelevated flat no-wrap class="full-width" align="left" label="E-Mail: info@insectosun.de" href="mailto:info@insectosun.de?subject=InsectoSun%20Kontakt" />
              <q-btn unelevated flat no-wrap class="full-width" align="left" label="Web: www.insectosun.de" href="https://insectosun.de" />
              <q-space style="height: 30px" />
          </div>

          <div class='col-xs-12 col-sm-6 col-md-3 col-lg-2'>
              <q-btn unelevated flat no-wrap class="full-width" align="left" label="Datenschutz" :to="{ name: 'imprint', hash: '#datenschutz' }" />
              <q-btn unelevated flat no-wrap class="full-width" align="left" label="Impressum" :to="{ name: 'imprint' }" />
              <q-space style="height: 30px" />
          </div>

          <div class='col-xs-12 col-md-12 col-lg-3'>
              <div class='social_media text-center'>
                  <q-btn flat size="md" icon="fab fa-instagram" label="insectosun auf Instagram" @click="$root.open('https://www.instagram.com/insectosun/')" /> <br>
                  <q-btn flat size="md" icon="fab fa-facebook" label="InsectoSun auf Facebook" @click="$root.open('https://www.facebook.com/InsectoSun')" /> <br>
              </div>
          </div>
      </div>

  </Container>

  <div class="legal_wrapper">
      <Container class="legal_notice">
          &copy; 2022 InsectoSun | Alle Rechte vorbehalten.
      </Container>
  </div>

</div>
</template>

<script>
export default {
    name: 'MainFooter',

    data(){ return {

    }},

    methods: {

    }
}
</script>

<style lang="scss" scoped>
.footer {
    position: relative; z-index: 5;
    display: block;
    // background: #eee;
    // color: white;

    .inner {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    &.bg-black {
      background: rgba(10,10,10,.9) !important;
    }
}

.legal_wrapper {
    padding: 5px 0px;
    background: #444;
    color: #fff;

    .legal_notice {
        font-size: 12px;
    }
}

</style>
