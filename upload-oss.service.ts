import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  throwError,
} from 'rxjs';
import {
  catchError,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UploadOssService {

  constructor(
    private http: HttpClient,
  ) { }

  upload() {
    const host = 'https://petkit-img3.oss-cn-hangzhou.aliyuncs.com';
    // const host = 'http://localhost:90/api/upload';

    const policy = 'eyJleHBpcmF0aW9uIjoiMjAyMC0wMS0wMVQxMjowMDowMC4wMDBaIiwiY29uZGl0aW\
      9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF1dfQ==';
    const key = 'img/${filename}';
    const keyId =  'LTAIsS7QJff2EDV6';
    const signature = 'rTNqoK2xWUniLWYyCRa9YmPYzOg=';
    const fileName = 'test.jpg';

    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', (e) => {
      const data = new FormData();
      data.append('name', fileName);
      data.append('key', key);
      data.append('policy', policy);
      data.append('OSSAccessKeyId', keyId);
      data.append('success_action_status', '200');
      data.append('signature', signature);
      data.append('file', (e.target as any).files[0], 'test.jpg');

      this.http.post(host, data, {
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data'
        }),
        withCredentials: true,
      }).pipe(
      ).subscribe(result => {
        console.log(result);
      });

      console.log(data);
    }, false);

    console.log('upload start');
    input.click();
  }
}
