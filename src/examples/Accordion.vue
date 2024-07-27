<template>
    <Accordion class="max-w-sm w-full">
        <AccordionItem value="1">
            <AccordionHeader>
                First item
            </AccordionHeader>
            <AccordionContent>
                First second
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</template>

<script setup>
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '@/ui/Accordion'
</script>