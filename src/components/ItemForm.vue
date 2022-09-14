<template>
  <v-card
    :loading="isLoad"
    class="mb-4"
  >
    <v-card-title>Add new item</v-card-title>
    <v-card-text>
      <div
        v-for="(content, index) in contentList"
        :key="index"
        class="d-flex align-center"
      >
        <v-text-field
          v-model="contentList[index]"
          label="Content"
        />
        <v-btn
          v-if="contentList.length > 1"
          @click="removeContent(index)"
          :disabled="isLoad"
          icon
          class="ml-2"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        @click="addContent"
        :disabled="isLoad"
        class="flex-grow-1"
      >
        Add content
      </v-btn>
      <v-btn
        @click="saveItem"
        :loading="isLoad"
        class="flex-grow-1"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemForm',
  data() {
    return {
      contentList: [''],
      isLoad: false
    }
  },
  methods: {
    ...mapActions(['postItem']),
    addContent() {
      this.contentList.push('')
    },

    removeContent(index) {
      this.contentList.splice(index, 1)
    },

    async saveItem() {
      this.isLoad = true

      await this.postItem(this.contentList)
      this.contentList = ['']

      this.isLoad = false
    }
  }
}
</script>
