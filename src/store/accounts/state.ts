export interface AccountInfo {
  FName: string;
    MName: string
    LName: string;
    idNum: string;
    department: string;
    email: string;
    username: string;
    password: string;
  
}

export interface AccountStateInterface {
  account: AccountInfo[];
  activeAccount?: AccountInfo;
}

function state(): AccountStateInterface {
  return {
    account: [
      {
        FName: 'Arifah',
        MName: 'U.',
        LName: 'Abdulbasit',
        idNum: "201812291",
        email: "arifahabdulbasit@gmail.com",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "4yh4fdf",
      },
      {
        FName: 'Najmah',
        MName: 'A.',
        LName: 'Omar',
        idNum: "201811518",
        email: "najmahomar@gmail.com",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "df5yh",
      },
      {
        FName: 'Anisah',
        MName: 'I.',
        LName: 'Dayaan',
        idNum: "201811942",
        email: "anisahdayaan@gmail.com",
        department: "College of Information and Computing Sciences",
        username: "aBjH45",
        password: "asfht",
      },
    ]
  }
};

export default state;
