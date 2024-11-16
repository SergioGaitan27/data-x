import ProductForm from '@/app/components/ProductForm';

export default function CreateProductPage() {
  return (
    <div className="flex flex-col items-center ">
        <head>
            <title>RMAZH | Nuevo producto</title>
            <meta 
              name="viewport" 
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
        </head>
        <body className='flex flex-col'>
            <h1 className="text-center text-xl p-4">Nuevo producto</h1>
            <ProductForm />
        </body>
        <footer className='flex align-bottom justify-center p-4'>
            <p>Copyright © 2024 RMAZH</p>
        </footer>
    </div>
  );
}