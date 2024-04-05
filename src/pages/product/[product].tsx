import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <>
      <h1>Detail Product</h1>
      <p>Product : {query.product}</p>
    </>
  );
};

export default DetailProductPage;
