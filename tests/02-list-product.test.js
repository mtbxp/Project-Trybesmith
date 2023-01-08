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
const recreateDatabase_1 = __importDefault(require("./recreateDatabase"));
const connection_1 = __importDefault(require("../src/models/connection"));
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
describe("2 - Crie um endpoint para a listagem de produtos", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, recreateDatabase_1.default)(connection_1.default);
    }));
    afterAll(() => {
        connection_1.default.end();
    });
    it('Será validado que é possível listar todos os produtos com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).get("/products");
        expect(result.statusCode).toEqual(200);
        expect(result.body).toBeDefined();
        expect(result.body.length).toEqual(5);
        expect(result.body[0].id).toBeDefined();
        expect(result.body[0].name).toEqual("Espada curta");
        expect(result.body[0].amount).toEqual("10 peças de ouro");
        expect(result.body[1].id).toBeDefined();
        expect(result.body[1].name).toEqual("Escudo desnecessariamente grande");
        expect(result.body[1].amount).toEqual("20 peças de ouro");
    }));
});
