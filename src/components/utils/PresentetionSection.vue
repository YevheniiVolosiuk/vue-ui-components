<template>
    <div class="space-y-4">
        <h1 class="text-lg font-medium text-default">
            {{ title }}
        </h1>

        <div class="border-b border-border" />

        <div class="mt-8 flex flex-col space-y-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
    });
</script>
