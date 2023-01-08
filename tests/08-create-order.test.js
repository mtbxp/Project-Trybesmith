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
describe('8 - Crie um endpoint para o cadastro de um pedido', function () {
    let token;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield (0, recreateDatabase_1.default)(connection_1.default);
        const result = yield (0, supertest_1.default)(app_1.default).post('/login').send({
            username: 'yraa',
            password: 'valarmorg',
        });
        token = result.body.token;
    }));
    afterAll(() => {
        connection_1.default.end();
    });
    it('Será validado que não é possível cadastrar pedidos sem token', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/orders').send({
                productsIds: [1, 2],
            });
            expect(result.statusCode).toEqual(401);
            expect(result.body.message).toEqual('Token not found');
        });
    });
    it('Será validado que não é possível cadastrar um pedido com token inválido', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/orders').send({
                productsIds: 'amount',
            }).set('Authorization', 'Bearer 123');
            expect(result.statusCode).toEqual(401);
            expect(result.body.message).toEqual('Invalid token');
        });
    });
    it('Será validado que o campo "productsIds" é obrigatório"', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/orders').send({}).set('Authorization', token);
            expect(result.statusCode).toEqual(400);
            expect(result.body.message).toEqual('\"productsIds\" is required');
        });
    });
    it('Será validado que não é possível criar um pedido com o campo "productsIds" não sendo um array', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/orders').send({
                productsIds: 'products',
            }).set('Authorization', token);
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"productsIds\" must be an array');
        });
    });
    it('Será validado que não é possível criar um pedido com o campo "productsIds" vazio', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).post('/orders').send({
                productsIds: [],
            }).set('Authorization', token);
            expect(result.statusCode).toEqual(422);
            expect(result.body.message).toEqual('\"productsIds\" must include only numbers');
        });
    });
    it('Será validado que é possível criar um pedido com sucesso com 1', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const loggedUserId = 3;
            const fakeProductId = 6;
            const fakeProduct = {
                name: 'café sem açúcar daquele naipão',
                amount: 'meio pão de queijo',
            };
            yield (0, supertest_1.default)(app_1.default).post('/products').send(fakeProduct).set('Authorization', token);
            const result = yield (0, supertest_1.default)(app_1.default).post('/orders').send({
                productsIds: [fakeProductId],
            }).set('Authorization', token);
            expect(result.statusCode).toBe(201);
            expect(result.body).toBeDefined();
            expect(result.body.userId).toBeDefined();
            expect(result.body.userId).toBe(3);
            expect(result.body.productsIds).toBeDefined();
            expect(result.body.productsIds).toEqual([fakeProductId]);
            const [selected] = yield connection_1.default.execute('SELECT id, user_id as "userId" FROM Trybesmith.orders');
            const orders = selected;
            expect(orders).toEqual(expect.arrayContaining([expect.objectContaining({ userId: loggedUserId, id: 4 })]));
            const [selectedProducts] = yield connection_1.default.execute('SELECT id, name, amount, order_id as "orderId" FROM Trybesmith.products');
            const products = selectedProducts;
            expect(products).toEqual(expect.arrayContaining([expect.objectContaining(Object.assign(Object.assign({}, fakeProduct), { id: fakeProductId, orderId: 4 }))]));
        });
    });
    it('Será validado que é possível criar um pedido com sucesso com vários itens', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const loggedUserId = 3;
            const orderId = 4;
            const fakeProductId = 6;
            const fakeProduct2Id = 7;
            const fakeProduct = {
                name: 'Mate Couro em garrafa de ouro',
                amount: '0.5 diamante',
            };
            const fakeProduct2 = {
                name: 'Porção de Falafel +7',
                amount: '1 moeda de prata',
            };
            yield (0, supertest_1.default)(app_1.default).post('/products').send(fakeProduct).set('Authorization', token);
            yield (0, supertest_1.default)(app_1.default).post('/products').send(fakeProduct2).set('Authorization', token);
            const result = yield (0, supertest_1.default)(app_1.default).post('/orders').send({
                productsIds: [fakeProductId, fakeProduct2Id],
            }).set('Authorization', token);
            expect(result.statusCode).toBe(201);
            expect(result.body).toBeDefined();
            expect(result.body.userId).toBeDefined();
            expect(result.body.userId).toBe(loggedUserId);
            expect(result.body.productsIds).toBeDefined();
            expect(result.body.productsIds).toEqual([fakeProductId, fakeProduct2Id]);
            const [selected] = yield connection_1.default.execute('SELECT id, user_id as "userId" FROM Trybesmith.orders');
            const orders = selected;
            expect(orders).toEqual(expect.arrayContaining([expect.objectContaining({ userId: loggedUserId, id: orderId })]));
            const [selectedProducts] = yield connection_1.default.execute('SELECT id, name, amount, order_id as "orderId" FROM Trybesmith.products');
            const products = selectedProducts;
            expect(products).toEqual(expect.arrayContaining([
                expect.objectContaining(Object.assign(Object.assign({}, fakeProduct), { id: fakeProductId, orderId })),
                expect.objectContaining(Object.assign(Object.assign({}, fakeProduct2), { id: fakeProduct2Id, orderId })),
            ]));
        });
    });
});
