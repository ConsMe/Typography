<template>
  <div class="h-100 d-flex flex-column">
    <div class="row mx-0 h-100">
      <div class="col-2 border-right border-primary h-100">
        <left-sidebar />
      </div>
      <div
        class="col d-flex justify-content-center p-0"
        ref="col">
      </div>
      <div class="col-2 border-left border-primary py-2">
        <right-sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import RightSidebar from '../components/RightSidebar/RightSidebar.vue';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar.vue';

export default {
  components: {
    RightSidebar,
    LeftSidebar,
  },
  computed: {
    activeTemplateId() {
      return this.$store.state.activeTemplateId;
    },
  },
  mounted() {
    const maxPixelSize = {
      width: this.$refs.col.offsetWidth,
      height: this.$refs.col.offsetHeight,
    };
    this.$store.commit('setMaxPixelSize', maxPixelSize);
  },
};
</script>

<style lang="scss">
html, body, #app {
    height: 100%;
}
.cursor-pointer {
  cursor: pointer;
}
.custom-control-input:checked ~ .custom-control-label::before {
  background-color: rgb(91, 192, 222);
}
</style>
