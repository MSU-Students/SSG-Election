import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { VoteRepDto } from './rest-api';

class VoteRepService extends DefaultApi {
  async create(payload: any): Promise<VoteRepDto> {
    const response = await ssgApiService.addVoteRep(payload);
    return response.data;
  }
  async getAll(): Promise<VoteRepDto> {
    const response = await ssgApiService.getVoteReps();
    return response.data;
  }
  async getOne(id: number): Promise<VoteRepDto> {
    const response = await ssgApiService.getVoteRep(id);
    return response.data;
  }
  async update(id: number, payload: VoteRepDto) {
    const response = await ssgApiService.updateVoteRep(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteVoteRep(id);
    return response.data;
  }
}

const voterepservice = new VoteRepService();
export default voterepservice;
