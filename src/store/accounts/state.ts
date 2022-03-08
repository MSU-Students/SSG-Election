export interface AccountInfo {
  userID?: string;
  FName: string;
  MName: string;
  LName: string;
  SName: string;
  idNum: string;
  department: string;
  email: string;
  username: string;
  password: string;
}

export interface AccountStateInterface {
  allAccount: AccountInfo[];
  activeAccount?: AccountInfo;
}

function state(): AccountStateInterface {
  return {
    allAccount: [
      {
        FName: "Arifah",
        MName: "U.",
        LName: "Abdulbasit",
        SName: "",
        idNum: "201812291",
        email: "arifahabdulbasit@gmail.com",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "4yh4fdf",
      },
      {
        FName: "Najmah",
        MName: "A.",
        LName: "Omar",
        SName: "",
        idNum: "201811518",
        email: "najmahomar@gmail.com",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "df5yh",
      },
      {
        FName: "Anisah",
        MName: "I.",
        LName: "Dayaan",
        SName: "",
        idNum: "201811942",
        email: "anisahdayaan@gmail.com",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "asfht",
      },
    ],
  };
}

export default state;
