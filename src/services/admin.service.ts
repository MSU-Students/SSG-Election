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
  async getOne(admin_id: number): Promise<AdminDto> {
    const response = await ssgApiService.getAdmin(admin_id);
    return response.data;
  }
  async update(admin_id: number, payload: AdminDto) {
    const response = await ssgApiService.updateAdmin(admin_id, payload);
    return response.data;
  }
  async delete(admin_id: number) {
    const response = await ssgApiService.deleteAdmin(admin_id);
    return response.data;
  }
}

const adminservice = new AdminService();
export default adminservice;
