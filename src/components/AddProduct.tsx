import React, {useState} from "react";
import products from "./types/products";

interface AddProductProps {
    onAdd: (product: { id: number; name: string; description: string }) => void;
    onClose: () => void;
  }
  
  const AddProduct: React.FC<products> = ({ }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
     
    };
  
    return (
      <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
          />
          <button
            type="submit"
            style={{
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Add
          </button>
          <button
            type="button"
            onClick={()=>{}}
            style={{
              padding: "5px 10px",
              backgroundColor: "#ddd",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  };
  
  export default AddProduct