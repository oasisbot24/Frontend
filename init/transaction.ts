import { InitUserType } from "@init/user";
import { TransactionType } from "@interfaces/transaction";

const InitTransactionType : TransactionType = {
	user : InitUserType,
	date : '',
	exchange : '',
	"type" : '',
	position : '',
	price : 0,
	volume : 0,
	total_price : 0,
	profit_loss_rate : 0,
	profit_loss : 0,
	point : 0,
}

export {
	InitTransactionType
};