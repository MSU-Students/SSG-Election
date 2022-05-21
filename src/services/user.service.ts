import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { UserDto } from './rest-api';

class UserService extends DefaultApi {
  async create(payload: any): Promise<UserDto> {
    const response = await ssgApiService.addUsers(payload);
    return response.data;
  }
  async getAll() {
    const response = await ssgApiService.getUserss();
    return response.data;
  }
  async getOne(account_id: number): Promise<UserDto> {
    const response = await ssgApiService.getUsers(account_id);
    return response.data;
  }
  async update(account_id: number, payload: UserDto) {
    const response = await ssgApiService.updateUsers(account_id, payload);
    return response.data;
  }
  async delete(account_id: number) {
    const response = await ssgApiService.deleteUsers(account_id);
    if (response.status === 200) {
      return response.data;
    } else {
      [];
    }
  }
  async getUserProfile() {
    const response = await ssgApiService.getProfile();
    return response.data;
  }
}

const userservice = new UserService();
export default userservice;
