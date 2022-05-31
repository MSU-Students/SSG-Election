import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { PositionDto } from './rest-api';

class PositionService extends DefaultApi {
  async create(payload: any): Promise<PositionDto> {
    const response = await ssgApiService.addPosition(payload);
    return response.data;
  }
  async getAll(): Promise<PositionDto> {
    const response = await ssgApiService.getPositions();
    return response.data;
  }
  async getOne(position_id: number): Promise<PositionDto> {
    const response = await ssgApiService.getPosition(position_id);
    return response.data;
  }
  async update(position_id: number, payload: PositionDto) {
    const response = await ssgApiService.updatePosition(position_id, payload);
    return response.data;
  }
  async delete(position_id: number) {
    const response = await ssgApiService.deletePosition(position_id);
    return response.data;
  }
}

const positionservice = new PositionService();
export default positionservice;
