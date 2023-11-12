<template>
  <v-data-table
    class="ma-2"
    :loading="!initialize"
    loading-text="Data loading..."
    :headers="headers"
    :items="books"
    :search="search"
  ></v-data-table>
</template>

<script>
import booksData from '@/mockData/books.json'

export default {
  props: {
    searchPhrase: {
      type: String,
      default: () => ''
    }
  },

  data () {
    return {
      headers: [
        { text: 'Title', align: 'start', value: 'title' },
        { text: 'Author', sortable: false, value: 'author' },
        { text: 'Year', filterable: false, value: 'year' }
      ],
      search: ''
    }
  },

  watch: {
    // Watch to see if the search phrase has been changed
    searchPhrase (newValue) {
      this.search = newValue
    }
  },

  computed: {
    // Detect if the books data has been fetched form the JSON dummy data
    initialize () {
      return this.books
    },

    // Get the books data form the JSON dummy data
    books () {
      return booksData.books
    }
  }
}
</script>

<style scoped>

</style>
