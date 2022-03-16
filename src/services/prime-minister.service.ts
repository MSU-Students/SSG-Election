import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { PrimeMinisterDto } from './rest-api';

class PrimeMinisterService extends DefaultApi {
  async create(payload: any): Promise<PrimeMinisterDto> {
    const response = await ssgApiService.addPrime(payload);
    return response.data;
  }
  async getAll(): Promise<PrimeMinisterDto> {
    const response = await ssgApiService.getPrimes();
    return response.data;
  }
  async getOne(id: number): Promise<PrimeMinisterDto> {
    const response = await ssgApiService.getPrime(id);
    return response.data;
  }
  async update(id: number, payload: PrimeMinisterDto) {
    const response = await ssgApiService.updatePrime(id, payload);
    return response.data;
  }
  async deleteOne(id: number) {
    const response = await ssgApiService.deletePrime(id);
    return response.data;
  }
}

const primeMinisterservice = new PrimeMinisterService();
export default primeMinisterservice;