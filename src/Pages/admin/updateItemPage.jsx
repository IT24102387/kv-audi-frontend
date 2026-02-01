import axios from "axios";
import { use, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemPage() {
  const location =useLocation()

  console.log(location)

  const [productKey, setProductKey] = useState(location.state.key);
  const [productName, setProductName] = useState(location.state.name);
  const [productPrice, setProductPrice] = useState(location.state.price);
  const [productCategory, setProductCategory] = useState(location.state.productCategory);
  const [productDimensions, setProductDimensions] = useState(location.state.dimensions);
  const [productDescription, setProductDescription] = useState(location.state.description);
  const navigate=useNavigate()
  
  async function handleAddItem(){
   console.log(productKey,productName,productPrice,productCategory,productDimensions,productDescription)
   const token=localStorage.getItem("token")

   if(token){
    try{

    
     const result = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productKey}`,{
      
      name: productName,
      price : productPrice,
      category : productCategory,
      dimensions: productDimensions,
      description:productDescription
     
      },{
        headers :{
         Authorization: "Bearer " + token
        }

      }
    );
    toast.success(result.data.message)
    navigate("/admin/items")
    
      
    }catch(err){
      console.log(err)
      toast.error(err.response.data.error)

    } 

   }else{
    toast.error("You are not authorized to add item")
   }

   }

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      productKey,
      productName,
      productPrice,
      productCategory,
      productDimensions,
      productDescription,
    };

    console.log(newProduct);
  }

  return (
    <div className="w-full h-full flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Update Item</h1>

      <form
        onSubmit={handleSubmit}
        className="w-[400px] border rounded-lg p-5 flex flex-col gap-3"
      >
        <input
          disabled
          type="text"
          placeholder="Product Key"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="audio">Audios</option>
          <option value="lights">Lights</option>
        </select>

        <input
          type="text"
          placeholder="Product Dimensions"
          value={productDimensions}
          onChange={(e) => setProductDimensions(e.target.value)}
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border p-2 rounded"
        />

        <button onClick={handleAddItem}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Update Item
        </button>
        <button onClick={()=>{navigate("/admin/items")}}
          type="submit"
          className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
          >
          cancell
        </button>
      </form>
    </div>
  );
}