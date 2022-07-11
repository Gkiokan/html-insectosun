<template lang="html">
<q-page>

    <TopHeader title="InsectoSun" image="/img/bg/bg-wab.webp" />

    <div class='q-pa-md'>
        <Container>

            <q-card class="q-pa-md bg-transparent no-shadow">
                <div class="text-h4 text-weight-bold q-mt-none q-mb-md title">
                  <div>Lebensqualität </div>
                  <div>Maßgeschneidert</div>
                </div>

                <q-space style="height: 20px" />

                <div class='row'>
                    <div class='col-xs-12 col-md-5'>
                        Lästige Plagegeister, wie Wespen, Bienen oder Stechmücken rauben Ihnen nachts den Schlaf oder lösen sogar Allergien und Erkrankungen aus...
                        <br><br>
                        Störende Sonneneinstrahlung behindert Sie bei der Arbeit oder erhitzt Ihre Räume zu starkt...
                        <br><br>
                        ...unsere professionellen Lösungen schaffen Abhilfe!
                        <q-space style="height: 50px" />

                        <q-btn flat color="green-6" size="lg" icon="call" label="Kostenlose Beratung" href="tel:08988562848" />
                        <q-space style="height: 30px" />
                        <q-btn flat size="md" icon="fab fa-instagram" label="insectosun auf Instagram" @click="$root.open('https://www.instagram.com/insectosun/')" /> <br>
                        <q-btn flat size="md" icon="fab fa-facebook" label="InsectoSun auf Facebook" @click="$root.open('https://www.facebook.com/InsectoSun')" /> <br>
                    </div>
                    <q-space />
                    <div class='col-xs-12 col-md-4'>
                        <q-img src="/img/transpatec/Neher_Amb_Familie_01_Titel.gif" class="shadow-10 rounded-borders" />
                    </div>
                </div>
            </q-card>
            <q-space style="height: 100px" />

            <div class="row q-col-gutter-lg">
                <div class='col-xs-12 col-md-3'>
                    <div class='text-h5 q-mb-lg bg-green-6 text-white q-pa-md' style="min-height: 64px">Pollenflug 2022 hat bereits begonnen!</div>
                    Frühlingszeit ist Pollenflugzeit! <br>
                    Starten Sie jetzt gelassen in die Heuschnupfen-saison. <br>
                    <br>
                    Gerne beraten wir Sie, wie Sie sich vor Heuschnupfen schützen.
                </div>

                <q-space />

                <div class='col-xs-12 col-md-3'>
                    <div class='text-h5 q-mb-lg bg-green-6 text-white q-pa-md' style="min-height: 64px">Auch in diesem Jahr wieder Mückenplage zu erwarten</div>
                    Schützen Sie sich und Ihre Liebsten am besten noch heute vor der lästigen Plage!<br>
                    <br>
                    Abhilfe schafft unser spezielles Fliegengitter-System.
                </div>

                <q-space />

                <div class='col-xs-12 col-md-3'>
                    <div class='text-h5 q-mb-lg bg-green-6 text-white q-pa-md' style="min-height: 64px">Kostenlose Beratung vor Ort</div>
                    Lassen Sie sich <span class="highlight">kostenlos</span> und völlig <span class="highlight">unverbindlich</span> direkt vor Ort beraten. <br>
                    <br>
                    Ihr kompetenter Fachmann besucht Sie gerne bei Ihnen zu Hause oder Ihrem Gewerbeobjekt.
                </div>
            </div>
            <q-space style="height: 100px" />


            <q-card class='q-pa-lg bg-transparent no-shadow rounded-borders'>
                <div class='row'>
                    <div class="col-xs-12 col-md-4 text-center" v-for="(img,i) in prices" :key="'price_'+i">
                        <div class="q-pa-sm q-mb-lg shadow-price rounded-borders bg-white" style="display: inline-block">
                            <img style="height: 160px;" :src="img" />
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class="col-xs-12 col-md-4 text-center" v-for="(img,i) in prices2" :key="'price_'+i">
                        <div class="q-pa-sm q-mb-lg shadow-price rounded-borders bg-white" style="display: inline-block; min-width: 168px">
                            <img style="height: 160px;" :src="img" />
                        </div>
                    </div>
                </div>
            </q-card>

        </Container>
    </div>

    <q-space style="height: 100px" />
</q-page>
</template>

<script>
export default {
    data(){ return {
        tab: '',

        prices: [
          '/img/transpatec/red-dot-design-award-winner-2011-1.jpg.webp',
          '/img/transpatec/RT_Innovationsaward_Logo_2021_DE_Gewinner_gold.png.webp',
          '/img/transpatec/if_award_2.jpg.webp',
        ],
        prices2: [
          '/img/transpatec/innovationspreis-r-t-2012-2.jpg.webp',
          '/img/transpatec/pxa_bp_de_pos_rgb-web.png.webp',
          '/img/transpatec/innovation-bw-2012.jpg.webp',
        ]
    }}
}
</script>

<style lang="scss" scoped>

</style>
