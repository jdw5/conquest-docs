<script setup>
import { AccordionRoot } from "radix-vue";

const model = defineModel()

const props = defineProps({
    type: { type: String, required: false, default: 'single' },
    orientation: { type: String, required: false, default: 'vertical' },
    collapsible: { type: Boolean, requiredd: false, default: false },
    defaultValue: { type: [String, Array], required: false },
    disabled: { type: Boolean, required: false },
    dir: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
});

</script>

<template>
    <AccordionRoot v-bind="props" v-model="model">
        <slot />
    </AccordionRoot>
</template>
