import Link from "next/link";

const ProductLinks = () => {
  return (
    <div>
      <div>
        <Link href="/products">
          <div>Lista de produtos</div>
        </Link>
      </div>
      <div>
        <Link href="/add-product">
          <div>Adicionar Produto</div>
        </Link>
      </div>
      <div>
        <Link href="/delete-product">
          <div>Excluir Produto</div>
        </Link>
      </div>
    </div>
  );
};

export default ProductLinks;
