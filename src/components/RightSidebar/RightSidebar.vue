<template>
  <form class="right-sidebar">
    <div class="form-group">
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="forAll"
          v-model="forAll">
        <label class="custom-control-label" for="forAll">
          Применять ко всем раскладкам
        </label>
      </div>
    </div>
    <canvas-size
      :edit="edit"
      @edit-mode="editMode($event)"
      :for-all="forAll" />
    <padding :for-all="forAll" />
    <logo-padding :for-all="forAll" />
    <step :for-all="forAll" axis="x" />
  </form>
</template>

<script>
import $ from 'jquery';
import Padding from './Padding.vue';
import CanvasSize from './CanvasSize.vue';
import Step from './Step.vue';
import LogoPadding from './LogoPadding.vue';

export default {
  components: {
    Padding, CanvasSize, Step, LogoPadding,
  },
  data() {
    return {
      edit: null,
      forAll: false,
    };
  },
  methods: {
    editMode(ref) {
      this.edit = ref;
      $(this.$refs[ref]).find('input').first().focus();
    },
  },
};
</script>

<style lang="scss">
.form-control-sm {
  font-size: 1rem;
}
.form-control-plaintext {
  color: white;
}
.custom-input {
  background: transparent;
  border: none;
  border-radius: unset;
  outline: none;
  border-bottom: 1px solid transparent;
  color: white;
  width: 3.5rem !important;
  padding-left: 0;
  padding-right: 0;
}
.edit .custom-input {
  border-bottom-color: white;
}
.w-2 {
  width: 2rem;
}
</style>
