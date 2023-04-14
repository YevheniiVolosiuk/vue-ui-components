<template>
    <component :is="tag" :class="{ [themeClass]: true, capitalize: capitalize }" v-bind="$attrs">
        <slot />
    </component>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        theme: {
            type: String,
            required: true,
            validator: (value) => ['h1', 'h2', 'h3', 'h4', ' p', 'default'].includes(value),
        },
        tag: {
            type: String,
            required: false,
            default: 'p',
            validator: (value) =>
                ['h1', 'h2', 'h3', 'h4', 'h5', ' p', 'span', 'label'].includes(value),
        },

        capitalize: {
            type: Boolean,
            required: false,
            default: false,
        },
    });

    const classList = {
        h1: 'text-xl font-medium text-default',
        h2: 'text-lg font-medium text-default',
        h3: 'text-sm font-medium text-default',
        h4: 'text-xs font-medium text-default',
        p: 'text-base text-muted',
        default: 'text-sm text-default',
    };

    const themeClass = computed(() => classList[props.theme]);
</script>
