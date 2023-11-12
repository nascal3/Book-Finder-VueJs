<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card width="60%" class="pa-2 mt-2" outlined>
          <data-table :search-phrase="search" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataTable from '@/components/DataTable'
import eventBus from '@/main'

export default {
  components: {
    DataTable
  },

  data: () => ({
    search: ''
  }),

  mounted () {
    // Listen to event of 'phrase-changed' when triggered
    eventBus.$on('phrase-changed', (data) => {
      this.search = data
    })
  }
}
</script>
