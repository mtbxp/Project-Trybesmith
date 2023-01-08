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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const connection_1 = __importDefault(require("../src/models/connection"));
function recreateDatabase(conn) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const importPath = path_1.default.resolve(__dirname, 'Trybesmith.sql');
            const seedDBContent = fs_1.default.readFileSync(importPath).toString();
            const queries = seedDBContent.split(';').filter((p) => p.trim());
            for (let i = 0; i < queries.length; i += 1) {
                const query = queries[i];
                yield conn.query(query);
            }
        }
        catch (error) {
            console.log('Banco Falha em restaurar o Banco', error);
        }
    });
}
exports.default = recreateDatabase;
if (require.main === module) {
    recreateDatabase(connection_1.default)
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Banco Restaurado com sucesso');
        yield connection_1.default.end();
        process.exit(0);
    }));
}
