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
const connection_1 = __importDefault(require("../src/models/connection"));
const recreateDatabase_1 = __importDefault(require("./recreateDatabase"));
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
describe("5 - Crie um endpoint para o login de pessoas usuárias", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, recreateDatabase_1.default)(connection_1.default);
    }));
    afterAll(() => {
        connection_1.default.end();
    });
    it('Será validado que o campo "username" é enviado', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/login").send({
            password: "senha1234",
        });
        expect(result.statusCode).toEqual(400);
        expect(result.body.message).toEqual("\"username\" is required");
    }));
    it('Será validado que o campo "password" é enviado', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/login").send({
            username: "username",
        });
        expect(result.statusCode).toEqual(400);
        expect(result.body.message).toEqual("\"password\" is required");
    }));
    it('Será validado que não é possível fazer login com um username inválido', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/login").send({
            username: "userinvalido",
            password: "1dragaonoceu",
        });
        expect(result.statusCode).toEqual(401);
        expect(result.body.message).toEqual("Username or password invalid");
    }));
    it('Será validado que não é possível fazer login com uma senha inválida', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/login").send({
            username: "reigal",
            password: "1senharerrada",
        });
        expect(result.statusCode).toEqual(401);
        expect(result.body.message).toEqual("Username or password invalid");
    }));
    it('Será validado que é possível fazer login com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post("/login").send({
            username: "reigal",
            password: "1dragaonoceu",
        });
        expect(result.statusCode).toEqual(200);
        expect(result.body.token).toBeDefined();
    }));
});
