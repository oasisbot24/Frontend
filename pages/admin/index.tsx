import AdminFrame from "@components/admin/adminFrame";
import Icon from "@components/basic/icon";
import { useForm } from "react-hook-form";
import { PostSigninType } from "@interfaces/signin";
import PostSignin from "@api/signin";
import router from "next/router";
import { AxiosError } from "axios";
import { checkEmail } from "@lib/check";
import { setToken } from "@lib/token";

export default function Home() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PostSigninType>();
  const submitHandler = async (data: PostSigninType) => {
    try {
      const res = await PostSignin(data);
      setToken(res);
      router.push("/admin/user");
    } catch (error) {
      const axiosError = error as AxiosError<any, any>;
      if (axiosError.response?.status == 417)
        setError("root", {
          type: "unauthorized",
          message: axiosError.response?.data.msg,
        });
    }
  };
  return (
    <AdminFrame currnetMenu="Login" className="login">
      <div className="flex flex-col w-full max-w-[400px] h-[580px] rounded-xl bg-white shadow m-auto p-12">
        <div className="w-full h-[100px] mb-12">
          <Icon src="/static/icon/favicon.svg" className="w-full h-full" />
        </div>
        <div className="font-viga text-center text-xl mb-8">Administrator</div>
        <div className="pr-8 h-[30px] border-gray-border border-b w-fit text-sm mb-4">
          Signin
        </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          autoComplete="off"
          noValidate
        >
          <div className="w-full mb-4">
            <input
              className={errors.email && "error"}
              placeholder="Email"
              type="email"
              {...register("email", {
                required: { value: true, message: "이메일을 입력해주세요" },
                validate: {
                  email: (value) =>
                    checkEmail(value) || "이메일 형식이 잘못되었습니다",
                },
              })}
            />
            <label>{errors.email?.message}</label>
          </div>
          <div className="w-full mb-4">
            <input
              className={errors.password && "error"}
              placeholder="Password"
              type="password"
              {...register("password", {
                required: { value: true, message: "비밀번호를 입력해주세요" },
              })}
            />
            <label>{errors.password?.message}</label>
          </div>
          <button className="btn btn-blue-200 rounded w-full h-[40px]">
            Signin
          </button>
          <label>{errors.root?.message}</label>
        </form>
      </div>
    </AdminFrame>
  );
}
