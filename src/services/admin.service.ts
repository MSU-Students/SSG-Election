import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { AdminDto } from './rest-api';

class AdminService extends DefaultApi {
  async create(payload: any): Promise<AdminDto> {
    const response = await ssgApiService.addAdmin(payload);
    return response.data;
  }
  async getAll(): Promise<AdminDto> {
    const response = await ssgApiService.getAdmins();
    return response.data;
  }
  async getOne(id: number): Promise<AdminDto> {
    const response = await ssgApiService.getAdmin(id);
    return response.data;
  }
  async update(id: number, payload: AdminDto) {
    const response = await ssgApiService.updateAdmin(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteAdmin(id);
    return response.data;
  }
}

const adminservice = new AdminService();
export default adminservice;
