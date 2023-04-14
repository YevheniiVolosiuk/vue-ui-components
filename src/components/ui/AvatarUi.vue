<template>
    <div class="relative">
        <div v-if="image" :class="{ [sizeClass]: true, [backgroundColorClass]: true }">
            <img
                :src="image"
                :alt="`${name} avatar`"
                v-bind="$attrs"
                :class="{ [roundedClass]: true }"
                class="h-full w-full object-cover"
            />
            <slot />
        </div>

        <div
            v-else
            :class="{
                [sizeClass]: true,
                [roundedClass]: true,
                [backgroundColorClass]: true,
                'inline-flex flex-shrink-0 select-none items-center justify-center uppercase text-white': true,
            }"
            v-bind="$attrs"
        >
            {{ name[0] }}
        </div>
        <div
            :class="{
                'absolute -right-1.5 -top-1.5 rounded-full border-border bg-green-500': true,
                [sizeListForIsOnlineClass]: true,
            }"
            v-if="isOnline"
        />
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    const props = defineProps({
        size: {
            type: String,
            required: false,
            default: 'md',
            validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
            default: '',
        },
        rounded: {
            type: String,
            required: false,
            default: '',
            validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value),
        },
        isOnline: {
            type: Boolean,
            required: false,
            default: false,
        },
    });

    const sizeList = {
        sm: 'w-6 h-6 text-sm',
        md: 'w-8 h-8 text-md',
        lg: 'w-10 h-10 text-lg',
        xl: 'w-12 h-12 text-xl',
    };
    const sizeListForIsOnline = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
        xl: 'w-6 h-6',
    };
    const roundedList = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
    };
    const backgroundColorList = [
        'bg-green-400',
        'bg-yellow-400',
        'bg-blue-400',
        'bg-indigo-400',
        'bg-pink-400',
        'bg-indigo-400',
        'bg-red-400',
    ];

    const charIndex = props.name.charCodeAt(0);
    const colorIndex = charIndex % backgroundColorList.length;

    const sizeClass = computed(() => sizeList[props.size]);
    const roundedClass = computed(() => roundedList[props.rounded]);
    const backgroundColorClass = computed(() => backgroundColorList[colorIndex]);
    const sizeListForIsOnlineClass = computed(() => sizeListForIsOnline[props.size]);
</script>
