<template>
    <component :is="as" :class="className" class="text-on-surface dark:text-on-surface-dark leading-5">
        <slot />
    </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    h1: { type: Boolean, required: false },
    h2: { type: Boolean, required: false },
    h3: { type: Boolean, required: false },
    h4: { type: Boolean, required: false },
    h5: { type: Boolean, required: false },
    h6: { type: Boolean, required: false },
})

const as = computed(() => {
    if (props.h1) return 'h1'
    if (props.h2) return 'h2'
    if (props.h3) return 'h3'
    if (props.h4) return 'h4'
    if (props.h5) return 'h5'
    if (props.h6) return 'h6'
    return 'h3'
})

const className = computed(() => {
    switch (as.value) {
        case 'h1': 
            return 'text-3xl font-semibold'
        case 'h2':
            return 'text-2xl font-semibold'
        case 'h3':
            return 'text-xl font-semibold'
        case 'h4':
            return 'text-lg font-medium'
        case 'h5':
            return 'text-base font-medium'
        case 'h6':
            return 'text-sm font-medium'
    }
})
</script>