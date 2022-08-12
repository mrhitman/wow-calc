import { getClassById, getClassByName } from "./tools";
import { makeAutoObservable, toJS } from "mobx";

import { glyphs } from "./data/glyphs";
import { talentsBySpecs } from "./data/talents";

class Store {
  classId = null;
  isNew = true;
  specIds = [];
  talentsBySpecs = [];
  glyphs = {};
  talentString = '';
  glyphsString = '';

  constructor() {
    makeAutoObservable(this);
  }

  hydrate(talentString, glyphString) {
    let found = false;

    if (!this.isActive) {
      return found;
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
            found = true;
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
          found = true;
        }
      }
    }

    return found;
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
    this.isNew = false;
  }

  unsetPoint(talent) {
    const specIndex = this.specIds.indexOf(talent.specId);
    const talents = this.talentsBySpecs[specIndex];
    talents[talent.id] = Math.max((talents[talent.id] ?? 0) - 1, 0);
  }

  resetSpec(specId) {
    const specIndex = this.specIds.indexOf(specId);
    this.talentsBySpecs[specIndex] = {};
  }

  setGlyph(glyph, index) {
    this.glyphs[index] = glyph;
    this.isNew = true;
  }

  isGlyphPicked(glyph) {
    const learnedGlyphs = Object.values(toJS(this.glyphs))
    return !!learnedGlyphs.some(g => g?.spellId === glyph.spellId);
  }

  resetGlyphs() {
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
    this.resetGlyphs();
    this.isNew = true;
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
        , 71);
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

  canUnlearnTalent(targetTalent) {
    const talents = talentsBySpecs[targetTalent.specId];
    const specPoints = this.getSpecPoints(targetTalent.specId);

    for (const talent of Object.values(talents)) {
      const talentPoints = this.getTalentPoints(talent);

      if (talent.requires.some((r) => r.id === targetTalent.id) && talentPoints > 0) {
        return false
      }

      if (talent.row * 5 === specPoints - 1) {
        return false;
      }
    }

    return true;
  }
}

export default Store;