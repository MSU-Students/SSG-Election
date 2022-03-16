import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { ElectionDto } from './rest-api';

class ElectionService extends DefaultApi {
  async create(payload: any): Promise<ElectionDto> {
    const response = await ssgApiService.addElection(payload);
    return response.data;
  }
  async getAll(): Promise<ElectionDto> {
    const response = await ssgApiService.getElections();
    return response.data;
  }
  async getOne(id: number): Promise<ElectionDto> {
    const response = await ssgApiService.getElection(id);
    return response.data;
  }
  async update(id: number, payload: ElectionDto) {
    const response = await ssgApiService.updateElection(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteElection(id);
    return response.data;
  }
}

const electionservice = new ElectionService();
export default electionservice;