import React from 'react'
import image1 from '../assets/react.svg'
import { Link } from 'react-router-dom';
const ProductPage = () => {
   const products = [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        description: "High-quality wireless headphones with noise-cancellation.",
        category: "Electronics",
        stock: 50,
        imageUrl: image1,
      },
      {
        id: 2,
        name: "Smartphone",
        price: 699.99,
        description:
          "Latest smartphone with a high-resolution display and fast processor.",
        category: "Electronics",
        stock: 30,
        imageUrl: image1,
      },
      {
        id: 3,
        name: "Running Shoes",
        price: 49.99,
        description: "Comfortable running shoes with great durability.",
        category: "Footwear",
        stock: 100,
        imageUrl: image1,
      },
      {
        id: 4,
        name: "Backpack",
        price: 29.99,
        description: "Lightweight and spacious backpack for everyday use.",
        category: "Accessories",
        stock: 75,
        imageUrl: image1,
      },
      {
        id: 5,
        name: "Coffee Maker",
        price: 79.99,
        description: "Automatic coffee maker with multiple brewing options.",
        category: "Home Appliances",
        stock: 20,
        imageUrl: image1,
      },
    ];
  return (
    <div className='flex justify-center w-full flex-wrap gap-3'>
      {products.map(product=> (
        <div className='border border-black w-[40%] mt-4 p-3'>
          <img src={product.imageUrl} alt="" />
          <h2>{product.name}</h2>
          <h3>{product.category}</h3>
          <p>{product.description}</p>
          <h1>{product.price}</h1>
          <h5>{product.stock}</h5>
          <Link to={`/product-detail/${product.id}`} className='border border-green-400 p-1 bg-green-500 text-white'>Product Detail</Link>
        </div>
      ))}
    </div>
  )
}

export default ProductPage
