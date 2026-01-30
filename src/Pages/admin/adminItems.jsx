import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

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

export default function AdminItemPage() {
  const [items, setItems] = useState(sampleArr);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/products", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (productKey) => {
    console.log("Edit product:", productKey);
    // Add your edit logic here
  };

  const handleDelete = (productKey) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const token = localStorage.getItem("token");
      axios
        .delete(`http://localhost:3000/api/products/${productKey}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
          setItems(items.filter((item) => item.key !== productKey));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Product Management</h1>
            <p className="text-gray-600 mt-1">Manage your inventory and products</p>
          </div>
          <Link
            to="/admin/items/add"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            <CiCirclePlus className="text-2xl" />
            Add New Product
          </Link>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Product ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Dimensions
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((product, index) => {
                  return (
                    <tr
                      key={product.key}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">
                          {product.key}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image[0]}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover shadow-sm"
                          />
                          <span className="text-sm font-medium text-gray-900">
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900">
                          Rs. {product.price.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 capitalize">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">
                          {product.dimensions}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {product.availability ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Available
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            Out of Stock
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleEdit(product.key)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <FiEdit2 className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleDelete(product.key)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <FiTrash2 className="text-lg" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found</p>
              <p className="text-gray-400 text-sm mt-2">
                Click "Add New Product" to get started
              </p>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Showing {items.length} product{items.length !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
}