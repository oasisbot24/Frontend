import { removeToken, setToken } from "@lib/token";
import { AxiosError } from "axios";

const checkEmail = (email: string) => {
  var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (reg_email.test(email))
    return true;
  return false;
}

const checkPassword = (password : string, password_confirm : string) => {
  if (password === password_confirm)
    return true;
  return false;
}

const checkPhone = (phone : string) => {
  var reg_phone = /^01\d{8,9}$/;
  if (reg_phone.test(phone))
    return true;
  return false;
}

const checkNickName = (nick_name : string) => {
  var reg_nick_name = /^^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,16}$$/;
  if (reg_nick_name.test(nick_name))
    return true;
  return false;
}

const checkPoint = (point : string) => {
  var reg_point = /^[0-9]*$/
  if (reg_point.test(point))
    return true;
  return false;
}

const checkRefresh = (error : AxiosError) => {
  const header = error.response?.headers;
  if (error.response?.status === 406)
  {
    if (header?.authorization && header?.authorizationrefresh)
    {
      setToken({
        token: header.authorization,
        refresh_token: header.authorizationrefresh
      });
      return true;
    }
    else {
      removeToken();
      return false;
    }
  }
  return false;
}

export {
	checkEmail,
  checkPassword,
  checkPhone,
  checkNickName,
  checkPoint,
  checkRefresh
}