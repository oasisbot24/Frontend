interface UserType {
	id : number
	email : string
	password : string
	phone : string
	nick_name : string
	point : number
	commission_rate : number
	nft : number
	"type" : number
}

interface PostUserType {
	email : string
	password : string
	phone : string
	nick_name : string
}

interface PutUserType {
	password : string
	new_password : string
	phone : string
	nick_name : string
}

interface PutAdminUserType {
	phone : string | null
	nick_name : string | null
	commission_rate : number | null
	nft : number | null
}

export type {
	UserType,
	PostUserType,
	PutUserType,
	PutAdminUserType
};