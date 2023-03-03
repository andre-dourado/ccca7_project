import pgp from "pg-promise";
import Connection from './Connection';

// Adapter, Wrapper = Design Pattern de comportamento
export default class PgPromiseAdapter implements Connection {
    connection: any;

    constructor () {
        this.connection = pgp()("postgres://postgres:123456@localhost:5432/app");
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }

    // conversão de uma interface em outra
    close(): Promise<void> {
        return this.connection.$pool.end();
    }
}