const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database('./cuidadora.db');

db.serialize(() => {
    // 1. Criação das Tabelas
    db.run(`CREATE TABLE IF NOT EXISTS pacientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        historico TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS registros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        paciente_id INTEGER,
        data TEXT,
        descricao TEXT,
        evolucao TEXT,
        FOREIGN KEY(paciente_id) REFERENCES pacientes(id)
    )`);

    // 2. Inserção Segura dos 4 Pacientes
    db.get("SELECT COUNT(*) as count FROM pacientes", (err, row) => {
        if (row && row.count === 0) {
            const pacientesIniciais = [
                ["Dona Aracy", "Hipertensa, necessita de auxílio para locomoção."],
                ["Seu Benedito", "Início de Alzheimer, gosta de ouvir rádio à tarde."],
                ["Dona Eunice", "Recuperação de cirurgia no fêmur, fisioterapia 2x na semana."],
                ["Seu Geraldo", "Diabético, dieta restrita e monitoramento de glicose."]
            ];

            const stmt = db.prepare("INSERT INTO pacientes (nome, historico) VALUES (?, ?)");
            
            // Aqui é onde o erro 'p' foi corrigido
            pacientesIniciais.forEach((paciente) => {
                stmt.run(paciente[0], paciente[1]);
            });

            stmt.finalize();
            console.log("4 pacientes iniciais cadastrados!");
        }
    });
});

// 3. Rotas da API
app.get('/pacientes', (req, res) => {
    db.all("SELECT * FROM pacientes", [], (err, rows) => res.json(rows));
});

app.post('/registros', (req, res) => {
    const { paciente_id, descricao, evolucao } = req.body;
    const data = new Date().toLocaleString('pt-BR');
    db.run(`INSERT INTO registros (paciente_id, data, descricao, evolucao) VALUES (?, ?, ?, ?)`,
        [paciente_id, data, descricao, evolucao], (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Registro salvo com sucesso!" });
        });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000. Pronto para o desafio!"));