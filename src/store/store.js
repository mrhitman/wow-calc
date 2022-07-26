import { makeAutoObservable, toJS } from "mobx"
import { getClassById, getClassByName } from "./tools";

class Store {
  classId = null;
  specIds = [];
  talentsBySpecs = [];
  glyphs = {};

  constructor() {
    makeAutoObservable(this);
  }

  hydrate() {
  }

  dehydrate() {
  }

  setActiveClass(classId) {
    this.classId = classId;
    this.clearAll();
  }

  setActiveClassByName(name) {
    const { id } = getClassByName(name);

    if (id !== this.classId) {
      this.setActiveClass(id);
    }
  }

  setPoint(talent) {
    const specIndex = this.specIds.indexOf(talent.specId);
    const talents = this.talentsBySpecs[specIndex];
    talents[talent.id] = talents[talent.id] ? talents[talent.id] + 1 : 1;
  }

  unsetPoint(talent) {
    const specIndex = this.specIds.indexOf(talent.specId);
    const talents = this.talentsBySpecs[specIndex];
    talents[talent.id] = (talents[talent.id] ?? 1) - 1;
  }

  resetSpec(specId) {
    const specIndex = this.specIds.indexOf(specId);
    this.talentsBySpecs[specIndex] = {};
  }

  setGlyph(glyphs, index) {
    this.glyphs[index] = glyphs;
  }

  clearGlyphs() {
    this.glyphs = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    };
  }

  clearAll() {
    this.specIds = this.classInfo.specs;
    this.talentsBySpecs = [
      {},
      {},
      {},
    ];
    this.clearGlyphs();
  }

  get isActive() {
    return this.classId !== null;
  }

  get classInfo() {
    return getClassById(this.classId);
  }

  get availablePointCount() {
    return this.talentsBySpecs
      .reduce(
        (acc, talents) => acc - Object.values(toJS(talents)).reduce((acc1, points) => acc1 + points, 0)
        , 80);
  }

  getTalentPoints(talent) {
    const specIndex = this.specIds.indexOf(talent.specId);
    return this.talentsBySpecs[specIndex][talent.id];
  }

  getSpecPoints(specId) {
    const specIndex = this.specIds.indexOf(specId);
    return Object.values(toJS(this.talentsBySpecs[specIndex])).reduce((acc, c) => acc + c, 0);
  }
}

export default Store;