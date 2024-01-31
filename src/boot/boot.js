import cookieconsent from 'vue-cookieconsent-component'

export default async ( { app, store, router, Vue } ) => {
    app.component('cookie-consent', cookieconsent)    
}