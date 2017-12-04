<template>
  <v-app>
    <page-header/>
    <main>
    <v-container>
      <router-view/>
    </v-container>
    </main>
  </v-app>
</template>

<script>
import PageHeader from '@/components/header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>

</style>
