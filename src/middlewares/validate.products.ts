// NAME

// [Será validado que o campo "name" é obrigatório]
// Se o campo "name" não for informado, o resultado retornado deverá ser um status http 400 e
//   { "message": "\"name\" is required" }
// [Será validado que o campo "name" tem o tipo string]

// Se o campo "name" não for do tipo string, o resultado retornado deverá ser um status http 422 e
//   { "message": "\"name\" must be a string" }
// [Será validado que o campo "name" é uma string com mais de 2 caracteres]

// Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um status http 422 e
//   { "message": "\"name\" length must be at least 3 characters long" }

// AMOUNT

// [Será validado que o campo "amount" é obrigatório]

// Se o campo "amount" não for informado, o resultado retornado deverá ser um status http 400 e
//   { "message": "\"amount\" is required" }
// [Será validado que o campo "amount" tem o tipo string]

// Se o campo "amount" não for do tipo string, o resultado retornado deverá ser um status http 422 e
//   { "message": "\"amount\" must be a string" }
// [Será validado que o campo "amount" é uma string com mais de 2 caracteres]

// Se o campo "amount" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um status http 422 e
//   { "message": "\"amount\" length must be at least 3 characters long" }