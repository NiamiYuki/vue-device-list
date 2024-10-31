<script setup lang="ts">
import { ref } from 'vue'
import DeviceComponent from './DeviceComponent.vue'
import { type Device } from '@/stores/Models'

const deviceList = ref([
  { deviceName: '1', nodes: [] },
  { deviceName: '2', nodes: [{ nodeName: '2.1' }, { nodeName: '2.2' }] },
  { deviceName: '3', nodes: [] },
] as Device[])

function remove(device: Device) {
  deviceList.value.splice(deviceList.value.indexOf(device), 1)
}

function updateDeviceName(device: Device, newDeviceName: string) {
  device.deviceName = newDeviceName
}

const isAdding = ref(false)
const editingValue = ref('')

function addingDevice(value: boolean) {
  isAdding.value = value
}
function saveAdding(deviceName: string) {
  const device = { deviceName: deviceName, nodes: [] }
  deviceList.value.push(device)
  editingValue.value = ''
  isAdding.value = false
}
</script>

<template>
  <div
    v-for="device in deviceList"
    v-bind:key="device.deviceName"
    class="field has-addons"
  >
    <DeviceComponent
      v-bind:device="device"
      @change-device-name="
        newDeviceName => updateDeviceName(device, newDeviceName)
      "
    />

    <button
      class="button is-danger is-rounded is-small"
      @click="remove(device)"
    >
      X
    </button>
  </div>
  <div v-if="isAdding" class="field has-addons">
    <div class="control">
      <input
        class="input"
        v-model="editingValue"
        placeholder="Введите название девайса"
      />
    </div>
    <div class="control">
      <button @click="saveAdding(editingValue)" class="button">
        Сохранить
      </button>
    </div>
  </div>
  <div v-else>
    <button class="button" @click="addingDevice(true)">Добавить девайс</button>
  </div>
</template>
