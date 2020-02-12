<template>
  <div class="fabric">
    <canvas ref="fabric"></canvas>
  </div>
</template>

<script>
import { fabric } from 'fabric';
import { mapState } from 'vuex';

export default {
  props: ['id', 'active'],
  computed: {
    ...mapState([
      'files', 'maxPixelSize',
    ]),
    template() {
      return this.$store.getters.templates.find(t => t.id === this.id);
    },
    width() { return this.template.width; },
    height() { return this.template.height; },
    canvas() { return this.template.canvas; },
    sizeStr() { return this.template.sizeStr; },
  },
  watch: {
    sizeStr() { this.setCanvasSize(); },
    active(nv) {
      if (nv) {
        if (!this.template.grid.length) this.setGrid();
        return;
      }
      this.canvas.getObjects().forEach((object) => {
        if (['dots', 'padding', 'paddingLogo'].includes(object.id)) {
          this.canvas.remove(object);
        }
      });
      this.canvas.renderAll();
    },
  },
  mounted() {
    if (!this.canvas) {
      const canvas = new fabric.Canvas(this.$refs.fabric, {
        selection: false,
        uniScaleTransform: true,
        width: 0,
        height: 0,
        backgroundColor: 'white',
      });
      this.$store.commit('setCanvas', { id: this.id, canvas });
    }
    if (this.maxPixelSize.width && this.maxPixelSize.height) {
      this.setCanvasSize();
    } else {
      const unwatch = this.$watch('maxPixelSize', (size) => {
        if (size.width && size.height) {
          unwatch();
          this.setCanvasSize();
        }
      });
    }
    if (this.active) this.setGrid();
  },
  methods: {
    setCanvasSize() {
      let size = {};
      const { width, height } = this.maxPixelSize;
      const col = width / height;
      const canvas = this.width / this.height;
      if (col > canvas) {
        size = { height: height * 0.96, width: (height / this.height) * this.width };
      } else {
        size = { height: (width / this.width) * this.height, width };
      }
      this.canvas.setDimensions(size);
      this.$store.commit('setPixelSize', { id: this.id, pixelSize: size });
    },
    setGrid() {
      this.$store.commit('setGrid', { forAll: false });
    },
    addFile() {},
    clone(o) { return JSON.parse(JSON.stringify(o)); },
  },
};
</script>

<style lang="scss">
.fabric {
  .canvas-container {
    display: flex;
    align-self: center;
  }
  transform-origin: 0 0;
}
</style>
