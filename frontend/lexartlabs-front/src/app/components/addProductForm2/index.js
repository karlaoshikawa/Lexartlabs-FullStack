"use client";
import { useState } from "react";

const AddProductForm2 = () => {
  const [product, setProduct] = useState({
    name: "",
    details: {
      brand: "",
      model: "",
      color: "",
    },
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      details: {
        ...prevProduct.details,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Aqui você pode enviar o produto para o backend ou realizar outras operações
  };

  return (
    <div>
      <h2>Adicionar Produto - Estrutura 2</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="brand">Marca:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={product.details.brand}
            onChange={handleDetailsChange}
          />
        </div>
        <div>
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={product.details.model}
            onChange={handleDetailsChange}
          />
        </div>
        <div>
          <label htmlFor="color">Cor:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={product.details.color}
            onChange={handleDetailsChange}
          />
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AddProductForm2;
