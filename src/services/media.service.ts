import { ssgApiService } from './ssg-api.service';
import { DefaultApi } from './rest-api/api';
import { MediaDto } from './rest-api';

class MediaService extends DefaultApi {
    async getPicture(id: number){
        const response = await ssgApiService.getMedia(id);
        return response.data;
      }
    
      async uploadPicture(file: File[]): Promise<MediaDto> {
        const response = await ssgApiService.uploadMedia(file);
        return response.data;
      }
}

const mediaservice = new MediaService();
export default mediaservice;