export interface CandidateAccountInfo {
  candidateID?: string;
  FName: string;
  MName: string;
  LName: string;
  idNum: string;
  department: string;
  level: string;
  course: string;
  email: string;
  username: string;
  password: string;
}

export interface CandidateAccountStateInterface {
  allCandidateAccount: CandidateAccountInfo[];
  activeAccount?: CandidateAccountInfo;
}

function state(): CandidateAccountStateInterface {
  return {
    allCandidateAccount: [
      {
        FName: "Arifah",
        MName: "U.",
        LName: "Abdulbasit",
        idNum: "201812291",
        email: "arifahabdulbasit@gmail.com",
        level: "4th Year",
        course: "BS-Information Technology",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "12345",
      },
      {
        FName: "Najmah",
        MName: "A.",
        LName: "Omar",
        idNum: "201811518",
        email: "najmahomar@gmail.com",
        level: "4th Year",
        course: "BS-Information Technology",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "12345",
      },
      {
        FName: "Anisah",
        MName: "I.",
        LName: "Dayaan",
        idNum: "201811942",
        email: "anisahdayaan@gmail.com",
        level: "4th Year",
        course: "BS-Information Technology",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "12345",
      },
    ],
  };
}

export default state;
