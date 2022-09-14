<template>
  <div>
    <ItemForm />
    <ItemList />
  </div>
</template>

<script>
import ItemForm from '@/components/ItemForm'
import ItemList from '@/components/ItemList'

export default {
  name: 'ItemBoard',
  components: {
    ItemForm,
    ItemList
  }
}
</script>
