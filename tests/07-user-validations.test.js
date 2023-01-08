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
describe('7 - Crie as validações para as pessoas usuárias', function () {
    it('Será validado que o campo "username" é obrigatório', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                level: 2,
                vocation: 'vocation',
                password: 'senha1234',
            });
            expect(result.statusCode).toEqual(400);
            expect(result.body.message).toEqual('\"username\" is required');
        });
    });
    it('Será validado que o campo "username" tem o tipo string', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 1,
                password: 'senha1234',
                level: 2,
                vocation: 'vocation',
            });
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"username\" must be a string');
        });
    });
    it('Será validado que o campo "username" é uma string com mais de 2 caracteres', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'Lê',
                password: 'senha1234',
                level: 2,
                vocation: 'vocation',
            });
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"username\" length must be at least 3 characters long');
        });
    });
    it('Será validado que o campo "vocation" é obrigatório', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                password: 'senha1234',
                level: 2,
            });
            expect(result.statusCode).toEqual(400);
            expect(result.body.message).toEqual('\"vocation\" is required');
        });
    });
    it('Será validado que o campo "vocation" tem o tipo string', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                password: 'senha1234',
                level: 2,
                vocation: 1,
            });
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"vocation\" must be a string');
        });
    });
    it('Será validado que o campo "vocation" é uma string com mais de 2 caracteres', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                password: 'senha1234',
                level: 2,
                vocation: 'vo',
            });
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"vocation\" length must be at least 3 characters long');
        });
    });
    it('Será validado que o campo "level" é obrigatório', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                password: 'senha1234',
                vocation: 'vocation',
            });
            expect(result.statusCode).toEqual(400);
            expect(result.body.message).toEqual('\"level\" is required');
        });
    });
    it('Será validado que o campo "level" tem o tipo number', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                password: 'senha1234',
                level: 'um',
                vocation: 'vocation',
            });
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"level\" must be a number');
        });
    });
    it('Será validado que o campo "level" deve ser um número maior que 0', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                password: 'senha1234',
                level: 0,
                vocation: 'vocation',
            });
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"level\" must be greater than or equal to 1');
        });
    });
    it('Será validado que o campo "password" é obrigatório', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                level: 2,
                vocation: 'vocation',
            });
            expect(result.statusCode).toEqual(400);
            expect(result.body.message).toEqual('\"password\" is required');
        });
    });
    it('Será validado que o campo "password" tem o tipo string', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                password: 12345678,
                level: 2,
                vocation: 'vocation',
            });
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"password\" must be a string');
        });
    });
    it('Será validado que o campo "password" é uma string com 8 ou mais caracteres', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/users').send({
                username: 'username',
                password: '1234567',
                level: 2,
                vocation: 'vocation',
            });
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"password\" length must be at least 8 characters long');
        });
    });
});
