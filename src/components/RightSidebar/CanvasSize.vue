<template>
  <div class="row mt-4" ref="size">
    <div class="col col-lg-12 pl-3">
      <span class="text-uppercase">Размер холста</span>
      (Ш х В, см)
    </div>
    <div class="col col-lg-12 text-white">
      <div class="row" :class="{edit: edit === 'size'}">
        <div class="col-auto pr-0">
          <input
            type="text"
            ref="width"
            title="Ширина"
            class="form-control-sm w-100 text-center custom-input"
            :readonly="edit !== 'size'"
            :value="width"
            @keydown.enter="setCanvasSize"
          />
        </div>
        <div class="col-auto h-auto align-self-center px-1">x</div>
        <div class="col-auto pl-0">
          <input
            type="text"
            title="Высота"
            ref="height"
            class="form-control-sm w-100 text-center custom-input"
            :readonly="edit !== 'size'"
            :value="height"
            @keydown.enter="setCanvasSize"
          />
        </div>
        <div class="col h-auto align-self-center px-0">
          <template v-if="edit === 'size'">
            <button
              class="btn btn-sm btn-outline-success ml-2 w-2"
              type="button"
              @click="setCanvasSize"
            >
              <font-awesome-icon icon="check" />
            </button>
            <button
              class="btn btn-sm btn-outline-danger ml-2 w-2"
              type="button"
              @click="$emit('edit-mode', null)"
            >
              <font-awesome-icon icon="times" />
            </button>
          </template>
          <button
            v-else
            class="btn btn-sm btn-outline-info ml-2 w-2"
            type="button"
            @click="$emit('edit-mode', 'size')"
          >
            <font-awesome-icon icon="edit" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr';

export default {
  props: ['edit', 'forAll'],
  computed: {
    template() { return this.$store.getters.activeTemplate; },
    width() { return this.template.width; },
    height() { return this.template.height; },
  },
  methods: {
    setCanvasSize() {
      const width = parseInt(this.$refs.width.value, 10);
      const height = parseInt(this.$refs.height.value, 10);
      if (!Number.isNaN(width) && !Number.isNaN(height)) {
        if (Math.min(width, height) <= this.template.minSide) {
          toastr.error('Заданные отступы превышают данные размеры');
        } else {
          this.$store.dispatch('setCanvasSize', { width, height, forAll: this.forAll });
        }
      }
      this.$emit('edit-mode', null);
    },
  },
};
</script>
