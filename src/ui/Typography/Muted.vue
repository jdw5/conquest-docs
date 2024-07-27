<template>
    <component :is="as" class="text-regular leading-5 text-muted dark:text-muted-dark">
        <slot />
    </component>
</template>

<script setup>
const props = defineProps({
    as: { type: null, default: 'div' },
});
</script>