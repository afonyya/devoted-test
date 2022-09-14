<template>
  <v-app>
    <v-main>
      <v-container>
        <AppLoader v-if="isLoadItems" />
        <ItemBoard v-else />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import AppLoader from '@/components/AppLoader'
import ItemBoard from '@/components/ItemBoard'

export default {
  name: 'App',
  components: {
    AppLoader,
    ItemBoard
  },
  data() {
    return {
      isLoadItems: true
    }
  },
  methods: {
    ...mapActions(['getItems'])
  },
  async mounted() {
    await this.getItems()
    this.isLoadItems = false
  }
}
</script>
