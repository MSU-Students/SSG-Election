import { Admin } from './../../interfaces/admin.interface';
import { AdminDto } from 'src/services/rest-api';

export interface AdminStateInterface {
  allAdmin: AdminDto[];
  newAdmin?: Admin;
}

function state(): AdminStateInterface {
  return {
    allAdmin: [],
  };
}

export default state;
