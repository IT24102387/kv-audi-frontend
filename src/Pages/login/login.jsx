import axios from "axios";
import "./login.css";           // ← keep your css, we'll tweak it below
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {   // fixed typo: LogiPage → LoginPage
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Optional: basic client-side check
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:3000/api/users/login", { email, password })
      .then((res) => {
        toast.success("Login Successful");
        const { user, token } = res.data;
        localStorage.setItem("token", token);

        // Redirect based on role
        if (user.role === "admin") {
          navigate("/admin/");           // or "/admin/dashboard" if you have sub-route
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response?.data?.error || "Login failed. Try again.");
      });
  };

  return (
    <div className="bg-picture w-full min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleOnSubmit}
        className="w-full max-w-md"   // better responsive width
      >
        <div
          className="
            backdrop-blur-xl bg-white/10 
            border border-white/20 
            rounded-3xl 
            p-8 md:p-10 
            flex flex-col items-center 
            shadow-2xl
          "
        >
          {/* Logo */}
          <img
            src="download.png"          // consider adding fallback or better path
            alt="Company Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain mb-6"
          />

          <h2 className="text-3xl font-bold text-white mb-8">Admin Login</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="
              w-full max-w-xs 
              bg-transparent 
              border-b-2 border-white/70 
              text-white placeholder-white/60 
              text-lg py-3 px-2 
              outline-none focus:border-white
              transition-all
            "
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="
              w-full max-w-xs 
              bg-transparent 
              border-b-2 border-white/70 
              text-white placeholder-white/60 
              text-lg py-3 px-2 mt-6
              outline-none focus:border-white
              transition-all
            "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-10 w-full max-w-xs 
              bg-[#210493] hover:bg-[#14047a] 
              text-white text-xl font-semibold 
              py-4 rounded-2xl 
              transition-all duration-300 
              shadow-lg
            "
          >
            Login
          </button>

          {/* Optional: small help text */}
          <p className="text-white/60 text-sm mt-6">
            Contact support if you forgot your password
          </p>
        </div>
      </form>
    </div>
  );
}