<script setup>
const props = defineProps({
    as: { type: null, default: 'div' },
});
</script>

<template>
    <component :is="as" class="uppercase font-semibold text-base tracking-wider leading-5 whitespace-nowrap text-primary dark:text-primary-dark">
        <slot />
    </component>
</template>