export const userNameSchema = {
	required: 'Поля является обязательной'
}

export const pswSchema = {
	required: 'Поля является обязательной',
	minLength: {value: 6, message: 'Минимум 6'}
}