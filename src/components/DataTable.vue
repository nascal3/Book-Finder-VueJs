<template>
  <v-data-table
    class="ma-2"
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
        {
          text: 'Title',
          align: 'start',
          value: 'title'
        },
        { text: 'Author', sortable: false, value: 'author' },
        { text: 'Year', filterable: false, value: 'year' }
      ],
      search: ''
    }
  },

  watch: {
    searchPhrase (newValue) {
      this.search = newValue
    }
  },

  computed: {
    books () {
      return booksData.books
    }
  }
}
</script>

<style scoped>

</style>
