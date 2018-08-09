import { TestBed, inject } from '@angular/core/testing';

import { UploadOssService } from './upload-oss.service';

describe('UploadOssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadOssService]
    });
  });

  it('should be created', inject([UploadOssService], (service: UploadOssService) => {
    expect(service).toBeTruthy();
  }));
});
