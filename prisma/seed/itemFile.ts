import { TireBrand, TireMade, TirePattern, TireSize } from '@prisma/client';

export const tireItemData = [
  {
    brand: TireBrand.BRIDGESTONE,
    size: TireSize.ONEEIGHTFIVE_EIGHTYFIVE,
    pattern: TirePattern.CAMBER,
    made: TireMade.PAKISTAN,
  },
  {
    brand: TireBrand.DUNLOP,
    size: TireSize.ONESEVENFIVE_SEVENTY,
    pattern: TirePattern.CUP,
    made: TireMade.INDONESIA,
  },
  {
    brand: TireBrand.MICHELIN,
    size: TireSize.ONEEIGHTFIVE_EIGHTYFIVE,
    pattern: TirePattern.CUP,
    made: TireMade.JAPAN,
  },
];
