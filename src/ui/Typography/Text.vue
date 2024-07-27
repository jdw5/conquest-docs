<script setup>
import { Primitive } from 'radix-vue';

const props = defineProps({
    as: {type: null, default: 'div' },
});

</script>

<template>
    <component :is="as" class="text-regular leading-5 text-on-surface dark:text-on-surface-dark">
        <slot />
    </component>
</template>
