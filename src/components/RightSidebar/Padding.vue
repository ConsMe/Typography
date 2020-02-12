<template>
  <div class="row mt-4">
    <div class="col col-lg-12 pl-3">
      <span class="text-uppercase">Отступы от края</span>
      (см)
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
            :max="maxPadding"
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
    paddingInit() { return this.template.padding; },
    canvasWidth() { return this.template.width; },
    canvasHeight() { return this.template.height; },
    pixelSize() { return this.template.pixelSize; },
    sizeStr() { return this.template.sizeStr; },
    rectSize() {
      if (this.padding === null) return null;
      const left = (this.pixelSize.width / this.canvasWidth) * this.padding;
      const top = (this.pixelSize.height / this.canvasHeight) * this.padding;
      return {
        left,
        top,
        width: this.pixelSize.width - left * 2 - 1,
        height: this.pixelSize.height - top * 2 - 1,
      };
    },
    maxPadding() {
      const side = this.canvasWidth > this.canvasHeight
        ? this.canvasHeight : this.canvasWidth;
      const halfSide = Math.floor(side / 2);
      return halfSide > 100 ? 100 : halfSide;
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
          id: 'padding',
          ...this.rectSize,
          fill: 'transparent',
          paintFirst: 'stroke',
          stroke: 'black',
          strokeWidth: 1,
          selectable: false,
          hoverCursor: 'default',
          strokeDashArray: [2, 2],
        });
        this.canvas.add(this.rect);
      }
    },
    setPadding() {
      const { padding, forAll } = this;
      this.$store.dispatch('setPadding', { padding, forAll });
      if (!this.eye) this.render();
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
