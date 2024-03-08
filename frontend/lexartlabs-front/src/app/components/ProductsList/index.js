import { useEffect, useState } from "react";
import EditProductForm from "@/app/components/editProductForm";
import { requestDelete, setToken} from "@/app/api";

const ProductsList = ({ productsList }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

  const brands = Array.from(
    new Set(productsList.map((product) => product.brand))
  );
  
  const colors = Array.from(
    new Set(productsList.map((product) => product.color))
  );
  
  const models = Array.from(
    new Set(productsList.map((product) => product.model))
  ); 

    useEffect(() => {
      const filtered = productsList.filter((product) => {
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesBrand =
          selectedBrand === "" ||
          (product.brand &&
            product.brand.toLowerCase() === selectedBrand.toLowerCase());
        const matchesColor =
          selectedColor === "" ||
          (product.color &&
            product.color.toLowerCase() === selectedColor.toLowerCase());
        const matchesModel =
          selectedModel === "" ||
          (product.model &&
            product.model.toLowerCase() === selectedModel.toLowerCase());
        const matchesPrice =
          maxPrice === "" || product.price <= parseInt(maxPrice);
        return (
          matchesSearch &&
          matchesBrand &&
          matchesColor &&
          matchesModel &&
          matchesPrice
        );
      });
      setFilteredProducts(filtered);
    }, [
      searchTerm,
      selectedBrand,
      selectedColor,
      selectedModel,
      maxPrice,
      productsList,
    ]);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (productId) => {
       try {
     const tokenStorage = localStorage.getItem("user");
     const tokenObject = JSON.parse(tokenStorage);
     const token = tokenObject.token;
     setToken(token);
     await requestDelete(
       `/products/productDelete/${productId}`,
       token
     );
     window.location.reload();
   } catch (error) {
     setError("registro inválido, por favor tente novamente");
   }

  };

  return (
    <div>
      <h1>PRODUTOS</h1>
      <div>
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Selecione a marca</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">Selecione a cor</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">Selecione o modelo</option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Preço máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Marca: {product.brand}</p>
            <p>Modelo: {product.model}</p>
            <p>Cor: {product.color}</p>
            <p>Preço: {product.price}</p>
            <button onClick={() => handleEditProduct(product)}>
              Editar Produto
            </button>
            <button onClick={() => handleDeleteProduct(product.id)}>
              Excluir Produto
            </button>
            {editingProduct && editingProduct.id === product.id && (
              <div>
                <EditProductForm product={editingProduct} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
