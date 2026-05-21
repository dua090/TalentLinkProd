import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";

export default function SignupForm() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      await api.post(
        "/auth/signup",
        data
      );

      navigate("/signin");

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

        Create Account

      </h2>

      <div className="space-y-5 mt-10">

        <input
          {...register("firstName")}
          placeholder="First Name"
          className="w-full h-14 rounded-2xl bg-[#1B2238] border border-[#2A3555] px-5"
        />

        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="w-full h-14 rounded-2xl bg-[#1B2238] border border-[#2A3555] px-5"
        />

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full h-14 rounded-2xl bg-[#1B2238] border border-[#2A3555] px-5"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full h-14 rounded-2xl bg-[#1B2238] border border-[#2A3555] px-5"
        />

        <select
          {...register("role")}
          className="w-full h-14 rounded-2xl bg-[#1B2238] border border-[#2A3555] px-5"
        >

          <option value="RECRUITER">
            Recruiter
          </option>

          <option value="CANDIDATE">
            Candidate
          </option>

        </select>

        <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500">

          Create Account

        </button>
      </div>
    </form>
  );
}