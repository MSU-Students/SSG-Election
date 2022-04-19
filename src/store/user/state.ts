import { User } from "src/interfaces/user.interface";
export interface AccountStateInterface {
  allAccount: User[];
  newAccount?: User;
}

function state(): AccountStateInterface {
  return {
    allAccount: [],
  };
}

export default state;
