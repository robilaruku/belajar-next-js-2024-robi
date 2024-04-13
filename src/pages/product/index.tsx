import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      <div>
        <div>
          <h1>Product Page</h1>
          <p>
            {products.map((product: productType) => (
              <div key={product.id}>{product.name}</div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
