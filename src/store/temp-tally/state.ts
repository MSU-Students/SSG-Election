import { TempTally } from 'src/interfaces/temp-tally.interface';
import { TempTallyDto } from 'src/services/rest-api';

export interface TempTallyStateInterface {
  allTempTally: TempTallyDto[];
  newTempTally?: TempTally;
}

function state(): TempTallyStateInterface {
  return {
    allTempTally: [],
  };
}

export default state;
