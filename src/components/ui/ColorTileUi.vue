<template>
  <div class="flex items-center space-x-4">
    <div class="h-8 w-8 rounded border border-gray-200" :class="color" />
    <div class="text-sm text-default">
      {{ label || color }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    color: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  });
</script>
