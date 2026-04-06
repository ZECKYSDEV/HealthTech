const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function setupDb() {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    // Tabela de Pacientes
    await db.exec(`
        CREATE TABLE IF NOT EXISTS pacientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            idade INTEGER,
            historico TEXT
        );

        CREATE TABLE IF NOT EXISTS registros_diarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            paciente_id INTEGER,
            data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
            descricao TEXT NOT NULL,
            estado_saude TEXT,
            FOREIGN KEY (paciente_id) REFERENCES pacientes(id)
        );
    `);
    return db;
}

module.exports = setupDb;