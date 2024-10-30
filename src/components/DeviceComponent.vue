<script setup lang="ts">
import NodesList from './NodesList.vue'

const props = defineProps(['name', 'nodes']) as {
  name: string
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">{{ props.name }}</div>
    </div>
    <div class="card-content">узлы: <NodesList /></div>
  </div>
</template>
