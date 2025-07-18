const db = require("./debe");

const resolvers = {
  mahasiswa: async () => {
    const result = await db.query("SELECT * FROM universitas.mahasiswa");
    return result.rows;
  },
  departemen: async () => {
    const result = await db.query("SELECT * FROM universitas.departemen");
    return result.rows;
  },
  mataKuliah: async () => {
    const result = await db.query("SELECT * FROM universitas.mata_kuliah");
    return result.rows;
  },
  khs: async () => {
    const result = await db.query("SELECT * FROM universitas.khs");
    return result.rows;
  },
  khsDetail: async () => {
    const result = await db.query("SELECT * FROM universitas.khs_detail");
    return result.rows;
  },
};

module.exports = resolvers;
