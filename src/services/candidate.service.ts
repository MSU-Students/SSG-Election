import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { CandidateDto } from './rest-api';

class CandidateService extends DefaultApi {
  async create(payload: any): Promise<CandidateDto> {
    const response = await ssgApiService.addCandidate(payload);
    return response.data;
  }
  async getAll(): Promise<CandidateDto> {
    const response = await ssgApiService.getCandidates();
    return response.data;
  }
  async getOne(id: number): Promise<CandidateDto> {
    const response = await ssgApiService.getCandidate(id);
    return response.data;
  }
  async update(id: number, payload: CandidateDto) {
    const response = await ssgApiService.updateCandidate(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteAdmin(id);
    return response.data;
  }
}

const candidateservice = new CandidateService();
export default candidateservice;