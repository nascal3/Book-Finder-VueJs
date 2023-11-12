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
          prepend-inner-icon="mdi-magnify"
          placeholder="Search by Author / Title"
          dense
          solo
          hide-details
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
export default {
  name: 'App',

  data: () => ({
    currentYear: new Date().getFullYear()
  })
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
