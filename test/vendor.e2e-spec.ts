import { INestApplication, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { VendorType } from '@prisma/client';
import { Vendor } from 'src/vendor/entities/vendor.entity';
import { VendorService } from 'src/vendor/vendor.service';
import request from 'supertest';
import { createVendorMock } from '__mocks__/vendor.mock';
import { AppModule } from '../src/app.module';

describe('Vendor (e2e)', () => {
  let app: INestApplication;
  let vendorService: VendorService;
  // TODO: see if route can come from Reflection
  let basePath = '/vendor';
  let defaultVendor: Vendor;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    vendorService = app.get(VendorService);
  });

  beforeEach(async () => {
    defaultVendor = await vendorService.create(createVendorMock);
  });

  afterEach(async () => {
    await vendorService.removeAll();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return all vendors (GET)', () => {
    return request(app.getHttpServer())
      .get(basePath)
      .expect(200)
      .expect((res) => {
        expect(res.body[0]).toHaveProperty('createdAt');
      })
      .expect((res) => {
        expect(res.body[0]).toHaveProperty('updatedAt');
      })
      .expect((res) =>
        expect(res.body).toEqual(
          expect.arrayContaining([expect.objectContaining(createVendorMock)])
        )
      );
  });

  it('should return vendor with provided id (GET)', () => {
    return request(app.getHttpServer())
      .get(`${basePath}/${defaultVendor.id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('createdAt');
      })
      .expect((res) => {
        expect(res.body).toHaveProperty('updatedAt');
      })
      .expect((res) =>
        expect(res.body).toEqual(expect.objectContaining(createVendorMock))
      );
  });

  it('should return 404 if provided id is incorrect (GET)', () => {
    return request(app.getHttpServer())
      .get(`${basePath}/abc`)
      .expect(404)
      .expect(({ body }) => {
        expect(body).toHaveProperty('message');
      })
      .expect(({ body }) => {
        expect(body).toHaveProperty('error');
      });
  });

  it('should create vendor with provided data (POST)', async () => {
    const vendorTwo = {
      ...createVendorMock,
      name: 'Vendor Two',
    };
    const { body: vendorTwoResponse } = await request(app.getHttpServer())
      .post(`${basePath}/`)
      .send(vendorTwo)
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(expect.objectContaining(vendorTwo));
      })
      .expect((res) => {
        expect(res.body).toHaveProperty('createdAt');
      })
      .expect((res) => {
        expect(res.body).toHaveProperty('updatedAt');
      });
    const dbVendorTwo = await vendorService.findOne(vendorTwoResponse.id);
    return expect(dbVendorTwo).toEqual(expect.objectContaining(vendorTwo));
  });

  it('should update vendor against an id with provided data (PATCH)', async () => {
    const vendorTwo = {
      name: 'Vendor Two',
      description: 'Some description Again',
      type: VendorType.IMPORT,
    };
    await request(app.getHttpServer())
      .patch(`${basePath}/${defaultVendor.id}`)
      .send(vendorTwo)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expect.objectContaining(vendorTwo));
      })
      .expect((res) => {
        expect(res.body).toHaveProperty('createdAt');
      })
      .expect((res) => {
        expect(res.body).toHaveProperty('updatedAt');
      });
    const dbDefaultVendor = await vendorService.findOne(defaultVendor.id);

    return expect(dbDefaultVendor).toEqual(expect.objectContaining(vendorTwo));
  });

  it('should delete vendor against an id (DELETE)', async () => {
    const defaultVendorClone = {
      ...defaultVendor,
      createdAt: defaultVendor.createdAt.toISOString(),
      updatedAt: defaultVendor.updatedAt.toISOString(),
    };
    await request(app.getHttpServer())
      .delete(`${basePath}/${defaultVendor.id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toStrictEqual(defaultVendorClone);
      });

    return expect(vendorService.findOne(defaultVendor.id)).rejects.toThrow(
      'No Vendor found'
    );
  });

  it('should return 200 when deleting vendor that does not exist (DELETE)', async () => {
    return request(app.getHttpServer())
      .delete(`${basePath}/abc`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({});
      });
  });
});
