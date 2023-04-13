import Title from '@components/user/title'
import Card from '@components/user/card'
import UserFrame from '@components/user/userFrame'
import Link from 'next/link'
import router from "next/router";
import { useForm } from 'react-hook-form';
import { PostSigninType } from '@interfaces/signin';
import PostSignin from '@api/signin';
import { AxiosError } from 'axios';
import { checkEmail } from '@lib/check';
import { useState } from 'react';
import { setToken } from '@lib/token';

export default function Home() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<PostSigninType>();
  const [signed, setSigned] = useState<boolean>(false);

  const submitHandler = async (data : PostSigninType) => {
    try {
      setSigned(true);
      const res = await PostSignin(data);
      setToken(res);
      router.push("/transaction");
    } catch (error) {
      setSigned(false);
      const axiosError = error as AxiosError<any, any>;
      if (axiosError.response?.status == 417)
        setError("root", {type: "unauthorized", message: axiosError.response?.data.msg});
    }
  }
  return (
      <UserFrame className="user-background-dark">
        <Card className='w-full max-w-[400px] m-auto p-8 h-full'>
          <Title className='mb-6'>Sign In</Title>
          <form onSubmit={handleSubmit(submitHandler)} autoComplete='off' noValidate>
            <div className='mb-4'>
              <input className={errors.email && "error"} placeholder='Email' type='email' 
              {...register("email", {
                required: {value: true, message: "이메일을 입력해주세요"},
                validate: {
                  email: (value) => checkEmail(value) 
                  || "이메일 형식이 잘못되었습니다"
                }
              })} />
              <label>{errors.email?.message}</label>
            </div>
            <div className='mb-4'>
              <input className={errors.password && "error"} placeholder='Password' type='password' 
              {...register("password", {
                required: {value: true, message: "비밀번호를 입력해주세요"}
              })} />
              <label>{errors.password?.message}</label>
            </div>
            {signed ? (
              <div className='bg-gray-500 text-center text-sm rounded w-full h-[40px] leading-[40px]'>
                Signing...
              </div>
            ) : (
              <button className='btn btn-pink rounded w-full h-[40px]' type='submit'>
                Sign In
              </button>
            )}
            <label>{errors.root?.message}</label>
          </form>
          <div className='flex justify-between font-viga text-sm mt-4'>
            <div className='text-gray-400'>New to OASIS?</div>
            <Link href="/signup">
              <div className='hover:text-yellow'>Sign Up Now</div>
            </Link>
          </div> 
        </Card>
      </UserFrame>
  )
}
