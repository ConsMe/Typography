import Vue from 'vue';
import Vuex from 'vuex';
import getGrid from '../modules/getGrid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maxPixelSize: {
      width: 0,
      height: 0,
    },
    templatesInit: new Array(4).fill().map((_, i) => ({
      id: i,
      canvas: null,
      grid: [],
      width: 300,
      height: 250,
      pixelSize: {
        width: 0,
        height: 0,
      },
      padding: 10,
      step: {
        y: 50,
        x: 50,
      },
      logoPaddingPercent: 10,
    })),
    activeTemplateId: 0,
    files: [
      '/tmpImages/A-Fitness_Logo_Gor_BL.png',
      '/tmpImages/Amw_Logo_smallTM_Black.300dpi.jpg',
      '/tmpImages/consultantplus-logo.tif',
    ],
  },
  getters: {
    templates(state) {
      return state.templatesInit.map((template) => {
        const side = Math.min(template.width, template.height);
        const fullTemplate = {
          ...template,
          sizeStr: `${template.width}${template.height}`,
          maxPadding: Math.floor(side / 2),
          minSide: Math.ceil(template.padding * 2),
        };
        // fullTemplate.grid = getGrid(fullTemplate);
        // console.log(template.id);
        return fullTemplate;
      });
    },
    activeTemplate(state, getters) {
      return getters.templates[state.activeTemplateId];
    },
  },
  mutations: {
    setMaxPixelSize(state, maxPixelSize) {
      state.maxPixelSize = maxPixelSize;
    },
    setCanvas(state, { id, canvas }) {
      Vue.set(state.templatesInit[id], 'canvas', canvas);
    },
    setCanvasSize(state, payload) {
      const { width, height, forAll } = payload;
      const { templates } = payload;
      state.templatesInit.forEach((template, i) => {
        if (!forAll && template.id !== state.activeTemplateId) return;
        if (Math.min(width, height) <= templates[i].minSide) return;
        Vue.set(state.templatesInit[i], 'width', width);
        Vue.set(state.templatesInit[i], 'height', height);
      });
    },
    setPixelSize(state, { id, pixelSize }) {
      Vue.set(state.templatesInit[id], 'pixelSize', pixelSize);
    },
    setPadding(state, { padding, forAll, templates }) {
      state.templatesInit.forEach((template, i) => {
        if (!forAll && template.id !== state.activeTemplateId) return;
        if (padding >= templates[i].maxPadding) return;
        Vue.set(state.templatesInit[i], 'padding', padding);
      });
    },
    setPaddingLogo(state, { padding, forAll }) {
      state.templatesInit.forEach((template, i) => {
        if (!forAll && template.id !== state.activeTemplateId) return;
        Vue.set(state.templatesInit[i], 'logoPaddingPercent', padding);
      });
    },
    setStep(state, { step, forAll }) {
      state.templatesInit.forEach((template, i) => {
        if (!forAll && template.id !== state.activeTemplateId) return;
        Vue.set(state.templatesInit[i], 'step', step);
      });
    },
    setOffset(state, { offset, forAll }) {
      state.templatesInit.forEach((template, i) => {
        if (!forAll && template.id !== state.activeTemplateId) return;
        Vue.set(state.templatesInit[i], 'offset', offset);
      });
    },
    setTemplateId(state, id) {
      state.activeTemplateId = id;
    },
    setGrid(state, { forAll }) {
      state.templatesInit.forEach((template, i) => {
        if (!forAll && template.id !== state.activeTemplateId) return;
        Vue.set(state.templatesInit[i], 'grid', getGrid(template));
      });
    },
  },
  actions: {
    setPadding({ commit, getters }, payload) {
      commit('setPadding', { ...payload, templates: getters.templates });
      commit('setGrid', { ...payload });
    },
    setPaddingLogo({ commit, getters }, payload) {
      commit('setPaddingLogo', { ...payload, templates: getters.templates });
      commit('setGrid', { ...payload });
    },
    setCanvasSize({ commit, getters }, payload) {
      commit('setCanvasSize', { ...payload, templates: getters.templates });
      commit('setGrid', { ...payload });
    },
    setStep({ commit, getters }, payload) {
      commit('setStep', { ...payload, templates: getters.templates });
      commit('setGrid', { ...payload });
    },
    setOffset({ commit, getters }, payload) {
      commit('setOffset', { ...payload, templates: getters.templates });
      commit('setGrid', { ...payload });
    },
  },
  modules: {
  },
});
