export interface TempRep {
  temp_tally_id?: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  course: string;
  yr_admitted: string;
  student_id?: string;
}

export interface TempRepStateInterface {
  limit: number;
  allTempRep: TempRep[];
}

function state(): TempRepStateInterface {
  return {
    limit: 2,
    allTempRep: [],
  };
}

export default state;
