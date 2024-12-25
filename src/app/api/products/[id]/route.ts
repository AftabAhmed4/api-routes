import { NextResponse } from "next/server";

const products = [
  { id: 1, title: "Product 1", description: "Description 1", price: 100, category: "Category 1" },
  { id: 2, title: "Product 2", description: "Description 2", price: 200, category: "Category 2" },
  { id: 3, title: "Product 3", description: "Description 3", price: 300, category: "Category 3" },
  { id: 4, title: "Product 4", description: "Description 4", price: 100, category: "Category 1" },
  { id: 5, title: "Product 5", description: "Description 5", price: 200, category: "Category 2" },
  { id: 6, title: "Product 6", description: "Description 6", price: 300, category: "Category 3" },
];


export async function GET(request:Request, { params }: { params: { id: string } }) {
    const productsId = parseInt(params.id)
    const product = products.find((p)=> p.id === productsId)

    return NextResponse.json(product)
}