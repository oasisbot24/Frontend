import { UserType } from '@interfaces/user';
interface PointTopupType {
	create_date : string
	user : UserType
	amount : number
	tag : string
	condition : number
}

interface PostPointTopupType {
	amount : number
	tag : string
}

export type {
	PointTopupType,
	PostPointTopupType
}
