"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*trazer todas as validações para este arquivo*/
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
jest.mock('mysql2/promise', () => {
    const connectionError = new Error("Neste requisito de validação, não é necessário conectar com o banco de dados");
    const connectionMock = jest.fn().mockImplementation(() => ({
        execute: jest.fn().mockRejectedValue(connectionError),
        query: jest.fn().mockRejectedValue(connectionError),
    }));
    return {
        createPool: connectionMock,
        createConnection: connectionMock, createPoolCluster: connectionMock
    };
});
describe('6 - Crie as validações dos produtos', function () {
    it('Será validado que o campo "name" é obrigatório', () => __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/products").send({
            amount: "amount",
        });
        expect(result.statusCode).toEqual(400);
        expect(result.body.message).toEqual("\"name\" is required");
    }));
    it('Será validado que o campo "name" tem o tipo string', () => __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/products").send({
            name: 1,
            amount: "amount",
        });
        expect(result.statusCode).toEqual(422);
        expect(result.body.message).toEqual("\"name\" must be a string");
    }));
    it('Será validado que o campo "name" é uma string com mais de 2 caracteres', () => __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/products").send({
            name: "1",
            amount: "amount",
        });
        expect(result.statusCode).toEqual(422);
        expect(result.body.message).toEqual("\"name\" length must be at least 3 characters long");
    }));
    it('Será validado que o campo "amount" é obrigatório', () => __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/products").send({
            name: "name",
        });
        expect(result.statusCode).toEqual(400);
        expect(result.body.message).toEqual("\"amount\" is required");
    }));
    it('Será validado que o campo "amount" tem o tipo string', () => __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/products").send({
            name: "name",
            amount: 1,
        });
        expect(result.statusCode).toEqual(422);
        expect(result.body.message).toEqual("\"amount\" must be a string");
    }));
    it('Será validado que o campo "amount" é uma string com mais de 2 caracteres', () => __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/products").send({
            name: "name",
            amount: "1",
        });
        expect(result.statusCode).toEqual(422);
        expect(result.body.message).toEqual("\"amount\" length must be at least 3 characters long");
    }));
});
