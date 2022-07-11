<template lang="html">
  <q-card class="q-pa-md bg-transparent no-shadow">
      <q-tabs v-model="tab" class="bg-green-6- q-mb-md ProductTabs" active-bg-color="grey-4" indicator-color="green-14" align="center">
        <q-tab no-caps class="q-px-lg text-white- bg-transparent" name="info" icon="info" xlabel="Info" />
          <q-tab no-caps class="q-px-lg text-white-" name="elsa" label="Elsa" />
          <q-tab no-caps class="q-px-lg text-white-" name="terresa" label="Terresa" />
          <q-tab no-caps class="q-px-lg text-white-" name="resi" label="ReSi" />
          <q-tab no-caps class="q-px-lg text-white-" name="lisa" label="LiSa" />
      </q-tabs>


      <q-tab-panels v-model="tab" animated class="bg-transparent" style="min-height: 550px">
        <q-tab-panel name="info">
            <ProduktInfo title="Nie mehr Lichtschächte reinigen" image="/img/schacht/IS-Teaser_Insektenschutz-Lichtschacht.jpg.24281721.jpg">
              Perfekte Lichtschacht-abdeckungen.<br>
              <br>
              Hochwertig, extrem belastbar, unverwüstlich, funktionell. <br>
              <br>
              Die filigrane Lösung zur Befestigung auf dem vorhandenen Gitterrost.

              <ul>
                <li>keine Spinnen</li>
                <li>keine Mäuse </li>
                <li>keine Schnecken</li>
                <li>kein Laub</li>
              </ul>
            </ProduktInfo>
        </q-tab-panel>

        <q-tab-panel name="elsa">
            <ProduktInfo title="Elsa" image="/img/schacht/Insektenschutz_LISA_Bauarten_ELSA_D-0017_20.jpg.24279780.jpg">
                Die Flächenbündige Einlege-lösung ohne Stolperkante. <br>
                <br>
                ELSA wird als kompletter Ersatz für Ihren vorhandenen Gitterrost in den Lichtschacht montiert.
                Bei dem begehbaren und extrem witterungsbeständigen Modell aus Edelstahl oder Streckmetall ist
                der Gitterrost integriert. <br>
                <br>
                ELSA ist hoch belastbar, flächenbündig und ebenerdig. Optional erhalten Sie eine integrierte
                Einbruchsicherung und gleichzeitiger Schnellentriegelung von innen für Fluchtwege. Durch den
                Einsatz von besonders hochwertigem Edelstahl-Gewebe, extrem stabilen Aluminiumprofilen und
                einem glasfaserverstärkten Gitterrost hält ELSA selbst extremsten Witterungsbedingungen stand. <br>
                <br>
                Zusätzlichen Schutz gegen Einbruch und Diebstahl bieten Sicherungskette und S-Haken.
            </ProduktInfo>
        </q-tab-panel>

        <q-tab-panel name="terresa">
            <ProduktInfo title="TERRESA" image="/img/schacht/Insektenschutz_LISA_Bauarten_Terresa_D-0008-20.jpg.24279781.jpg">
                Die eleganten Holzterassen-einleger. <br>
                <br>
                Das Sondermodell TERRESA wird hauptsächlich im Holzterrassenbereich eingesetzt und ermöglicht
                einen schwellenfreien Zugang ins Haus. Der flache, rutschhemmende und elegante Einleger aus
                Edelstahlgewebe oder Aluminium-Streckmetall dient gleichzeitig als Wasserablauf im Terrassenbereich.
                So lassen sich auch überbaute Lichtschächte hell und sauber halten. <br>
                <br>
                TERRESA passt mit nur 20,5 mm Aufbauhöhe perfekt in fast alle gebräuchlichen Terrassendielen und
                garantiert Ihnen so auch auf Ihrer Terrasse eine perfekte Lichtschachtabdeckung ohne Stolpergefahr.
                TERRESA kann als Alternative zur ELSA auch als Abdeckung auf "normalen" Lichtschächten und Terrassen
                eingesetzt werden. <br>
                <br>
                Der elegante Holzterrasseneinleger lässt das Wasser sofort ins Kiesbett unter der Terrasse ablaufen.
            </ProduktInfo>
        </q-tab-panel>

        <q-tab-panel name="resi">
            <ProduktInfo title="ReSi" image="/img/schacht/Insektenschutz_LISA_Bauarten_RESI_D-0023-20.jpg.24279782.jpg">
                RESi steht für regensicher. <br>
                <br>
                RESi bietet Regen- und Insektenschutz mit gleichzeitiger Belüftung. Das transparente, trittsichere
                und bruchfeste Polycarbonat ist für eine lückenlose und stolperfreie Konstruktion mit dem Rost
                verschraubt. <br>
                <br>
                RESi überzeugt als Belüftungselement mit vorgeschriebenem Strömungsquerschnitt und
                einfacher Reinigung durch auswechselbares Edelstahlgewebe. <br>
                <br>
                Sie eignet sich zur lückenlosen Abdeckung
                für alle Lichtschächte aus Kunststoff oder Beton.
            </ProduktInfo>
        </q-tab-panel>

        <q-tab-panel name="lisa">
            <ProduktInfo title="LiSa" image="/img/schacht/Insektenschutz_LISA_Bauarten_RESI_D-0023-20.jpg.24279782.jpg">
                LiSA steht für Lichtschachtabdeckung. <br>
                <br>
                Sie zeichnet sich durch ein elegantes Design und eine sichere Abdichtung aus. Der für Sie maßgefertigte,
                flache Aluminiumrahmen mit perfekter Rundum-Bürstendichtung, feinmaschigem Edelstahlgitter und
                Edelstahlverschraubung deckt den vorhandenen Rost lückenlos ab. <br>
                <br>
                LiSA wird mit wenigen Handgriffen
                einfach auf den vorhandenen Kellerrost montiert. Die stolperfreie Konstruktion durch extrem flache
                Profile ist sehr stabil. Mit Streckmetallgewebe ist LiSA auch als befahrbare Variante auf geeignetem
                Kellerschacht erhältlich. <br>
                <br>
                Das Lüften Ihrer Keller- oder Hobbyräume macht mit einem sauberen Lichtschacht wieder Freude.
            </ProduktInfo>
        </q-tab-panel>
      </q-tab-panels>

  </q-card>
</template>

<script>
export default {
  name: 'SchachtProducts',

  data(){ return {
      tab: 'info'
  }}
}
</script>

<style lang="css" scoped>
</style>
