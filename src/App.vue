<script setup>
import { RouterView } from 'vue-router';
import BlogHeader from '@/components/BlogHeader.vue';
import ContainerUtility from '@/components/utilities/ContainerUtility.vue'
</script>
<template lang="pug">
ContainerUtility
    BlogHeader
    RouterView
</template>
