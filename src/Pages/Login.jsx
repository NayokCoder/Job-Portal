import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import AuthContext from "../Contex/AuthContec";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, signInWithGoogle, signInWithGitHub, loading } = useContext(AuthContext);

  // Handle form submission
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  // Handle Google sign-in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google sign-in successful:", result.user);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  // Handle GitHub sign-in
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log("GitHub sign-in successful:", result.user);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Log in to your account</h2>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-xl ml-3 font-semibold text-indigo-400 hover:text-indigo-800 hover:underline transition duration-300">
            Sign Up
          </Link>
        </p>

        {/* Social Login Buttons */}
        <div className="space-y-2">
          <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-full px-4 py-2 text-gray-700 border rounded-md hover:border-blue-600 hover:bg-gray-100 hover:rounded-full hover:scale-105 transform transition duration-700">
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign In with Google
          </button>
          <button onClick={handleGitHubSignIn} className="flex items-center justify-center w-full px-4 py-2 text-gray-700 border rounded-md hover:border-blue-600 hover:bg-gray-100 hover:rounded-full hover:scale-105 transform transition duration-700">
            <FaGithub className="w-5 h-5 mr-2" />
            Sign In with GitHub
          </button>
        </div>

        {/* Email/Password Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-lg">
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
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none" />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600 hover:rounded-full hover:scale-105 transform transition duration-700" disabled={loading}>
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
