import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import AuthContext from "../Contex/AuthContec";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log("User created:", result.user);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div className="">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white  shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700 ">Sign Up</h2>
          <h1 className="text-xl  text-center text-gray-700 ">See which job is suitable for you</h1>
          <div className="space-y-2">
            <button onClick={signInWithGoogle} className="flex items-center justify-center w-full px-4 py-2 text-gray-700 border rounded-md hover:border-blue-600 hover:bg-gray-100 hover:rounded-full hover:scale-105 transform transition duration-700 ">
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign Up with Google
            </button>
            <button onClick={signInWithGitHub} className="flex items-center justify-center w-full px-4 py-2 text-gray-700 border rounded-md hover:border-blue-600 hover:bg-gray-100 hover:rounded-full hover:scale-105 transform transition duration-700 ">
              <FaGithub className="w-5 h-5 mr-2" />
              Sign Up with GitHub
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-lg ">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input type="text" placeholder="Name" {...register("name", { required: "Name is required" })} className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none" />
            </div>
            <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600 hover:rounded-full hover:scale-105 transform transition duration-700">
              Sign Up
            </button>
            <div className="mt-6 text-sm text-center text-gray-600">
              Already have an account?
              <Link to={"/login"} className=" text-xl ml-3 font-semibold text-indigo-400 hover:text-indigo-800 hover:underline transition duration-300">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
