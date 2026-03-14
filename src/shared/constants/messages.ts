export const ERROR_MESSAGE = {
  REQUIRED_FIELD: "Обязательное поле",
  INVALID_CREDENTIALS: "Неверный логин или пароль",
  INVALID_JSON_RESPONSE: "Ответ сервера не является валидным JSON",
  INCOMPLETE_USER_DATA: "Неполные данные пользователя от сервера",
  INVALID_USER_ID: "Неправильный ID пользователя",
  NETWORK_ERROR: "Ошибка сети. Попробуйте позже",
  UNKNOWN_ERROR: "Произошла ошибка. Попробуйте позже",
} as const;

export const SUCCESS_MESSAGE = {
  PRODUCT_ADDED: "Товар успешно добавлен",
} as const;
