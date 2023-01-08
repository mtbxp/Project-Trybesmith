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
describe("4 - Crie um endpoint para listar todos os pedidos", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, recreateDatabase_1.default)(connection_1.default);
    }));
    afterAll(() => {
        connection_1.default.end();
    });
    it('Será validado que é possível listar todos os pedidos com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).get("/orders");
        expect(result.statusCode).toBe(200);
        expect(result.body.length).toBe(3);
        expect(result.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: 1, userId: 1, productsIds: expect.arrayContaining([2]) }),]));
        expect(result.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: 2, userId: 3, productsIds: expect.arrayContaining([3, 4]) }),]));
        expect(result.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: 3, userId: 2, productsIds: expect.arrayContaining([5]) })]));
    }));
});
