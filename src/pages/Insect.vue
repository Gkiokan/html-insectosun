<template lang="html">
<q-page>

    <TopHeader title="Insektenschutz" image="/img/insect/Insektenschutz_Türen_Header_2004.jpg.24293527.jpg" />

    <div class='q-pa-md'>
        <Container>

            <q-card class="q-pa-md bg-transparent no-shadow">
                <q-img src="/img/transpatec/Neher_Logo_Transpatec_rgb.png.webp" style="width: 200px" class="q-mb-md" />

                <div class='row q-col-gutter-lg'>
                    <div class='col-xs-12 col-md-4'>
                        <q-img src="/img/transpatec/Insektenschutz_Gewebearten_Ganz_ihr_Geschmack.jpg.24273643.jpg" class="shadow-10 rounded-borders" />
                    </div>
                    <div class='col-xs-12 col-md-8'>
                        <div class="text-h4 q-mt-none q-mb-md title">
                          <div class="text-weight-bold">Transpatec </div>
                          <div>Der fast unsichtbare Insektenschutz</div>
                        </div>
                        <div class="">
                            Transpatec hat gegenüber konventionellen Geweben entscheidende Vorteile: <br>
                            <div style="height: 10px" />
                            Mehr <span class="highlight">Transparenz</span> und <span class="highlight">Lichtdurchlässigkeit</span>, <br>
                            eine wesentlich <span class="highlight">bessere Luftdurchlässigkeit</span> <br>
                            sowie eine <span class="highlight">hohe Reiß- und Durchstoßfestigkeit</span>.

                            <ul>
                              <li>Fast unsichtbar durch die Verwendung des neuen Hightech-Fadens mit FX6-Faktor</li>
                              <li>Luftdurchlass ca. 140% besser als bei Standardgewebe </li>
                              <li>Robust und reißfest dank höherer Maschenfestigkeit </li>
                              <li>Langlebig durch verbesserte Witterungsbeständigkeit </li>
                              <li>PVC-frei </li>
                              <li>Qualität, hergestellt in Deutschland </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </q-card>
            <q-space style="height: 100px" />

            <div class="q-mt-none q-mb-md text-center text-h4 font-weight-light">Lösungen für Türen </div>
            <DoorProducts />
            <q-space style="height: 100px" />


            <div class="q-mt-none q-mb-md text-center text-h4 font-weight-light">Lösungen für Fenster </div>
            <WindowProducts />
            <q-space style="height: 100px" />


            <div class="q-mt-none q-mb-md text-center text-h4 font-weight-light">Lösungen für Lichtschächte </div>
            <SchachtProducts />
            <q-space style="height: 50px" />


        </Container>
    </div>

    <q-space style="height: 100px" />
</q-page>
</template>

<script>
export default {
    data(){ return {
        tab: '',
    }}
}
</script>

<style lang="scss" scoped>

</style>
