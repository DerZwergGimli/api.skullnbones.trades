import { Collection, MongoClient, MongoServerError } from "mongodb"
import { DBEntry } from "../structs/db/db_entry"

export class DBClient {
  private client: MongoClient
  private collection: Collection

  constructor(
    connection_url: string,
    db_name: string,
    collection_name: string
  ) {
    this.client = new MongoClient(connection_url)

    this.client
      .connect()
      .then((r) => console.log("> DB Connected"))
      .catch((err) => console.log(err))

    this.collection = this.client.db(db_name).collection(collection_name)

    this.collection
      .createIndex(
        { signature: 1 },
        {
          unique: true,
        }
      )
      .then((r) => console.log("> DB index created"))
      .catch((err) => console.log(err))
  }

  public async insert_data(db_entries: DBEntry[]): Promise<number> {
    let written_count = 0

    for (const db_entry of db_entries) {
      await this.collection
        .insertOne(db_entry)
        .then((result) => (written_count += 1))
        .catch((err) => {
          if (!(err instanceof MongoServerError)) {
            console.log(err)
          }
        })
    }
    return written_count
  }
}
