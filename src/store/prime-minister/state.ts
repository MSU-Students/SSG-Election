import { PrimeMinister } from "src/interfaces/prime-minister.interface";
import { PrimeMinisterDto } from "src/services/rest-api";

export interface PrimeMinisterStateInterface {
  allPrimeMinister: PrimeMinisterDto[];
  newPrimeMinister?: PrimeMinister;
}

function state(): PrimeMinisterStateInterface {
  return {
    allPrimeMinister: [],
  };
}

export default state;
