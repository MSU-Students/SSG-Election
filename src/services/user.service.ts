import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { UserDto } from './rest-api';

class UserService extends DefaultApi {
  async create(payload: any): Promise<UserDto> {
    const response = await ssgApiService.addUsers(payload);
    return response.data;
  }
  async getAll(): Promise<UserDto> {
    const response = await ssgApiService.getUserss();
    return response.data;
  }
  async getOne(id: number): Promise<UserDto> {
    const response = await ssgApiService.getUsers(id);
    return response.data;
  }
  async update(id: number, payload: UserDto) {
    const response = await ssgApiService.updateUsers(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteUsers(id);
    return response.data;
  }
  async getUserProfile() {
    const response = await ssgApiService.getProfile();
    return response.data;
  }
}

const userservice = new UserService();
export default userservice;