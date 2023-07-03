<script setup lang="ts">
defineProps<{ value: number }>()
</script>

<template>
  <div>
    <h3>Some content</h3>
    <p>Some data from props: {{ value }}</p>
  </div>
</template>
