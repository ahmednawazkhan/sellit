
export class TireItemFile {
  id                :String 
  brand             :TireBrand
  size              :TireSize
  pattern           :TirePattern
  dateOfManufacture :Date
  made              :TireMade
  createdAt         :Date   
  updatedAt         :Date    
}

enum TireBrand {
  BRIDGESTONE,
  MICHELIN,
  DUNLOP,
  SERVICE,
  YOKOHAMA
}

enum TireSize {
  ONESEVENFIVE_SEVENTY,
  ONEEIGHTFIVE_EIGHTYFIVE
}

enum TirePattern {
  CAMBER,
  CUP
}

enum TireMade {
  PAKISTAN,
  JAPAN,
  INDONESIA
}
