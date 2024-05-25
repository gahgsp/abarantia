import sqlite3Module from "sqlite3";
import { COMMENTS } from "./data";

const sqlite3 = sqlite3Module.verbose();

const db = new sqlite3.Database(
  "db/database.txt",
  sqlite3Module.OPEN_READWRITE,
  async (error) => {
    if (error) {
      console.error({ error });
      return;
    }

    await runCommand("DROP TABLE IF EXISTS comments");

    await runCommand(
      "CREATE TABLE comments (id INT PRIMARY KEY, content TEXT, author TEXT)"
    );

    for (const comment of COMMENTS) {
      await runCommand("INSERT INTO comments VALUES (?, ?, ?)", [
        comment.id,
        comment.content,
        comment.author,
      ]);
    }
  }
);

const runCommand = (
  sqlCommand: string,
  params: unknown[] = []
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run(sqlCommand, params, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
