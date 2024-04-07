import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const {push} = useRouter();
    useEffect(() => {
        if (!isLogin) {
            
        }
    },[])
    return (
        <>
            <h1>Product Page</h1>
        </>
    );
}

export default ProductPage;