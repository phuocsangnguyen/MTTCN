// import { Db, MongoClient } from 'mongodb'
// import { config } from 'process'
// const uri = 'mongodb+srv://npsang:npsang@facebook.rbzme1c.mongodb.net/?retryWrites=true&w=majority'

// async function run() {
//   try {
//     // Send a ping to confirm a successful connection.db('admin').command({ ping: 1 })
//     console.log('Pinged your deployment. You successfully connected to MongoDB!')
//   } finally {
//     // Ensures that the client will close when you finish/error)
//   }
// }
// run().catch(console.dir)
// src/services/database.services.ts
class DatabaseService {
  users: {
    insertOne: (user: any) => Promise<any>
    findOne: (query: any) => Promise<any>
  }

  constructor() {
    this.users = {
      insertOne: async (user) => {
        // Logic to insert user
        return { acknowledged: true, insertedId: 'some-id' }
      },
      findOne: async (query) => {
        // Logic to find user
        return query.email === 'exists@example.com' ? { email: 'exists@example.com', password: 'hashedpassword' } : null
      }
    }
  }
}

const databaseService = new DatabaseService()
export default databaseService
