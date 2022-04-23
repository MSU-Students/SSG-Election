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
  async getOne(voter_ssg_id: number): Promise<VoteSsgDto> {
    const response = await ssgApiService.getVoteSsg(voter_ssg_id);
    return response.data;
  }
  async update(voter_ssg_id: number, payload: VoteSsgDto) {
    const response = await ssgApiService.updateVoteSsg(voter_ssg_id, payload);
    return response.data;
  }
  async delete(voter_ssg_id: number) {
    const response = await ssgApiService.deleteVoteSsg(voter_ssg_id);
    return response.data;
  }
}

const votessgservice = new VoteSsgService();
export default votessgservice;
