<template>
  <div ref="col" class="h-100" >
    <templates :side-bar-width="sideBarWidth" />
  </div>
</template>

<script>
import Templates from './Templates.vue';

export default {
  components: {
    Templates,
  },
  data() {
    return {
      sideBarWidth: 0,
    };
  },
  mounted() {
    this.sideBarWidth = this.$refs.col.offsetWidth;
  },
};
</script>
