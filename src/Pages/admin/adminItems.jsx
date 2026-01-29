const sampleArr = [
  {
    key: "PRD001",
    name: "Wireless Headphones",
    price: 12500,
    category: "audio",
    dimensions: "18 x 15 x 8 cm",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    availability: true,
    image: [
      "https://images.unsplash.com/photo-1518441902117-f8c0c74e8c95",
      "https://images.unsplash.com/photo-1585386959984-a41552231692"
    ]
  },
  {
    key: "PRD002",
    name: "Smart Watch",
    price: 22000,
    category: "wearables",
    dimensions: "4.5 x 4.5 x 1.2 cm",
    description: "Smart watch with fitness tracking, heart rate monitoring, and message notifications.",
    availability: true,
    image: [
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    ]
  },
  {
    key: "PRD003",
    name: "Bluetooth Speaker",
    price: 9800,
    category: "audio",
    dimensions: "20 x 8 x 8 cm",
    description: "Portable Bluetooth speaker with deep bass and water-resistant design.",
    availability: false,
    image: [
      "https://images.unsplash.com/photo-1585386959984-a41552231692"
    ]
  },
  {
    key: "PRD004",
    name: "Gaming Mouse",
    price: 4500,
    category: "accessories",
    dimensions: "12 x 6 x 4 cm",
    description: "Ergonomic gaming mouse with RGB lighting and adjustable DPI.",
    availability: true,
    image: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
    ]
  },
  {
    key: "PRD005",
    name: "Laptop Backpack",
    price: 6500,
    category: "bags",
    dimensions: "45 x 30 x 15 cm",
    description: "Durable laptop backpack with multiple compartments and water-resistant material.",
    availability: true,
    image: [
      "https://images.unsplash.com/photo-1522199710521-72d69614c702"
    ]
  }
];

import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItemPage(){
    const [items,setItems]=useState(sampleArr)
    return(
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <th>key</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>category</th>
                    <th>Dimensions</th>
                    <th>Availability</th>
                    

                </thead>
                <tbody>
                    {
                        items.map((product)=>{
                            console.log(product)
                            return(
                                <tr key={product.key}>
                                    <td>{product.key}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.availability ? "Available" : "Not Available"}</td>
                                </tr>
                            )

                        })

                    }

                </tbody>

            </table>
            
        </div>
    )

}