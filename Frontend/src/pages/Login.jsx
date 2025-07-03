import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        login(data.user, data.token);
        toast.success("Login successful!");

        setEmail("");
        setPassword("");
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 px-4 py-10">
      {/* Logo / Title outside the card */}
      <div className="absolute top-6 right-6 text-2xl italic font-bold text-rose-700 tracking-wide">
        Help<span className="text-pink-500 italic">Desk</span> System
      </div>
      {/* Login Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-600 font-medium hover:underline cursor-pointer"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
