<script setup lang="ts">
import { type Node } from '@/stores/Models'
import { ref } from 'vue'

const props = defineProps<{
  node: Node
}>()

const emit = defineEmits<{
  (e: 'changeNodeName', value: string): void
}>()

const isEdiiting = ref(false)
const nodeName = ref(props.node.nodeName)

function editingNode(value: boolean) {
  isEdiiting.value = value
}
function saveEditing() {
  isEdiiting.value = false
  emit('changeNodeName', nodeName.value)
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        <div v-if="!isEdiiting" class="card-header-title">
          {{ props.node.nodeName }}
        </div>
        <button class="button" @click="editingNode(true)">Редактировать</button>
        <div v-if="isEdiiting" class="field has-addons">
          <div class="control">
            <input class="input" v-model="nodeName" />
          </div>
          <div class="control">
            <button @click="saveEditing()" class="button">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
