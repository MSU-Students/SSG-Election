import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { TempTallyDto } from './rest-api';

class TempTallyService extends DefaultApi {
  async create(payload: any): Promise<TempTallyDto> {
    const response = await ssgApiService.addTally(payload);
    return response.data;
  }
  async getAll(): Promise<TempTallyDto> {
    const response = await ssgApiService.getTallies();
    return response.data;
  }
  async getOne(id: number): Promise<TempTallyDto> {
    const response = await ssgApiService.getTally(id);
    return response.data;
  }
  async update(id: number, payload: TempTallyDto) {
    const response = await ssgApiService.updateTally(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deleteTally(id);
    return response.data;
  }
}

const temptallyservice = new TempTallyService();
export default temptallyservice;