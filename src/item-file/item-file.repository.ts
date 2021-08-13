import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemFileRepository {
    update = this.prisma.tireItemFile.update;
    findUnique = this.prisma.tireItemFile.findUnique;
    findMany = this.prisma.tireItemFile.findMany;
    create = this.prisma.tireItemFile.create;
    count = this.prisma.tireItemFile.count;
    delete = this.prisma.tireItemFile.delete;

    constructor(private readonly prisma: PrismaService) {}
}