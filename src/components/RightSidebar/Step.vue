<template>
  <div class="row mt-4">
    <div class="col col-lg-12 pl-3">
      <span class="text-uppercase">S между точками</span>
      (см)
      <font-awesome-icon
        icon="eye"
        class="cursor-pointer ml-2 align-middle"
        :class="{'text-info': eye}"
        @click="eye = !eye" />
    </div>
    <div class="col col-lg-12 pl-3">
      <span class="text-uppercase">По горизонтали</span>
    </div>
    <div class="col col-lg-12 pl-3">
      <div class="row">
        <div class="col-1">{{ step.x }}</div>
        <div class="col">
          <input
            type="range"
            class="custom-range"
            min="10"
            :max="maxStep.x"
            v-model.number="step.x"
            @change="setStep('x')">
        </div>
      </div>
    </div>
    <div class="col col-lg-12 pl-3">
      <span class="text-uppercase">По вертикали</span>
    </div>
    <div class="col col-lg-12 pl-3">
      <div class="row">
        <div class="col-1">{{ step.y }}</div>
        <div class="col">
          <input
            type="range"
            class="custom-range"
            min="10"
            :max="maxStep.y"
            v-model.number="step.y"
            @change="setStep('y')">
        </div>
      </div>
    </div>
    <div class="col col-lg-12 pl-3 mt-4">
      <span class="text-uppercase">Смещение рядов</span>
      (см)
      <font-awesome-icon
        icon="eye"
        class="cursor-pointer ml-2 align-middle"
        :class="{'text-info': eye}"
        @click="eye = !eye" />
    </div>
    <div class="col col-lg-12 pl-3">
      <span class="text-uppercase">По горизонтали</span>
      <div class="custom-control custom-switch d-inline-block ml-4">
        <input
          type="checkbox"
          class="custom-control-input"
          id="orderX"
          true-value="even"
          false-value="odd"
          v-model="offsetOrder.x">
        <label class="custom-control-label" for="orderX">
          {{ offsetOrder.x === 'even' ? 'чет' : 'нечет' }}
        </label>
      </div>
    </div>
    <div class="col col-lg-12 pl-3">
      <div class="row">
        <div class="col-1">{{ offset.x[offsetOrder.x] }}</div>
        <div class="col">
          <input
            type="range"
            class="custom-range"
            :min="-paddingLogo.x"
            :max="paddingLogo.x"
            v-model.number="offset.x[offsetOrder.x]"
            @input="render(null, offset)"
            @change="setOffset">
        </div>
      </div>
    </div>
    <div class="col col-lg-12 pl-3">
      <span class="text-uppercase">По вертикали</span>
      <div class="custom-control custom-switch d-inline-block ml-4">
        <input
          type="checkbox"
          class="custom-control-input"
          id="orderY"
          true-value="even"
          false-value="odd"
          v-model="offsetOrder.y">
        <label class="custom-control-label" for="orderY">
          {{ offsetOrder.y === 'even' ? 'чет' : 'нечет' }}
        </label>
      </div>
    </div>
    <div class="col col-lg-12 pl-3">
      <div class="row">
        <div class="col-1">{{ offset.y[offsetOrder.y] }}</div>
        <div class="col">
          <input
            type="range"
            class="custom-range"
            :min="-paddingLogo.y"
            :max="paddingLogo.y"
            v-model.number="offset.y[offsetOrder.y]"
            @input="render(null, offset)"
            @change="setOffset">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fabric } from 'fabric';
import getGrid from '../../modules/getGrid';

