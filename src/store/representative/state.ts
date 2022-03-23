import { Representative } from 'src/interfaces/representative.interface';
import { RepresentativeDto } from 'src/services/rest-api';

export interface RepresentativeStateInterface {
  allRepresentative: RepresentativeDto[];
  newRepresentative?: Representative;
}

function state(): RepresentativeStateInterface {
  return {
    allRepresentative: [],
  };
}

export default state;
