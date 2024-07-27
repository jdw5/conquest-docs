<script setup>
import { computed } from "vue";
import { AccordionContent } from "radix-vue";

const props = defineProps({
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    
    return delegated;
});
</script>

<template>
    <AccordionContent
        v-bind="delegatedProps"
        class="overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    >
        <div class="pb-sm pt-0" :class="props.class">
            <slot />
        </div>
    </AccordionContent>
</template>
