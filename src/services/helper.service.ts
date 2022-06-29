import Papa from 'papaparse';
import { StudentDto } from './rest-api';

class HelperService {
  async uploadMasterlist(file: File): Promise<any> {
    const name = file.name.split('.').find((e) => e == 'csv' || e == 'json');
    const type = typeof name === 'string' ? name : '';
    if (type.toLowerCase() == 'csv') {
      return new Promise((resolve) => {
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: async function (results: any) {
            const newStructure: StudentDto[] = results.data.map(
              (i: StudentDto) => {
                return {
                  school_id: String(i.school_id)|| '',
                  first_name: String(i.first_name)|| '',
                  middle_name: String(i.middle_name)|| '',
                  last_name: String(i.last_name),
                  suffix: String(i.suffix) || '',
                  email: String(i.email),
                  yr_admitted: String(i.yr_admitted)|| '',
                  college: String(i.college)|| '',
                  course: String(i.course)|| '',
                  department: String(i.department)|| '',
                  student_type: 'Regular',
                  voter_status: 'Not vote yet',
                };
              }
            );
            resolve(newStructure);
          },
        });
      });
    } else if (type.toLowerCase() == 'json') {
    } else {
      return [];
    }
  }
}

const helperService = new HelperService();
export default helperService;
