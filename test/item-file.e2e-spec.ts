import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TireBrand, TireMade } from '@prisma/client';
import { CreateItemFileDto } from 'src/inventory/item-file/dto/create-item-file.dto';
import { UpdateItemFileDto } from 'src/inventory/item-file/dto/update-item-file.dto';
import { TireItemFile } from 'src/inventory/item-file/entities/item-file.entity';
import { ItemFileService } from 'src/inventory/item-file/item-file.service';
import request from 'supertest';
import { createTireItemFileMock } from '__mocks__/tire-item-file.mock';
import { AppModule } from '../src/app.module';

describe('Vendor (e2e)', () => {
  let app: INestApplication;
  let tireItemFileService: ItemFileService;
  // TODO: see if route can come from Reflection
  const basePath = '/item-file';
  let defaultTireItemFile: TireItemFile;
  let defaultTireItemFileClone;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    tireItemFileService = app.get(ItemFileService);
  });

  beforeEach(async () => {
    defaultTireItemFile = await tireItemFileService.create(
      createTireItemFileMock
    );
    defaultTireItemFileClone = {
      ...defaultTireItemFile,
      createdAt: defaultTireItemFile.createdAt.toISOString(),
      updatedAt: defaultTireItemFile.updatedAt.toISOString(),
    };
  });

  afterEach(async () => {
    await tireItemFileService.removeAll();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return all item-files (GET)', () => {
    return request(app.getHttpServer())
      .get(basePath)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toStrictEqual(
          expect.arrayContaining([defaultTireItemFileClone])
        );
      });
  });

  it('should return item-file with provided id (GET)', () => {
    return request(app.getHttpServer())
      .get(`${basePath}/${defaultTireItemFile.id}`)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toStrictEqual(defaultTireItemFileClone);
      });
  });

  it('should return 404 if provided id is incorrect (GET)', () => {
    return request(app.getHttpServer())
      .get(`${basePath}/abc`)
      .expect(404)
      .expect(({ body }) => {
        expect(body).toHaveProperty('message');
        expect(body).toHaveProperty('error');
      });
  });

  it('should create item-file with provided data (POST)', async () => {
    const tireItemFileTwo: CreateItemFileDto = {
      ...createTireItemFileMock,
      brand: TireBrand.DUNLOP,
      made: TireMade.INDONESIA,
    };
    const { body: tireItemFileTwoResponse } = await request(app.getHttpServer())
      .post(`${basePath}/`)
      .send(tireItemFileTwo)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual(expect.objectContaining(tireItemFileTwo));
        expect(body).toHaveProperty('createdAt');
        expect(body).toHaveProperty('updatedAt');
      });

    const dbTireItemFileTwo = await tireItemFileService.findOne(
      tireItemFileTwoResponse.id
    );
    return expect(dbTireItemFileTwo).toEqual(
      expect.objectContaining(tireItemFileTwo)
    );
  });

  it('should return 409 when duplicate item-file data is provided (POST)', async () => {
    return request(app.getHttpServer())
      .post(`${basePath}/`)
      .send(defaultTireItemFile)
      .expect(409)
      .expect(({ body }) => {
        expect(body).toHaveProperty('error');
        expect(body).toHaveProperty('message');
      });
  });

  it('should update item-file against an id with provided data (PATCH)', async () => {
    const tireItemFileTwo: UpdateItemFileDto = {
      brand: TireBrand.DUNLOP,
      made: TireMade.INDONESIA,
    };
    await request(app.getHttpServer())
      .patch(`${basePath}/${defaultTireItemFile.id}`)
      .send(tireItemFileTwo)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual(expect.objectContaining(tireItemFileTwo));
        expect(body).toHaveProperty('createdAt');
        expect(body).toHaveProperty('updatedAt');
        expect(new Date(body.updatedAt) > defaultTireItemFile.updatedAt).toBe(
          true
        );
      });

    const dbDefaultTireItemFile = await tireItemFileService.findOne(
      defaultTireItemFile.id
    );

    return expect(dbDefaultTireItemFile).toEqual(
      expect.objectContaining(tireItemFileTwo)
    );
  });

  it('should delete item-file against an id (DELETE)', async () => {
    await request(app.getHttpServer())
      .delete(`${basePath}/${defaultTireItemFile.id}`)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toStrictEqual(defaultTireItemFileClone);
      });

    return expect(
      tireItemFileService.findOne(defaultTireItemFile.id)
    ).rejects.toThrow('No TireItemFile found');
  });

  it('should return 200 when deleting item-file that does not exist (DELETE)', async () => {
    return request(app.getHttpServer())
      .delete(`${basePath}/abc`)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toEqual({});
      });
  });
});
