export interface SectTemp {
  id?: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  course: string;
  yr_admitted: string;
  secretaryStudentId?: number;
}

export interface SectTempStateInterface {
  limit: number;
  allSectTemp: SectTemp[];
}

function state(): SectTempStateInterface {
  return {
    limit: 1,
    allSectTemp: [],
  };
}

export default state;
