'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
  }

const [products, setProducts] = useState<Product[]>([])

useEffect(() => {

  const productFetch = async ()=>{
     const productApi = await fetch ('/api/products?category=Category-1')
     const productData = await productApi.json()
     setProducts(productData)
  }
  productFetch()
  
}, [])



  return (
<div>
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
          <Link
            href={`/productsDetail/${product.id}`} // Dynamic link to product details
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white block"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-blue-600 font-medium mb-2">Price: ${product.price}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
          </Link>
        ))
      }
    </div>

    <div className="text-xl text-slate-900 font-semibold">Here is new Data</div>

</div>
  );
}
