import { makeAutoObservable, toJS } from "mobx";
import { glyphs } from "./data/glyphs";
import { talentsBySpecs } from "./data/talents";
import { getClassById, getClassByName } from "./tools";

class Store {
  classId = null;
  specIds = [];
  talentsBySpecs = [];
  glyphs = {};
  talentString = '';
  glyphsString = '';

  constructor() {
    makeAutoObservable(this);
  }

  hydrate(talentString, glyphString) {
    if (!this.isActive) {
      return;
    }

    if (talentString) {
      this.talentString = talentString;
      const specTalentStrings = talentString.split(',');
      for (let i = 0; i < 3; i++) {
        const specId = this.specIds[i];
        const allTalents = Object.values(talentsBySpecs[specId]);

        for (let j = 0; j < allTalents.length; j++) {
          if (specTalentStrings[i][j] !== '0') {
            this.talentsBySpecs[i][allTalents[j].id] = +specTalentStrings[i][j];
          }
        }
      }
    }

    if (glyphString) {
      this.glyphsString = glyphString;
      const learnedGlyph = glyphString.split(',');
      for (let i = 0; i < 6; i++) {
        if (learnedGlyph[i]) {
          const glyph = glyphs.find(g => g.itemId === +learnedGlyph[i]);
          this.glyphs[i] = glyph;
        }
      }
    }
  }

  dehydrate() {
    if (!this.isActive) {
      return;
    }

    let talentStringParts = [];
    for (let i = 0; i < 3; i++) {
      if (i > 0) {
        talentStringParts.push(',')
      }

      const specId = this.specIds[i];
      for (const id of Object.keys(talentsBySpecs[specId])) {
        talentStringParts.push(this.talentsBySpecs[i][id]?.toString() ?? '0');
      }
    }

    this.talentString = talentStringParts.join('');
    let glyphStringParts = [];
    for (let i = 0; i < 6; i++) {
      glyphStringParts.push(this.glyphs[i]?.itemId ?? '')
    }

    this.glyphsString = glyphStringParts.join(',');
  }

  setActiveClass(classId) {
    this.classId = classId;
    this.resetAll();
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

  setGlyph(glyph, index) {
    this.glyphs[index] = glyph;
  }

  isGlyphPicked(glyph) {
    const learnedGlyphs = Object.values(toJS(this.glyphs))
    return !!learnedGlyphs.some(g => g?.spellId === glyph.spellId);
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

  resetAll() {
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
    return this.talentsBySpecs[specIndex][talent.id] ?? 0;
  }

  getSpecPoints(specId) {
    const specIndex = this.specIds.indexOf(specId);
    return Object.values(toJS(this.talentsBySpecs[specIndex])).reduce((acc, c) => acc + c, 0);
  }

  canLearnTalent(talent) {
    return this.availablePointCount > 0
      && talent.ranks.length > this.getTalentPoints(talent)
      && talent.requires.every(r => this.getTalentPoints(talentsBySpecs[talent.specId][r.id]) >= r.qty);
  }
}

export default Store;