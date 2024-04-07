import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    push("/product");
  };
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handlerLogin}>Login</button>
      <p>
        Belum punya akun? registrasi <Link href="/auth/register">disini</Link>
      </p>
    </>
  );
};

export default LoginPage;
