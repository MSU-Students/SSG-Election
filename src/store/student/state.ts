import { Student } from 'src/interfaces/student.interface';
import { StudentDto } from 'src/services/rest-api';

export interface StudentStateInterface {
  allStudent: StudentDto[];
  newStudent?: Student;
}

function state(): StudentStateInterface {
  return {
    allStudent: [],
  };
}

export default state;
