import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PurchaseBillRepository {

    constructor(private readonly prisma: PrismaService) { }

    update = this.prisma.purchaseBill.update;
    findUnique = this.prisma.purchaseBill.findUnique;
    findMany = this.prisma.purchaseBill.findMany;
    create = this.prisma.purchaseBill.create;
    count = this.prisma.purchaseBill.count;
    delete = this.prisma.purchaseBill.delete;
}