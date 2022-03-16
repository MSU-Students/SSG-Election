import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { PositionsDto } from './rest-api';

class PositionsService extends DefaultApi {
  async create(payload: any): Promise<PositionsDto> {
    const response = await ssgApiService.addPositions(payload);
    return response.data;
  }
  async getAll(): Promise<PositionsDto> {
    const response = await ssgApiService.getPositions();
    return response.data;
  }
  async getOne(id: number): Promise<PositionsDto> {
    const response = await ssgApiService.getPosition(id);
    return response.data;
  }
  async update(id: number, payload: PositionsDto) {
    const response = await ssgApiService.updatePositions(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deletePositions(id);
    return response.data;
  }
}

const positionsservice = new PositionsService();
export default positionsservice;