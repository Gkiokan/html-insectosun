<template lang="html">
  <q-card class="q-pa-md bg-transparent no-shadow">
      <q-tabs v-model="tab" class="bg-green-6- q-mb-md ProductTabs" active-bg-color="grey-4" indicator-color="green-14" align="center">
          <q-tab no-caps class="q-px-lg text-white-" name="dreh" label="Drehtüre" />
          <q-tab no-caps class="q-px-lg text-white-" name="pendel" label="Pendeltüre" />
          <q-tab no-caps class="q-px-lg text-white-" name="schieb" label="Schiebeanlage" />
      </q-tabs>


      <q-tab-panels v-model="tab" animated class="bg-transparent" style="min-height: 550px">
        <q-tab-panel name="dreh">
            <ProduktInfo title="Klassisch - Die Drehtüre" image="/img/insect/erfal_Insektenschutz_Turen_Bauarten_Drehrahmen_R-0036.jpg.24280175.jpg">
                Perfekt angepasst an Ihre Balkon- oder Terassentüre. <br>
                Nach außen oder innen öffnend, mit Sprosse und Trittschutz-blech. <br>
                <br>
                Als langlebiger und robuster Insektenschutz für Balkon- und Terrassentüren eigenen sich hervorragend
                die Drehrahmen. Dies wirken wie eine zweite fast unsichtbare Tür.
                Die platzsparenden Profile können auch ohne Bohren oder Schrauben an
                Aluminium-, Kunststoff- und Holztüren montiert werden. <br>
                <br>
                Bedienkomfort bringen ergonomische Griffe, die Magnetband- Verschlussleiste
                sowie das Trittblech zur sicheren Fußbedienung ohne freie Hand.
                Bürstendichtungen verschließen auch unebenen Boden gegen kleinste Krabbeltiere.
            </ProduktInfo>
        </q-tab-panel>

        <q-tab-panel name="pendel">
            <ProduktInfo title="Flexibel - Die Pendeltüre" image="/img/insect/erfal_Insektenschutz_Turen_Penselturen_R-206_.jpg.24280177.jpg">
                Ein-, zwei oder mehrflügelig; mit und ohne Montagerahmen. <br>
                Benötigt keinen Schwenkbereich.<br>
                <br>
                Eine komfortable Alternative zu den Drehrahmentüren bilden die Insektenschutz-Pendeltüren.
                Auch ohne freie Hand lassen sie sich kinderleicht durch sanften Druck in beide Richtungen bis zu 120
                Grad weit öffnen. Das sichere Schließen der Pendeltür wird durch gegenläufige Drehstabfedern und im
                Profil versteckte Blockmagneten erreicht. Die leise selbstschließende Anlage kann optional auch mit
                einer Verriegelung von innen, von außen oder beidseitig ausgestattet werden. <br>
                <br>
                Pendeltüren lassen sich schnell und einfach ohne fachmännische Unterstützung aushängen.
            </ProduktInfo>
        </q-tab-panel>

        <q-tab-panel name="schieb">
            <ProduktInfo title="Elegant - Die Schiebeanlage" image="/img/insect/erfal_Insektenschutz_Turen_Bauarten_Schiebeanlagen_R-0001.jpg.24280176.jpg">
                Selbständiges, schnelles und geräuschloses Schließen. <br>
                Nach innen und außen öffnend. <br>
                <br>
                Insektenschutz-Schiebeanlagen eignen sich hervorragend als Ergänzung vorhandener Schiebetüren und anderen
                großen Öffnungen von bis zu 3 x 3,5 Metern. Durch die platzsparende Schiebetechnik bleibt der gesamte
                Aufenthaltsbereich nutzbar. Die ein- bis sechsflügeligen Anlagen sind mit einer kinderfreundlichen
                durchgehenden Griffleiste ausgestattet. Optional ist eine Fußmulde zur Freihandbedienung integrierbar.
                Mittels Aufklebern oder Sprossen wird ein Durchlaufen verhindert. <br>
                <br>
                Die Qualität und Langlebigkeit der Schiebeanlagen zeichnet sich durch die leisen Laufrollen
                sowie durch sanftes Abbremsen und sicheres Arretieren aus. Zudem sind die robusten Anlagen bei Bedarf
                äußerst einfach ein- und auszuhängen.
            </ProduktInfo>
        </q-tab-panel>
      </q-tab-panels>

  </q-card>
</template>

<script>
export default {
  name: 'DoorProducts',

  data(){ return {
      tab: 'dreh'
  }}
}
</script>

<style lang="css" scoped>
</style>
