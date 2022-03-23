import { StudentAcademicYr } from 'src/interfaces/student-academic-yr.interface';
import { StudentAcademicYrDto } from 'src/services/rest-api';

export interface StudentAcademicYrStateInterface {
  allStudentAcademicYr: StudentAcademicYrDto[];
  newStudentAcademicYr?: StudentAcademicYr;
}

function state(): StudentAcademicYrStateInterface {
  return {
    allStudentAcademicYr: [],
  };
}

export default state;
