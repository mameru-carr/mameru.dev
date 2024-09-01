<script setup lang="ts">
import { RouterView } from 'vue-router';
import BlogHeader from '@/components/BlogHeader.vue';
import Container from '@/components/utilities/Container.vue';
</script>
<template lang="pug">
Container
	BlogHeader
		RouterView
</template>
