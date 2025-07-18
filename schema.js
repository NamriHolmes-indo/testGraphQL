const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Mahasiswa {
    nim: ID!
    nama: String!
    alamat: String
    tanggal_lahir: String
    id_departemen: String
  }

  type Departemen {
    id: ID!
    kode_departemen: String!
    nama_departemen: String!
    fakultas: String!
  }

  type MataKuliah {
    id: ID!
    kode_mata_kuliah: String!
    nama: String!
    sks: Int!
    id_departemen: String!
  }

  type KHS {
    id: ID!
    nim: String!
    semester: Int!
    tahun_akademik: String!
    ip_semester: Float!
    sks_total: Int!
  }

  type KHSDetail {
    id: ID!
    id_khs: String!
    id_mata_kuliah: String!
    nilai: String!
  }

  type Query {
    mahasiswa: [Mahasiswa]
    departemen: [Departemen]
    mataKuliah: [MataKuliah]
    khs: [KHS]
    khsDetail: [KHSDetail]
  }
`);

module.exports = schema;
