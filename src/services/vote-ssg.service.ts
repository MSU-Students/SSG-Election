import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { VoteSsgDto } from './rest-api';

class VoteSsgService extends DefaultApi {
  async create(payload: any): Promise<VoteSsgDto> {
    const response = await ssgApiService.addVoteSsg(payload);
    return response.data;
  }
  async getAll(): Promise<VoteSsgDto> {
    const response = await ssgApiService.getVoteSsgs();
    return response.data;
  }
  async getOne(id: number): Promise<VoteSsgDto> {
    const response = await ssgApiService.getVoteSsg(id);
    return response.data;
  }
  async update(id: number, payload: VoteSsgDto) {
    const response = await ssgApiService.updateVoteSsg(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteVoteSsg(id);
    return response.data;
  }
}

const votessgservice = new VoteSsgService();
export default votessgservice;
