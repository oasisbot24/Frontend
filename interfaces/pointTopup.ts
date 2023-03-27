interface PointTopupType {
	create_date : string
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
