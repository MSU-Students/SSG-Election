import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { StudentDto } from './rest-api';

class StudentService extends DefaultApi {
  async create(payload: any): Promise<StudentDto> {
    const response = await ssgApiService.addStudent(payload);
    return response.data;
  }
  async getAll(): Promise<StudentDto> {
    const response = await ssgApiService.getStudents();
    return response.data;
  }
  async getOne(student_id: number): Promise<StudentDto> {
    const response = await ssgApiService.getStudent(student_id);
    return response.data;
  }
  async update(student_id: number, payload: StudentDto) {
    const response = await ssgApiService.updateStudent(student_id, payload);
    return response.data;
  }
  async delete(student_id: number) {
    const response = await ssgApiService.deleteStudent(student_id);
    return response.data;
  }
}

const studentservice = new StudentService();
export default studentservice;