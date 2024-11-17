import mongoose, { Schema } from 'mongoose';
import { IProduct } from '@/types/product';

const ProductSchema: Schema = new Schema({
  boxCode: { type: String, required: true },
  productCode: { type: String, required: true },
  name: { type: String, required: true },
  piecesPerBox: { type: Number, required: true },
  cost: { type: Number },
  price1: { type: Number },
  price1MinQty: { type: Number },
  price2: { type: Number },
  price2MinQty: { type: Number },
  price3: { type: Number },
  price3MinQty: { type: Number },
  imageUrl: { type: String },
  category: { type: String, default: 'Sin categoría' }
});
ProductSchema.index({ boxCode: 1 });
ProductSchema.index({ productCode: 1 });
const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;