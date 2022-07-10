<template lang="html">
  <q-card class="q-pa-md bg-transparent no-shadow">
      <q-tabs v-model="tab" class="bg-green-6- q-mb-md ProductTabs" active-bg-color="grey-4" indicator-color="green-10" align="center">
          <q-tab no-caps class="q-px-lg text-white-" name="spann" label="Spannrahmen" />
          <q-tab no-caps class="q-px-lg text-white-" name="dreh" label="Drehfenster" />
          <q-tab no-caps class="q-px-lg text-white-" name="rollo" label="Rollo" />
      </q-tabs>


      <q-tab-panels v-model="tab" animated class="bg-transparent" style="min-height: 550px">
        <q-tab-panel name="spann">
            <ProduktInfo title="Universell - Der Spannrahmen" image="/img/fenster/erfal_Insektenschutz_Fenster_Bauarten_Spannrahmen.jpg.24280124.jpg">
                Fast unsichtbar, einfach und bequem zu handhaben, für alle Fenster im Haus. <br>
                Egal ob Holz, Kunststoff oder Aluminium. <br>
                <br>
                Egal ob in Holz-, Kunststoff- oder Aluminiumfenstern – Insektenschutzgitter als Spannrahmen
                sitzen dank der über 100 verschiedenen Einbauvarianten perfekt. Die Montage kann ohne Bohren durch
                praktische Einhängewinkel aus Edelstahl erfolgen. <br>
                <br>
                Das schlichte Design fügt sich harmonisch in das Fenster ein und schützt wirksam vor Stechmücken,
                Schnaken und Fliegen. Die rundumlaufenden Bürsten zwischen Fenster und Insektenschutzgitter
                gewährleistet eine insektensichere Abdichtung mit Entwässerungsfunktion.
            </ProduktInfo>
        </q-tab-panel>

        <q-tab-panel name="dreh">
            <ProduktInfo title="Alternativ - Das Drehfenster" image="/img/fenster/Insektenschutz_Fenster_Bauarten_Besonderheiten_Drehrahmen.jpg.24280125.jpg">
                Ohne Aushängen jederzeit nach innen oder außen zu öffnen. <br>
                <br>
                Passgenauer Insektenschutz bei unveränderter Nutzbarkeit der Fenster – das bieten die Drehrahmen von erfal. Die geringe Einbautiefe, die ergonomischen Designgriffe und die Wahl der Öffnungsrichtung nach Innen oder Außen lassen bei gleichzeitiger Funktionalität optisch keine Wünsche offen. Die Montage erfolgt auf dem Blendrahmen, in der Lichte des Falzes oder direkt in der Mauerleibung. Hohe Stabilität und wahlweise Schallreduzierung durch integrierte Bürstendämpfung garantieren die Langlebigkeit des Drehrahmens.
            </ProduktInfo>
        </q-tab-panel>

        <q-tab-panel name="rollo">
            <ProduktInfo title="Innovativ - Das Rollo" :gallery="rolloGallery" image="/img/insect/erfal_Insektenschutz_Türen_Bauarten_Schiebeanlagen_R-0001.jpg.24280176.jpg">
                Perfekt integriert - das Rollo für Fenster und Dachflächenfenster. <br>
                <br>
                Die ideale Lösung für alle Fassadenfenster ist das flexibel einsetzbare Insektenschutzrollo.
                Mal geöffnet, mal geschlossen – immer so, wie Sie es möchten. Einfach herunterziehen und nur
                noch frische Luft darf in Ihr Zimmer. Wird das Rollo nicht benötigt, verschwindet es in der
                dezenten Kassette. <br>
                <br>
                Für Bedien- und Wartungskomfort sorgen die integrierte Bremse, die abnehmbare
                Serviceblende zum Nachjustieren sowie die seitlichen Bürstenführungen gegen das Ausfädeln bei Wind. <br>
                <br>
                Die Rollos sind zur besonders komfortablen Bedienung auch motorbetrieben erhältlich.
            </ProduktInfo>
        </q-tab-panel>
      </q-tab-panels>

  </q-card>
</template>

<script>
export default {
  name: 'WindowProducts',

  data(){ return {
      tab: 'spann',
      rolloGallery: [
        '/img/rollos/erfal_Rollos_bauarteb_besonderheiten_Dachfenster.jpg.24279855.jpg',
        '/img/rollos/erfal_Rollos_bauarten_besonderheiten_flexilibität.jpg.24279856.jpg',
        '/img/rollos/erfal_Rollos_bauarten_besonderheiten_Kindersicherheit.jpg.24279858.jpg',
        '/img/rollos/erfal_Rollos_bauarten_besonderheiten_Massanfertigung.jpg.24279854.jpg',
        '/img/rollos/erfal_Rollos_bauarten_besonderheiten_Rollos_mehr.jpg.24279740.jpg',
        '/img/rollos/erfal_Rollos_bauarten_besonderheiten_Softraise.jpg.24281148.jpg',
        '/img/rollos/erfal_Rollos_ganz_ihr_geschmack_Farben_Muster.jpg.24282146.jpg',
        '/img/rollos/erfal_Rollos_ganz_ihr_geschmack_Transparenzen.jpg.24281876.jpg',
        '/img/rollos/erfal_Rollos_Montagemöglichkeit_Fensterrahmen.jpg.24281867.jpg',
        '/img/rollos/erfal_Rollos_Montagemöglichkeit_vor_Fenster.jpg.24281866.jpg',
      ],
  }}
}
</script>

<style lang="css" scoped>
</style>
