<template>
  <div class="pt-2 templates">
    <template v-if="sideBarWidth">
      <div
        v-for="template in templates"
        :key="template.id"
        class="mb-5 position-relative"
        :class="{active: template.id === activeTemplateId}"
        :style="template.styleWrapper">
        <fabric
          :active="template.id === activeTemplateId"
          :id="template.id"
          :style="{transform: `scale(${template.scale})`}"/>
        <div
          class="clickable"
          @click="setTemplateId(template.id)" v-if="template.id !== activeTemplateId">
          <h1 class="id">
            <span class="badge badge-secondary">{{ template.id + 1 }}</span>
          </h1>
        </div>
        <h1 class="id" v-else>
          <span class="badge badge-info">{{ template.id + 1 }}</span>
        </h1>
      </div>
    </template>
  </div>
</template>

<script>
import Fabric from '../Fabric/Fabric.vue';

export default {
  props: ['sideBarWidth'],
  components: {
    Fabric,
  },
  computed: {
    activeTemplateId() { return this.$store.state.activeTemplateId; },
    pixelSize() { return this.$store.getters.activeTemplate.pixelSize; },
    templates() {
      const { templates } = this.$store.getters;
      return templates.map((template) => {
        let { width, height } = template.pixelSize;
        const scale = this.sideBarWidth / width;
        if (template.id !== this.activeTemplateId) {
          width *= scale;
          height *= scale;
        }
        return {
          id: template.id,
          scale: template.id === this.activeTemplateId ? 1.0 : scale,
          styleWrapper: {
            width: `${width}px`,
            height: `${height}px`,
          },
        };
      });
    },
  },
  methods: {
    setTemplateId(id) {
      this.$store.commit('setTemplateId', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.templates {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 50%;
  &::-webkit-scrollbar {
    background: transparent;
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  .id {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  .clickable {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.24);
    }
  }
  .active {
    position: fixed !important;
    left: 0;
    top: 0;
    margin: auto !important;
    right: 0;
    z-index: 2;
    bottom: 0;
  }
}
</style>
