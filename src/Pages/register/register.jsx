import axios from "axios";
import "./register.css";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !address ||
      !phone
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    // frontend only (no backend)
    console.log({
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
    });

    toast.success("Registration form submitted");
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
        email:email,
        firstName: firstName,
        lastName : lastName,
        password :password,
        address :address,
        phone :phone



    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        toast.error(err?.response?.data?.error|| "An error occured")
    })
  };

  return (
    <div className="bg-picture w-full min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
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
          <h2 className="text-3xl font-bold text-white mb-8">
            Create Account
          </h2>

          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="input-style"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="input-style mt-5"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="input-style mt-5"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input-style mt-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            className="input-style mt-5"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="input-style mt-5"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
