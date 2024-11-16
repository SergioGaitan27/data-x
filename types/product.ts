export interface IProduct {
    boxCode: string; 
    productCode: string;
    name: string;
    piecesPerBox: number;
    cost: number;
    price1: number;
    price1MinQty: number;
    price2: number;
    price2MinQty: number;
    price3: number;
    price3MinQty: number;
    imageUrl?: string;
    category: string;
  }


