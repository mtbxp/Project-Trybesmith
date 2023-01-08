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
describe("1 - Crie um endpoint para o cadastro de produtos", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, recreateDatabase_1.default)(connection_1.default);
    }));
    afterAll(() => {
        connection_1.default.end();
    });
    it('Será validado que é possível cadastrar um produto com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const product = {
            name: 'Arco Escudo Invejável',
            amount: '3 Gemas da Noite'
        };
        const result = yield (0, supertest_1.default)(app_1.default).post("/products").send(product);
        expect(result.statusCode).toEqual(201);
        expect(result.body.id).toBeDefined();
        expect(result.body.name).toEqual(product.name);
        expect(result.body.amount).toEqual(product.amount);
        const [selected] = yield connection_1.default.execute('SELECT * FROM Trybesmith.products');
        const products = selected;
        expect(products).toEqual(expect.arrayContaining([expect.objectContaining(product)]));
    }));
});
