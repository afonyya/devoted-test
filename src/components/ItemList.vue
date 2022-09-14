<template>
  <div>
    <template v-if="itemList.length">
      <ItemCard
        v-for="item in itemList"
        :key="item.id"
        :item="item"
      />
    </template>
    <p
      v-else
      class="headline text-center"
    >
      No items
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemCard from '@/components/ItemCard'

export default {
  name: 'ItemList',
  components: {
    ItemCard
  },
  computed: {
    ...mapGetters(['itemList'])
  }
}
</script>
