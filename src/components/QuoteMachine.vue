<script setup>
import QuoteBlock from '@/components/QuoteBlock.vue'
import { onMounted, ref } from 'vue';

import axios from 'axios';
import _ from 'lodash';

const quote = ref('');
const author = ref('');
const link = ref('');

async function getQuotes() {
  const response = await axios.get('https://raw.githubusercontent.com/mameru-carr/mameru.dev/setup/collections/quotes.json');
  return response.data.quotes;
}

async function randomQuote() {
  const quotes = await getQuotes();
  const randomQuote = _.sample(quotes);
  quote.value = randomQuote.quote;
  author.value = randomQuote.author;
  link.value = randomQuote.link;
}

onMounted(() => {
  randomQuote();
});
</script>

<template lang="pug">
#quote
  template(v-if="quote")
    QuoteBlock(
      :quote="quote"
      :author="author"
      :link="link"
    )
</template>

<style scoped lang="sass">
</style>
