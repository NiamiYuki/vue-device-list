<script setup lang="ts">
import NodesList from './NodesList.vue'
import { type Device } from '@/stores/Models'
import { ref } from 'vue'

const props = defineProps<{
  device: Device
}>()

const emit = defineEmits<{
  (e: 'changeDeviceName', value: string): void
}>()

const isEdiiting = ref(false)
const deviceName = ref(props.device.deviceName)

function editingDevice(value: boolean) {
  isEdiiting.value = value
}
function saveEditing() {
  isEdiiting.value = false
  emit('changeDeviceName', deviceName.value)
}
</script>

<template>
  <div class="card">
    <div class="card-header device-title">
      <div v-if="!isEdiiting" class="card-header-title">
        {{ props.device.deviceName }}
      </div>
      <button
        class="button is-primary is-outlined is-rounded is-small"
        @click="editingDevice(true)"
      >
        ✎
      </button>
      <div v-if="isEdiiting" class="field has-addons">
        <div class="control">
          <input class="input" v-model="deviceName" />
        </div>
        <div class="control">
          <button @click="saveEditing()" class="button">Сохранить</button>
        </div>
      </div>
    </div>
    <div class="card-content">
      узлы: <NodesList v-bind:nodes="device.nodes" />
    </div>
  </div>
</template>

<style scoped>
.device-title {
  display: flex;
  align-items: center;
}
</style>
