"use client";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import ProductSearch from "@/app/components/ProductSearch";
import ProductCard from "@/app/components/ProductCard";

export default function Products() {
  return (
    <div className="flex flex-col items-center">
      <head>
          <title>RMAZH | Productos</title>
          <meta 
            name="viewport" 
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
      </head>
      <body className='flex flex-col'>
        <Breadcrumbs className="p-4">
          <BreadcrumbItem href="/categories">Categorias</BreadcrumbItem>
          <BreadcrumbItem href="/products">Productos</BreadcrumbItem>
        </Breadcrumbs>
        <div className="flex flex-col items-center">
        <h1 className="text-large">Productos</h1>
        <ProductSearch />
        <ProductCard />
        </div>
      </body>
      {/* <footer className='flex align-bottom justify-center p-4'>
            <p>Copyright © 2024 RMAZH</p>
      </footer> */}
    </div>
  );
}
