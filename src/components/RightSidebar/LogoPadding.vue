<template>
  <div class="row mt-4">
    <div class="col col-lg-12 pl-3">
      <span class="text-uppercase">Обводка логотипа</span>
      (%)
      <font-awesome-icon
        icon="eye"
        class="cursor-pointer ml-2 align-middle"
        :class="{'text-info': eye}"
        @click="eye = !eye" />
    </div>
    <div class="col col-lg-12 pl-3">
      <div class="row">
        <div class="col-1">{{ padding }}</div>
        <div class="col">
          <input
            type="range"
            class="custom-range"
            min="10"
            max="150"
            v-model.number="padding"
            @change="setPadding"
            @input="render(true)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fabric } from 'fabric';

export default {
  props: ['forAll'],
  data() {
    return {
      padding: null,
      rect: null,
      eye: true,
    };
  },
  computed: {
    templateId() { return this.$store.state.activeTemplateId; },
    template() { return this.$store.getters.activeTemplate; },
    grid() { return this.template.grid; },
    canvas() { return this.template.canvas; },
    paddingInit() { return this.template.logoPaddingPercent; },
    canvasWidth() { return this.template.width; },
    canvasHeight() { return this.template.height; },
    pixelSize() { return this.template.pixelSize; },
    rectSize() {
      if (this.padding === null) return null;
      if (!this.grid.length) return null;
      const row = Math.floor(this.grid.length / 2);
      const col = Math.floor(this.grid[row].length / 2);
      const { x, y } = this.grid[row][col];
      const kX = this.pixelSize.width / this.canvasWidth;
      const kY = this.pixelSize.height / this.canvasHeight;
      const left = kX * x;
      const top = kY * y;
      const stroke = 10 * (this.padding / 100);
      return {
        left,
        top,
        width: 10 + stroke,
        height: 10 + stroke,
        strokeWidth: stroke,
        scaleX: (this.template.step.x * kX) / 10,
        scaleY: (this.template.step.y * kY) / 10,
      };
    },
  },
  watch: {
    templateId() {
      this.padding = this.paddingInit;
    },
    grid(nv) {
      if (!this.canvas || !nv) return;
      this.render();
    },
    eye() {
      this.render();
    },
  },
  mounted() {
    if (this.eye) {
      if (this.canvas) {
        this.render();
      } else {
        const unwatch = this.$watch('canvas', (nv) => {
          if (nv) {
            unwatch();
            this.render();
          }
        });
      }
    }
  },
  methods: {
    render(eye) {
      if (this.padding === null) this.padding = this.paddingInit;
      if (this.rect) {
        this.canvas.remove(this.rect);
        this.rect = null;
      }
      if (this.rectSize && (this.eye || eye)) {
        this.rect = new fabric.Rect({
          id: 'paddingLogo',
          ...this.rectSize,
          fill: 'transparent',
          originX: 'center',
          originY: 'center',
          paintFirst: 'stroke',
          stroke: 'gray',
          selectable: false,
          hoverCursor: 'default',
        });
        this.canvas.add(this.rect);
      }
    },
    setPadding() {
      const { padding, forAll } = this;
      this.$store.dispatch('setPaddingLogo', { padding, forAll });
      if (!this.eye) this.render();
    },
    clone(o) { return JSON.parse(JSON.stringify(o)); },
  },
};
</script>

<style lang="scss" scoped>

</style>
