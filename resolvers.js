const { Pool } = require("pg");

const pool = new Pool({
  user: "sevima_usr",
  host: "10.0.0.97",
  database: "sevima",
  password: "5eV1mad3V",
  port: 5432,
});

const mahasiswa = {
  mahasiswa: async () => {
    const result = await pool.query("SELECT * FROM universitas.mahasiswa");
    return result.rows;
  },
};

const departemen = {
  departemen: async () => {
    const result = await pool.query("SELECT * FROM universitas.departemen");
    return result.rows;
  },
};

const mataKuliah = {
  mataKuliah: async () => {
    const result = await pool.query("SELECT * FROM universitas.mata_kuliah");
    return result.rows;
  },
};

const khs = {
  khs: async () => {
    const result = await pool.query("SELECT * FROM universitas.khs");
    return result.rows;
  },
};

const khsDetail = {
  khsDetail: async () => {
    const result = await pool.query("SELECT * FROM universitas.khs_detail");
    return result.rows;
  },
};

module.exports = {
  mahasiswa,
  departemen,
  mataKuliah,
  khs,
  khsDetail,
};
