import {
  Mail,
  Lock,
} from "lucide-react";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { useAuthStore } from "../../store/authStore";

export default function SigninForm() {

  const navigate = useNavigate();

  const { setAuth } = useAuthStore();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      const response = await api.post(
        "/auth/signin",
        data
      );

      setAuth(
        response.data.user,
        response.data.token
      );

      if (
        response.data.user.role === "RECRUITER"
      ) {

        navigate(
          "/dashboard/recruiter"
        );

      } else {

        navigate(
          "/dashboard/candidate"
        );
      }

    } catch (error) {

      alert(
        error.response.data.message
      );
    }
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md rounded-[32px] border border-white/10 bg-[#131A2E]/80 backdrop-blur-2xl p-10"
    >

      <h2 className="text-4xl font-bold">

        Welcome Back

      </h2>

      <div className="space-y-6 mt-10">

        <div className="relative">

          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full h-14 rounded-2xl bg-[#1B2238] border border-[#2A3555] pl-12"
          />
        </div>

        <div className="relative">

          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full h-14 rounded-2xl bg-[#1B2238] border border-[#2A3555] pl-12"
          />
        </div>

        <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500">

          Sign In

        </button>
      </div>
    </form>
  );
}