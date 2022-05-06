export interface TempRep {
  temp_tally_id?: number;
  position_type: string;
  platform: string;
}

export interface TempRepStateInterface {
  allTempRep: TempRep[];
}

function state(): TempRepStateInterface {
  return {
    allTempRep: [],
  };
}

export default state;
