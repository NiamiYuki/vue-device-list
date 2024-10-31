<script setup lang="ts">
import NodeComponent from './NodeComponent.vue'
import { type Node } from '@/stores/Models'
import { ref } from 'vue'

const props = defineProps<{
  nodes: Node[]
}>()
const nodesList = ref(props.nodes)
function remove(node: Node) {
  nodesList.value.splice(nodesList.value.indexOf(node), 1)
}

function updateNodeName(node: Node, newNodeName: string) {
  node.nodeName = newNodeName
}

const isAdding = ref(false)
const editingValue = ref('')

function addingNode(value: boolean) {
  isAdding.value = value
}
function saveAdding(nodeName: string) {
  const node = { nodeName: nodeName }
  nodesList.value.push(node)
  editingValue.value = ''
  isAdding.value = false
}
</script>

<template>
  <div class="card">
    <div
      v-for="node in nodesList"
      v-bind:key="node.nodeName"
      class="field has-addons"
    >
      <NodeComponent
        v-bind:node="node"
        @change-node-name="newNodeName => updateNodeName(node, newNodeName)"
      />
      <button
        class="button is-danger is-rounded is-small"
        @click="remove(node)"
      >
        X
      </button>
    </div>
    <div v-if="isAdding" class="field has-addons">
      <div class="control">
        <input
          class="input"
          v-model="editingValue"
          placeholder="Введите название узла"
        />
      </div>
      <div class="control">
        <button @click="saveAdding(editingValue)" class="button">
          Сохранить
        </button>
      </div>
    </div>
    <div v-else>
      <button class="button" @click="addingNode(true)">Добавить узел</button>
    </div>
  </div>
</template>