export default {
  props: ['forAll'],
  data() {
    return {
      step: { x: 0, y: 0 },
      offset: {
        x: {
          even: 0,
          odd: 0,
        },
        y: {
          even: 0,
          odd: 0,
        },
      },
      dots: null,
      eye: true,
      offsetOrder: {
        x: 'even',
        y: 'even',
      },
    };
  },
  computed: {
    templateId() { return this.$store.state.activeTemplateId; },
    template() { return this.$store.getters.activeTemplate; },
    grid() { return this.template.grid; },
    canvas() { return this.template.canvas; },
    padding() { return this.template.padding; },
    canvasWidth() { return this.template.width; },
    canvasHeight() { return this.template.height; },
    pixelSize() { return this.template.pixelSize; },
    sizeStr() { return this.template.sizeStr; },
    maxStep() {
      return {
        x: Math.round(this.canvasWidth / 2),
        y: Math.round(this.canvasHeight / 2),
      };
    },
    stepX() { return this.step.x; },
    stepY() { return this.step.y; },
    paddingLogo() {
      return {
        x: Math.floor(this.template.step.x * this.template.logoPaddingPercent / 100),
        y: Math.floor(this.template.step.y * this.template.logoPaddingPercent / 100),
      };
    },
  },
  watch: {
    stepX(nv, ov) {
      if (!ov) return;
      this.render(this.step);
    },
    stepY(nv, ov) {
      if (!ov) return;
      this.render(this.step);
    },
    eye(eye) {
      if (eye) {
        this.render();
      } else {
        this.dots.remove(...this.dots.getObjects());
      }
      this.canvas.renderAll();
    },
    templateId() {
      this.dots = null;
      this.addGroup();
    },
    grid() {
      if (this.eye && this.dots) {
        this.render();
      }
    },
    pixelSize() {
      if (this.dots) this.setGroupSize();
    },
  },
  mounted() {
    if (this.canvas) {
      this.addGroup();
    } else {
      const unwatch = this.$watch('canvas', (nv) => {
        if (nv) {
          unwatch();
          this.addGroup();
        }
      });
    }
  },
  methods: {
    addGroup() {
      this.dots = new fabric.Group([], {
        id: 'dots',
        selectable: false,
        hoverCursor: 'default',
        top: 0,
        left: 0,
      });
      this.canvas.add(this.dots);
      this.setGroupSize();
      this.step = this.clone(this.template.step);
      if (this.eye) this.render();
    },
    setGroupSize() {
      this.dots.set({
        height: this.pixelSize.height,
        width: this.pixelSize.width,
      });
      this.canvas.renderAll();
    },
    render(step, offset) {
      this.dots.remove(...this.dots.getObjects());
      const template = {
        id: this.template.id,
        width: this.template.width,
        height: this.template.height,
        padding: this.template.padding,
        logoPaddingPercent: this.template.logoPaddingPercent,
        step: step || this.template.step,
        offset: offset || this.template.offset,
      };
      const grid = step || offset ? getGrid(template) : this.template.grid;
      // const width = (this.pixelSize.width / this.canvasWidth) * template.step.x;
      // const height = (this.pixelSize.height / this.canvasHeight) * template.step.y;
      grid.forEach((row) => {
        row.forEach((dot) => {
          const { x, y } = dot;
          this.dots.add(new fabric.Circle({
            radius: 3,
            fill: 'red',
            originX: 'center',
            originY: 'center',
            top: (y / this.canvasHeight) * this.pixelSize.height - this.pixelSize.height / 2,
            left: (x / this.canvasWidth) * this.pixelSize.width - this.pixelSize.width / 2,
          }));
          // this.dots.add(new fabric.Rect({
          //   width,
          //   height,
          //   fill: 'transparent',
          //   paintFirst: 'stroke',
          //   stroke: 'red',
          //   strokeWidth: 1,
          //   originX: 'center',
          //   originY: 'center',
          //   top: (y / this.canvasHeight) * this.pixelSize.height - this.pixelSize.height / 2,
          //   left: (x / this.canvasWidth) * this.pixelSize.width - this.pixelSize.width / 2,
          // }));
        });
      });
      this.canvas.renderAll();
    },
    setStep() {
      const { forAll } = this;
      const step = this.clone(this.step);
      this.$store.dispatch('setStep', { step, forAll });
      if (!this.eye) {
        this.dots.remove(...this.dots.getObjects());
      }
      this.canvas.renderAll();
    },
    setOffset() {
      const { forAll } = this;
      const offset = this.clone(this.offset);
      this.$store.dispatch('setOffset', { offset, forAll });
    },
    clone(o) { return JSON.parse(JSON.stringify(o)); },
  },
};
</script>

<style lang="scss" scoped>

</style>
