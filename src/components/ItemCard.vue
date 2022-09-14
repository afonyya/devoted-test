<template>
  <v-card class="mt-2">
    <v-card-title>Item ID: {{ item.id }}</v-card-title>
    <v-card-text>
      <v-list
        v-for="(content, index) in item.data"
        :key="index"
      >
        <v-list-item>{{ content }}</v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="removeItem">Remove</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemCard',
  props: {
    item: Object
  },
  methods: {
    ...mapActions(['deleteItem']),
    removeItem() {
      this.deleteItem(this.item.id)
    }
  }
}
</script>
