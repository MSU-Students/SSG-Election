import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { StudentAcademicYrDto } from './rest-api';

class StudentAcademicYrService extends DefaultApi {
  async create(payload: any): Promise<StudentAcademicYrDto> {
    const response = await ssgApiService.addStudentAcademicYear(payload);
    return response.data;
  }
  async getAll(): Promise<StudentAcademicYrDto> {
    const response = await ssgApiService.getStudentAcademicYears();
    return response.data;
  }
  async getOne(id: number): Promise<StudentAcademicYrDto> {
    const response = await ssgApiService.getStudentAcademicYear(id);
    return response.data;
  }
  async update(id: number, payload: StudentAcademicYrDto) {
    const response = await ssgApiService.updateStudentAcademicYear(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteStudentAcademicYear(id);
    return response.data;
  }
}

const studentacademicyrservice = new StudentAcademicYrService();
export default studentacademicyrservice;