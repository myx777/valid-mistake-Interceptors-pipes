import Joi from 'joi';

export const registerSchema = Joi.object().keys({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).max(20).required(),
  email: Joi.string().email().required(),
});
