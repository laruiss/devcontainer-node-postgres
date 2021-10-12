import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()

const { Client } = pg

!async function () {
  const client = new Client({user: 'stan'})
  await client.connect()
  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message) // Hello world!
  await client.end()
}()