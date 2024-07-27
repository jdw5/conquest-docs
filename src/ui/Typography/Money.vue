<script setup>
import { computed } from 'vue';
const props = defineProps({
    value: { type: Number, required: true },
    currency: { type: String, required: false, default: 'AUD' },
    locale: { type: String, required: false, default: 'en-AU' },
    superscriptCents: { type: Boolean, required: false, default: false },
})

const valueString = computed(() => 
    Intl.NumberFormat(props.locale, {
        style: 'currency',
        currency: props.currency,
    }).format(props.value)
)

const { cents, dollars } = computed(() => {
    const [dollars, cents] = props.value.toFixed(2).split('.')
    return { dollars, cents }
})
</script>

<template>
    <span>
        {{ valueString }}
    </span>

</template>