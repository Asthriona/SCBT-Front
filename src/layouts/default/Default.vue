<template>
  <v-app>
    <TheNavBar />
    <default-view />
    <TheFooter />
  </v-app>
</template>

<script setup>
  // import DefaultView from './View.vue'
</script>

<script>
import DefaultView from './View.vue'
import TheNavBar from '@/components/pageComp/TheNavBar.vue';
import TheFooter from '@/components/pageComp/TheFooter.vue';
export default {
  name: "default-layout",
  components: {
    TheNavBar,
    DefaultView
  }
}
</script>
