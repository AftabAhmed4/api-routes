// Detail page
import React from "react";

// Define the type for `params`
interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  // Directly destructure id from params
  const { id } = params;

  // Use environment variables for the base URL
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <div>
        <h1>Product not found!</h1>
      </div>
    );
  }

  const product = await response.json();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-blue-600 font-semibold mb-2">Price: ${product.price}</p>
        <p className="text-gray-500 text-sm">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default Page;
