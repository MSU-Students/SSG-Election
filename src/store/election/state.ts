export interface ElectionInfo {
  electionID?: string;
  electionName: string;
  electionAgreement: string;
  Instruction: string;
  startdate: string;
      starttime: string;
      enddate: string;
      endtime: string;
}

export interface ElectionStateInterface {
  allElection: ElectionInfo[];
  activeElection?: ElectionInfo;
}

function state(): ElectionStateInterface {
  return {
    allElection: [
      {
      electionID: "1",
      electionName: "2021 Supreme Student Government Election",
      electionAgreement: "Yes",
      Instruction: "The Election must be on time. you can only vote once",
      startdate: "02-14-2021",
      starttime: "10:13:44",
      enddate: "02-14-2021",
      endtime: "10:13:44",
    }
    ],
  };
}

export default state;
