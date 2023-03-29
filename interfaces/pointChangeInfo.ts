import { UserType } from '@interfaces/user';
interface PointChangeInfoType {
	create_date : string
	user : UserType
	type : number
	detail : string
	amount : number
}

interface PostPointChangeInfoType {
	detail : string
	amount : number
}

export type {
	PointChangeInfoType,
	PostPointChangeInfoType
}