import Icon from "@components/basic/icon";
import { PostPointChangeInfoType } from "@interfaces/pointChangeInfo";
import { UserType } from "@interfaces/user";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { postAdminPointChangeInfo } from "@api/admin/pointChangeInfo";
import { AxiosError } from "axios";

type Props = {
  user: UserType;
  className?: string;
};

const ControlPoint = ({ user, className }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<PostPointChangeInfoType>();

  const [saved, setSaved] = useState("");

  const SubmitHandler = async (data: PostPointChangeInfoType) => {
    try {
      data.amount = Number(data.amount);
      if (Number.isNaN(data.amount))
        setError("root", {
          type: "fail",
          message: "포인트는 숫자만 입력해주세요",
        });
      else {
        await postAdminPointChangeInfo(user.id, data);
        setSaved("저장되었습니다");
      }
    } catch (error) {
      const axiosError = error as AxiosError<any, any>;
      if (axiosError.response?.status == 417)
        setError("root", {
          type: "fail",
          message: axiosError.response?.data.msg,
        });
    }
  };

  return (
    <div className={className ?? ""}>
      <div className="bg-white flex justify-between text-blue-200 rounded-t px-4 py-2">
        <div className="my-auto">
          <div className="font-bold">Point</div>
        </div>
        <button
          className="btn btn-blue-200 px-4 rounded-full h-[30px] my-auto"
          onClick={handleSubmit(SubmitHandler)}
        >
          <div className="flex">
            <Icon
              src="/static/icon/point.svg"
              className="w-[16px] mr-2 my-auto"
            />
            <div className="my-auto">Transfer</div>
          </div>
        </button>
      </div>
      <form className="bg-gray-100 px-2 py-2" autoComplete="off" noValidate>
        <div className="flex justify-between">
          <div className="w-1/2 mr-2">
            <input
              className="h-[30px]"
              placeholder="±10000"
              type="text"
              {...register("amount", {
                required: { value: true, message: "Point를 입력해주세요" },
              })}
            />
            <label>{errors.amount?.message}</label>
          </div>
          <div className="w-1/2">
            <input
              className="h-[30px]"
              placeholder="사유"
              type="text"
              {...register("detail", {
                required: { value: true, message: "사유를 입력해주세요" },
              })}
            />
            <label>{errors.detail?.message}</label>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-xs font-semibold">
            {"분배후 포인트 : "}
            {user.point +
              (Number.isNaN(parseInt(watch("amount")?.toString()))
                ? 0
                : parseInt(watch("amount").toString()))}
          </div>
          <div className="w-fit text-right">
            <label>{errors.root?.message}</label>
            <label className="text-green">{saved}</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ControlPoint;
