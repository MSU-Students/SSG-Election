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
  async getOne(ssg_id: number): Promise<SsgMemberDto> {
    const response = await ssgApiService.getSsg(ssg_id);
    return response.data;
  }
  async update(ssg_id: number, payload: SsgMemberDto) {
    const response = await ssgApiService.updateSsg(ssg_id, payload);
    return response.data;
  }
  async delete(ssg_id: number) {
    const response = await ssgApiService.deleteSsg(ssg_id);
    return response.data;
  }
}

const ssgMemberservice = new SsgMemberService();
export default ssgMemberservice;
