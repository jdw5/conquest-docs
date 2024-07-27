<template>
    <component :is="as" class="text-secondary dark:text-secondary-dark">
        <slot />
    </component>
</template>

<script setup>

const props = defineProps({
    as: {
        type: [String, Object],
        default: 'span',
    },
});
</script>