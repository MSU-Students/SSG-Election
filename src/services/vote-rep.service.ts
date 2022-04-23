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
  async getOne(voter_rep_id: number): Promise<VoteRepDto> {
    const response = await ssgApiService.getVoteRep(voter_rep_id);
    return response.data;
  }
  async update(voter_rep_id: number, payload: VoteRepDto) {
    const response = await ssgApiService.updateVoteRep(voter_rep_id, payload);
    return response.data;
  }
  async delete(voter_rep_id: number) {
    const response = await ssgApiService.deleteVoteRep(voter_rep_id);
    return response.data;
  }
}

const voterepservice = new VoteRepService();
export default voterepservice;
