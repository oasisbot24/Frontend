import { UserType } from '@interfaces/user';
interface TransactionType {
	user : UserType
	date : string
	exchange : string
	"type" : string
	position : string
	price : number
	volume : number
	total_price : number
	profit_loss_rate : number | null
	profit_loss : number | null
	point : number | null
}

interface PostTransactionType extends TransactionType {}

export type {
	TransactionType,
	PostTransactionType
}