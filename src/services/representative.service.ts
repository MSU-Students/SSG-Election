import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { RepresentativeDto } from './rest-api';

class RepresentativeService extends DefaultApi {
  async create(payload: any): Promise<RepresentativeDto> {
    const response = await ssgApiService.addRepresentative(payload);
    return response.data;
  }
  async getAll(): Promise<RepresentativeDto> {
    const response = await ssgApiService.getRepresentatives();
    return response.data;
  }
  async getOne(representative_id: number): Promise<RepresentativeDto> {
    const response = await ssgApiService.getRepresentative(representative_id);
    return response.data;
  }
  async update(representative_id: number, payload: RepresentativeDto) {
    const response = await ssgApiService.updateRepresentative(representative_id, payload);
    return response.data;
  }
  async delete(representative_id: number) {
    const response = await ssgApiService.deleteRepresentative(representative_id);
    return response.data;
  }
}

const representativeservice = new RepresentativeService();
export default representativeservice;
