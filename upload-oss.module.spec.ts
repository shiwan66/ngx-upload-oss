import { UploadOssModule } from './upload-oss.module';

describe('UploadOssModule', () => {
  let uploadOssModule: UploadOssModule;

  beforeEach(() => {
    uploadOssModule = new UploadOssModule();
  });

  it('should create an instance', () => {
    expect(uploadOssModule).toBeTruthy();
  });
});
