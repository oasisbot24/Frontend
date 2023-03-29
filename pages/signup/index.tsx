import Title from '@components/user/title'
import Card from '@components/user/card'
import UserFrame from '@components/user/userFrame'
import { useForm } from 'react-hook-form';
import { postUser } from '@api/user/user';
import { PostUserType } from '@interfaces/user';
import { checkEmail, checkPassword, checkPhone, checkNickName } from '@lib/check';
import { AxiosError } from 'axios';
import router from "next/router";
import Link from 'next/link';
import { useState } from 'react';

interface SignupFormType extends PostUserType {
  password_confirm : string
  terms : boolean
}

export default function Home() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<SignupFormType>();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitHandler = async (data : SignupFormType) => {
    try {
      setSubmitted(true);
      await postUser(data);
      router.push("/signup/success");
    } catch (error) {
      setSubmitted(false);
      const axiosError = error as AxiosError<any, any>;
			if (axiosError.response?.status == 417) {
        setError("email", {type: "duplicated", message: "중복된 이메일입니다"});
			}
    }
  };
  return (
    <UserFrame className="user-background-dark">
      <Card className='w-full max-w-[400px] m-auto p-8 h-full'>
        <Title className='mb-6'>Create your account</Title>
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
            {...register("password",{
              required:{value: true, message: "비밀번호를 입력해주세요"},
              minLength:{value: 10, message: "비밀번호를 10자이상 입력해주세요"}
            })} />
            <label>{errors.password?.message}</label>
          </div>
          <div className='mb-4'>
            <input className={errors.password_confirm && "error"} placeholder='Confirm Password' type='password'
            {...register("password_confirm", {
              required:{value: true, message: "비밀번호를 확인해주세요"},
              validate: {
                password_correct: (value, data) => checkPassword(data.password, value) 
                || "비밀번호가 일치하지 않습니다"
              }
            })} />
            <label>{errors.password_confirm?.message}</label>
          </div>
          <div className='mb-4'>
            <input className={errors.phone && "error"} placeholder='Phone number' type='text'
            {...register("phone",{
              required:{value: true, message: "핸드폰번호를 입력해주세요"},
              validate: {
                phone: (value) => checkPhone(value) 
                || "핸드폰번호 형식이 잘못되었습니다 (- 를 제외해주세요)"
              }
            })} />
            <label>{errors.phone?.message}</label>
          </div>
          <div className='mb-4'>
            <input className={errors.nick_name && "error"} placeholder='Nick Name' type='text'
            {...register("nick_name", {
              required:{value: true, message: "닉네임을 입력해주세요"},
              validate: {
                nick_name: (value) => checkNickName(value) 
                || "올바르지 않은 닉네임입니다"
              }
            })} />
            <label>{errors.nick_name?.message}</label>
          </div>
          <div className='mb-4'>
            <div className='flex justify-between text-2xs'>
              <div className='flex'>
                <input type="checkbox" className='mr-2'
                {...register("terms", {
                  required:{value: true, message: "이용약관에 체크해주세요"}
                })} />
                <div className='text-gray-400'>이용약관에 동의합니다.</div>
              </div>
              <Link href='/terms.pdf' target='_blank'>
                <div className='hover:text-yellow'>이용약관 보기</div>
              </Link>
            </div>
            <label>{errors.terms?.message}</label>
          </div>
          {submitted ? (
            <div className='bg-gray-500 text-center text-sm rounded w-full h-[40px] leading-[40px]'>
              Creating...
            </div>
          ) : (
            <button className='btn btn-pink rounded w-full h-[40px]' type='submit'>
              Create
            </button>
          )}
          <label>{errors.root?.message}</label>
        </form>
      </Card>
    </UserFrame>
  )
}
