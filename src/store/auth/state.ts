export interface AUser {
  account_id?: number;
  username: string;
  password: string;
  userType: string;
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
