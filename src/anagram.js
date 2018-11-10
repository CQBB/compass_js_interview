export default class Anagram {
  constructor(spell) {
    this.spell = spell;
  }

  isAnagram(ltrs) {
    // check if is array
    if (!this.validateInput(ltrs)) {
      throw "invalid paramter";
    }

    // check length
    if (this.spell.length != ltrs.length) {
      return false;
    }

    let result = true;
    const map = new Array(256);
    ltrs = ltrs.join("");
    map.fill(0);
    // count spell increase
    for (let i = 0; i < this.spell.length; i++) {
      map[this.spell.charCodeAt(i)]++;
    }

    // count ltrs decrease
    for (let i = 0; i < ltrs.length; i++) {
      map[ltrs.charCodeAt(i)]--;
    }

    map.map(count => {
      if (count != 0) result = false;
    });

    return result;
  }

  validateInput(ltrs) {
    return ltrs != null && ltrs != undefined && typeof ltrs === "object";
  }
}
