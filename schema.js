const { buildSchema } = require("graphql");

const mahasiswa = buildSchema(`
  type Mahasiswa {
    nim: ID!
    nama: String!
    alamat: String
    tanggal_lahir: String
    id_departemen: String
  }

  type Query {
    mahasiswa: [Mahasiswa]
  }
`);

const departemen = buildSchema(`
  type Departemen {
    id: ID!
    kode_departemen: String!
    nama_departemen: String!
    fakultas: String!
  }

  type Query {
    departemen: [Departemen]
  }
`);

const mataKuliah = buildSchema(`
  type MataKuliah {
    id: ID!
    kode_mata_kuliah: String!
    nama: String!
    sks: Int!
    id_departemen: String!
  }

  type Query {
    mataKuliah: [MataKuliah]
  }
`);

const khs = buildSchema(`
  type KHS {
    id: ID!
    nim: String!
    semester: Int!
    tahun_akademik: String!
    ip_semester: Float!
    sks_total: Int!
  }

  type Query {
    khs: [KHS]
  }
`);

const khsDetail = buildSchema(`
  type KHSDetail {
    id: ID!
    id_khs: String!
    id_mata_kuliah: String!
    nilai: String!
  }

  type Query {
    khsDetail: [KHSDetail]
  }
`);

module.exports = {
  mahasiswa,
  departemen,
  mataKuliah,
  khs,
  khsDetail,
};
