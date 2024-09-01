<script setup>
import { defineProps } from 'vue';
const props = defineProps({
	quote: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: false,
    default: '',
	},
	link: {
		type: String,
		required: false,
    default: '',
	},
});

</script>

<template lang="pug">
.quote
	template(v-if="link")
		a(
      :href="link"
      target="_blank"
      )
			blockquote.text-quote {{ quote }}
			p.author(v-if="author") {{ author }}
	template(v-else)
		blockquote.text-quote {{ quote }}
		p.author(v-if="author") {{ author }}
</template>

<style scoped lang="sass">
.quote
	border-left: 3px solid black
	margin: 0.5rem 
	padding-left: 1rem

	blockquote
		&::before 
			content: "\201c"
		&::after
			content: "\201d"
</style>
