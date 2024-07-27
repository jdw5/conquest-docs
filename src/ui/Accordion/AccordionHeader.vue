<script setup>
import { AccordionHeader, AccordionTrigger } from "radix-vue";
import { Plus } from "../Icons";

const props = defineProps({
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
});

</script>

<template>
    <AccordionHeader class="flex">
        <AccordionTrigger
            v-bind="props"
            class="text-lg flex flex-1 items-center justify-between py-4 font-medium transition-all text-on-surface dark:text-on-surface-dark hover:text-on-surface-hover dark:hover:text-on-surface-dark-hover [&[data-state=open]>svg]:rotate-45"
        >
            <slot />
            <slot name="icon">
                <Plus class="h-6 w-6 shrink-0 transition-transform duration-200" />
            </slot>
        </AccordionTrigger>
    </AccordionHeader>
</template>
