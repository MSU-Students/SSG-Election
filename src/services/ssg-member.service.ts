import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { SsgMemberDto } from './rest-api';

class SsgMemberService extends DefaultApi {
  async create(payload: any): Promise<SsgMemberDto> {
    const response = await ssgApiService.addSsg(payload);
    return response.data;
  }
  async getAll(): Promise<SsgMemberDto> {
    const response = await ssgApiService.getSsgs();
    return response.data;
  }
  async getOne(id: number): Promise<SsgMemberDto> {
    const response = await ssgApiService.getSsg(id);
    return response.data;
  }
  async update(id: number, payload: SsgMemberDto) {
    const response = await ssgApiService.updateSsg(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteSsg(id);
    return response.data;
  }
}

const ssgMemberservice = new SsgMemberService();
export default ssgMemberservice;
