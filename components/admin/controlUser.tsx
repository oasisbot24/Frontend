import Icon from "@components/basic/icon"
import { PutAdminUserType, UserType } from '@interfaces/user';
import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { deleteAdminUser, putAdminUser } from "@api/admin/user";
import { useEffect, useState } from 'react';
import router from 'next/router';

type Props = {
  user : UserType
	className?: string
}

const ControlUser = ({user, className}:Props) => {
  
  const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm<PutAdminUserType>();
  const [saved, setSaved] = useState("");
  const removeHandler = async () => {
    try {
      if (confirm("정말 삭제하시겠습니까?")){
        await deleteAdminUser(user.id);
        router.push("/admin/user");
      }
    } catch (error) {
      const axiosError = error as AxiosError<any, any>;
      if (axiosError.response?.status == 417)
        setError("root", {type: "fail", message: axiosError.response?.data.msg});
    }
  };


  const submitHandler = async (data : PutAdminUserType) => {
    try {
      data.commission_rate = Number(data.commission_rate);
      data.nft = Number(data.nft);
      if (Number.isNaN(data.commission_rate) || Number.isNaN(data.nft))
        setError("root", {type: "fail", message: "수수료율과 NFT는 숫자만 입력해주세요"});
      else if (data.commission_rate < 0 || data.nft < 0)
        setError("root", {type: "fail", message: "수수료율과 NFT는 0보다 작을 수 없습니다"});
      else {
        await putAdminUser(user.id, data);
        setSaved("저장되었습니다");
      }
    } catch (error) {
      const axiosError = error as AxiosError<any, any>;
      if (axiosError.response?.status == 417)
        setError("root", {type: "fail", message: axiosError.response?.data.msg});
    }
  };

  useEffect(() => {
    setValue("commission_rate", user.commission_rate);
    setValue("nft", user.nft);
    setValue("phone", null);
    setValue("nick_name", null);
  }, [user]);
  return (
	  <div className={(className !== undefined ? className : "")}>
      <div className="bg-blue-200 flex justify-between text-white rounded-t px-4 py-2">
        <div>
          <div className="font-bold">회원정보</div>
          <div className="text-sm">{user.nick_name}</div>
        </div>
        <div className="flex">
          <button className="btn btn-red px-4 rounded-full h-[30px] my-auto mr-2" 
          onClick={removeHandler}>
            <div className="flex">
              <Icon src="/icon/delete.svg" className="w-[16px] mr-2 my-auto"/>
              <div className="my-auto">Delete</div>
            </div>
          </button>

          <button className="btn btn-white px-4 rounded-full h-[30px] my-auto" 
          onClick={handleSubmit(submitHandler)}>
            <div className="flex">
              <Icon src="/icon/save.svg" className="w-[16px] mr-2 my-auto"/>
              <div className="my-auto">Save</div>
            </div>
          </button>
        </div>
      </div>
      <form className="bg-gray-100 px-2 py-2 " autoComplete='off' noValidate >
        <div className="w-full mb-4">
          <div className="text-xs mb-1">Email</div>
          <input value={user.email} className="w-full h-[30px]" disabled/>
        </div>
        <div className="flex justify-between">
          <div className="commission_rate w-full mr-2">
            <div className="text-xs mb-1">수수료율</div>
            <input className={"h-[30px] "+(errors.commission_rate && "error")} placeholder="Rate" type="text"
            {...register("commission_rate", {
              required: {value: true, message: "수수료율을 입력해주세요"},
            })} />
          </div>
          <div className="nft w-full ">
            <div className="text-xs mb-1">NFT</div>
            <input className={"h-[30px] "+(errors.nft && "error")} placeholder="NFT" type="text"
            {...register("nft", {
              required: {value: true, message: "NFT를 입력해주세요"},
            })} />
          </div>
        </div>
        <label>{errors.root?.message}</label>
        <div className="w-full text-right"><label className="text-green">{saved}</label></div>
      </form>
	  </div>
  )
}

export default ControlUser
