import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimensions, setProductDimensions] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const navigate=useNavigate()

  async function handleAddItem(){
   console.log(productKey,productName,productPrice,productCategory,productDimensions,productDescription)
   const token=localStorage.getItem("token")

   if(token){
    try{

    
     const result = await axios.post("http://localhost:3000/api/products",{
      key:productKey,
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
      <h1 className="text-2xl font-bold mb-4">Add Items</h1>

      <form
        onSubmit={handleSubmit}
        className="w-[400px] border rounded-lg p-5 flex flex-col gap-3"
      >
        <input
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
          Add
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