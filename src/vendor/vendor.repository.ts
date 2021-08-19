import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VendorRepository {
    update = this.prisma.vendor.update;
    findUnique = this.prisma.vendor.findUnique;
    findMany = this.prisma.vendor.findMany;
    create = this.prisma.vendor.create;
    count = this.prisma.vendor.count;
    delete = this.prisma.vendor.delete;

    constructor(private readonly prisma: PrismaService) {}
}