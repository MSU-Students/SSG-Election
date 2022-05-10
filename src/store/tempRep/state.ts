export interface TempRep {
  temp_tally_id?: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  course: string;
  yr_admitted: string;
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
