export interface CandidateAccountInfo {
  candidateID?: string;
  FName: string;
  MName: string;
  LName: string;
  SName: string;
  idNum: string;
  department: string;
  level: string;
  course: string;
  email: string;
  username: string;
  password: string;
  saying: string,
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
        SName: "",
        idNum: "201812291",
        email: "arifahabdulbasit@gmail.com",
        level: "4th Year",
        course: "BS-Information Technology",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "12345",
        saying: "Patience is Virtue"
      },
      {
        FName: "Najmah",
        MName: "A.",
        LName: "Omar",
        SName: "",
        idNum: "201811518",
        email: "najmahomar@gmail.com",
        level: "4th Year",
        course: "BS-Information Technology",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "12345",
        saying: "Sometimes...."
      },
      {
        FName: "Anisah",
        MName: "I.",
        LName: "Dayaan",
        SName: "",
        idNum: "201811942",
        email: "anisahdayaan@gmail.com",
        level: "4th Year",
        course: "BS-Information Technology",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "12345",
        saying: "Try and try until you success"
      },
    ],
  };
}

export default state;
