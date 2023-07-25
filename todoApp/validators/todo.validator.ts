import Joi, { ObjectSchema, ValidationResult } from "joi";

interface Todo {
	title: string;
	description: string;
}

const validateTodo = (body: Todo) => {
	const schema: ObjectSchema<Todo> = Joi.object({
		title: Joi.string().required().min(3).max(100),
		description: Joi.string().allow("").max(1000),
	});
	const { error } = schema.validate(body);
	return error;
};

export default validateTodo;
