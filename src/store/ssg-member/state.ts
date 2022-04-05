import { SsgMember } from '../../interfaces/ssg-member.interface';
import { SsgMemberDto } from "src/services/rest-api";

export interface SsgMemberStateInterface {
  allSsgMember: SsgMemberDto[];
  newSsgMember?: SsgMember;
}

function state(): SsgMemberStateInterface {
  return {
    allSsgMember: [],
  };
}

export default state;
