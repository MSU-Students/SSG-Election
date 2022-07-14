export interface VoteTemp {
  id?: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  course: string;
  yr_admitted: string;
  primeStudentId?: number;
}

export interface VoteTempStateInterface {
  limit: number;
  allVoteTemp: VoteTemp[];
}

function state(): VoteTempStateInterface {
  return {
    limit: 1,
    allVoteTemp: [],
  };
}

export default state;
