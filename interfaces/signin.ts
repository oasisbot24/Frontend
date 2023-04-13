interface PostSigninType {
	email : string
	password : string
}

interface TokenType {
	token : string
	refresh_token : string
}

export type {
	PostSigninType,
	TokenType
};