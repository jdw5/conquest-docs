<script setup>
import { AccordionItem } from "radix-vue";

const props = defineProps({
	value: { type: String, required: true },
	disabled: { type: Boolean, required: false, default: false },
	asChild: { type: Boolean, required: false },
	as: { type: null, required: false },
});

</script>

<template>
	<AccordionItem v-bind="props" class="border-b last:border-0 border-divider dark:border-divider-dark">
		<slot />
	</AccordionItem>
</template>
