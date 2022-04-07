import { User } from 'src/interfaces/user.interface';
import { UserDto } from 'src/services/rest-api';

export interface UserStateInterface {
  allUser: UserDto[];
  newUser?: User;
}

function state(): UserStateInterface {
  return {
    allUser: [],
  };
}

export default state;
