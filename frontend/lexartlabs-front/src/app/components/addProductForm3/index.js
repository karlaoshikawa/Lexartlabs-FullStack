"use client";
import { useState } from "react";

const AddProductForm = () => {
  const [products, setProducts] = useState([
    {
      name: "",
      brand: "",
      model: "",
      data: [{ price: 0, color: "" }],
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [name]: value };
    setProducts(updatedProducts);
  };

  const addData = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].data.push({ price: 0, color: "" });
    setProducts(updatedProducts);
  };

  const addProduct = () => {
    setProducts([
      ...products,
      {
        name: "",
        brand: "",
        model: "",
        data: [{ price: 0, color: "" }],
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(products);
    // Aqui você pode enviar os produtos para o backend ou realizar outras operações
  };

  return (
    <div>
      <h2>Adicionar Produtos</h2>
      <form onSubmit={handleSubmit}>
        {products.map((product, index) => (
          <div key={index}>
            <h3>Produto {index + 1}</h3>
            <div>
              <label htmlFor={`name-${index}`}>Nome:</label>
              <input
                type="text"
                id={`name-${index}`}
                name={`name-${index}`}
                value={product.name}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div>
              <label htmlFor={`brand-${index}`}>Marca:</label>
              <input
                type="text"
                id={`brand-${index}`}
                name={`brand-${index}`}
                value={product.brand}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div>
              <label htmlFor={`model-${index}`}>Modelo:</label>
              <input
                type="text"
                id={`model-${index}`}
                name={`model-${index}`}
                value={product.model}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            {product.data.map((data, dataIndex) => (
              <div key={dataIndex}>
                <h4>Dados {dataIndex + 1}</h4>
                <div>
                  <label htmlFor={`price-${index}-${dataIndex}`}>Preço:</label>
                  <input
                    type="number"
                    id={`price-${index}-${dataIndex}`}
                    name={`price-${index}-${dataIndex}`}
                    value={data.price}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </div>
                <div>
                  <label htmlFor={`color-${index}-${dataIndex}`}>Cor:</label>
                  <input
                    type="text"
                    id={`color-${index}-${dataIndex}`}
                    name={`color-${index}-${dataIndex}`}
                    value={data.color}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </div>
              </div>
            ))}
            <button type="button" onClick={() => addData(index)}>
              Adicionar Dados
            </button>
          </div>
        ))}
        <button type="button" onClick={addProduct}>
          Adicionar Produto
        </button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AddProductForm;

