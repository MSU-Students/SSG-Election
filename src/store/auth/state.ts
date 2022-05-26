import { StudentDto } from 'src/services/rest-api';
export interface AUser {
  account_id?: number;
  username: string;
  password: string;
  userType: string;
  student: StudentDto;
}
export interface IAuthState {
  currentUser?: AUser;
}

function state(): IAuthState {
  return {
    currentUser: undefined,
  };
}

export default state;
