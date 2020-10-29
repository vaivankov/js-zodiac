import * as constants from "../../constants";

export class DataBase {
  constructor() {
    this.nakshatrasList = constants.nakshatrasList;
    this.nakshatrasTable = constants.nakshatrasTable;
  }

  getPadasIndex(...padas) {
    return padas.map((pada) => this.nakshatrasList.indexOf(pada));
  }

  getPadasRelation(...padas) {
    return this.nakshatrasTable[padas[0]][padas[1]];
  }
}
