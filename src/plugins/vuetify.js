import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0d6efd',
        secondary: '#6c757d'
      },
      dark: {
        primary: '#0d6efd',
        secondary: '#6c757d'
      }
    }
  }
})
