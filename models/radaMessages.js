import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '<PASSWORD>',
  database: 'rada'
}

const connString = DEFAULT_CONFIG

const connection = await mysql.createConnection(connString)
export class RadaMessageModel {
  static async getAlles () {
    const messages = await connection.query('SELECT * FROM messages')

    return messages
  }

  static async create ({ input }) {
    const { email, name, message } = input

    try {
      await connection.query('INSERT INTO messages (email, name, message) VALUES (?,?,?)', [email, name, message])
    } catch (error) {
      throw new Error('Error to create message')
    }
  }

  static async delete ({ id }) {
    const messageIndex = await connection.query('DELETE FROM messages WHERE id = ?', [id])
    return true
  }
}
