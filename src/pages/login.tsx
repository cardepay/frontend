import { Link } from "react-router-dom";
import logo from "../assets/favicon.svg";
import Input from "../components/Input";

const Login = () => {
  return (
    <main className="flex h-screen w-screen">
      <div className="h-full w-3/4 bg-red-500">1</div>

      <div className="h-screen w-full p-12">
        <div className="absolute top-0 right-0 p-4 text-xs">
          Not Registered?{" "}
          <Link to="/" className="text-red-500 hover:underline">
            Create an Account
          </Link>{" "}
        </div>
        <div className="">
          <Link to="/">
            <img src={logo} alt="cardepay" width={60} className="logo" />
          </Link>
          <h1 className="font-bold text-4xl">Login</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="py-12">
          <Input
            label="Email"
            type="email"
            placeholder="Enter Email"
            id="email"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            id="password"
          />

          <button className="p-3 py-4 text-white bg-red-500 text-xs w-full transition-all hover:bg-red-400 hover:text-black">
            Login
          </button>
          <Link
            to="/"
            className="my-4 block text-xs  transition-all text-red-500 hover:underline "
          >
            Forgotten Password ?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
