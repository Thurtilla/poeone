export class Fossil {
    constructor(name, mods, icon, special) {
      this.name = name
      this.mods = mods
      this.icon = icon | ''
      this.special = special | ''
    }
  }