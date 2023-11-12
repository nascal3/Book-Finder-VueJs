<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar
      app
      color="primary"
      height="56"
      dark
    >
      <div class="d-flex align-center">
        <div class="nav-title">Book Finder</div>
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-text-field
          v-model="search"
          @keydown="changedInput"
          @click:clear="clearedInput"
          prepend-inner-icon="mdi-magnify"
          placeholder="Search by Author / Title"
          dense
          solo
          hide-details
          clearable
          light
        ></v-text-field>
      </div>
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <router-view/>
    </v-main>

    <!-- Footer -->
    <footer class="footer d-flex align-center justify-center pa-2">
      <div>Book Finder&copy; {{currentYear}}</div>
    </footer>
  </v-app>
</template>

<script>
import eventBus from '@/main'

export default {
  name: 'App',

  data: () => ({
    search: '',
    currentYear: new Date().getFullYear()
  }),

  methods: {
    // Detect when each keystroke is typed and emit the event
    changedInput () {
      eventBus.$emit('phrase-changed', this.search)
    },

    // Detect when search input is cleared and emit the event
    clearedInput () {
      eventBus.$emit('phrase-changed', '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-title {
    font-size: 20px;
  }
  .footer {
    background-color: #212529;
    color: #FFFFFF;
  }
</style>
