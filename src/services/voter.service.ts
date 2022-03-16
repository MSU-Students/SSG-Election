import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { VoterDto } from './rest-api';

class VoterService extends DefaultApi {
  async create(payload: any): Promise<VoterDto> {
    const response = await ssgApiService.addVoter(payload);
    return response.data;
  }
  async getAll(): Promise<VoterDto> {
    const response = await ssgApiService.getVoters();
    return response.data;
  }
  async getOne(id: number): Promise<VoterDto> {
    const response = await ssgApiService.getVoter(id);
    return response.data;
  }
  async update(id: number, payload: VoterDto) {
    const response = await ssgApiService.updateVoter(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteVoter(id);
    return response.data;
  }
}

const voterservice = new VoterService();
export default voterservice;