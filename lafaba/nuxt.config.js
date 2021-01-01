export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lafaba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
   
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@fortawesome/fontawesome-free/js/all.js',
    "@/assets/css/animate.min.css",
    "@/assets/css/awesome-bootstrap-checkbox.css",
    "@/assets/css/bootstrap.css",
    "@/assets/css/btn.css",
    "@/assets/css/font-awesome.css",
    "@/assets/css/font-google-oswald.css",
    "@/assets/css/font-google-sans-pro.css",
    "@/assets/css/jquery.fancybox.min.css",
    "@/assets/css/jquery.mCustomScrollbar.css",
    "@/assets/css/owl.carousel.css",
    "@/assets/css/owl.theme.css",
    "@/assets/css/pace-theme-flash.tmpl.css",
    "@/assets/css/style-assets.css",
    "@/assets/css/style-helper.css",
    "@/assets/css/style-tr-color.css",
    "@/assets/css/style.css",
    "@/assets/css/theme.css"







  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config:{
          apiKey: "AIzaSyANExIUoBuuQ7AWAh_eqi1gukEzQBT6Y9k",
          authDomain: "lafaba-web-proje.firebaseapp.com",
          databaseURL: "https://lafaba-web-proje.firebaseio.com/",
          projectId: "lafaba-web-proje",
          storageBucket: "lafaba-web-proje.appspot.com",
          messagingSenderId: "146144295313",
          appId: "1:146144295313:web:83041763404f001fc74230",
          measurementId: "G-WZN8ZQS954"
        },
        services: {
          firestore: true,
          auth: true
        }

      },
      
      
    ]


  



  ],


  
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}


