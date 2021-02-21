import { Fossil } from './Fossil';

export const addFossil = () => (
    Fossil('someName', ['some mods?'], 'linkToIcon', 'wall/special area')
)

export class Biome {
    constructor(name, fossils) {
      this.name = name
      this.fossils = fossils
    } 
}