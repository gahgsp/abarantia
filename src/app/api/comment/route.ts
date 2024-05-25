import { NextRequest } from "next/server";
import sqlite3Module from "sqlite3";

const sqlite3 = sqlite3Module.verbose();

export const GET = async (_: NextRequest) => {
  console.log("Fetching [COMMENTS] in db...");

  const comments = await new Promise((resolve) => {
    const db = new sqlite3.Database(
      "db/database.txt",
      sqlite3Module.OPEN_READWRITE,
      async (error) => {
        try {
          if (error) {
            console.error("Could not open an instance from SQLITE3.", error);
            return resolve([]);
          }

          const SQL_COMMAND = "SELECT * FROM comments";

          db.all(SQL_COMMAND, (error, rows) => {
            if (error) {
              console.error("Error while executing SQL command.", error);
              return resolve([]);
            }

            return resolve({ comments: rows });
          });
        } catch (error) {
          console.error("Failed processing SQL command result.", error);
        } finally {
          try {
            db.close();
          } catch (error) {
            console.error("Failed closing the connection.", error);
          }
        }
      }
    );
  });

  console.log("Finished fetching [COMMENTS] in db.");
  return Response.json({ comments });
};

export const POST = async (request: NextRequest) => {
  const { comment } = await request.json();

  const newComment = await new Promise((resolve) => {
    const db = new sqlite3.Database(
      "db/database.txt",
      sqlite3Module.OPEN_READWRITE,
      async (error) => {
        try {
          if (error) {
            console.error("Could not open an instance from SQLITE3.", error);
            return resolve(null);
          }

          // TODO: the "author" field will remain as a hardcoded value
          // until I add an user / authentication system.
          db.run(
            "INSERT INTO comments (content, author) VALUES (?, ?)",
            [comment, "prota"],
            (error) => {
              if (error) {
                console.error("Error while executing SQL command.", error);
              }
              return resolve(null);
            }
          );
        } catch (error) {
          console.error("Failed processing SQL command result.", error);
        } finally {
          try {
            db.close();
          } catch (error) {
            console.error("Failed closing the connection.", error);
          }
          resolve(null);
        }
      }
    );
  });

  // This return will be undefined while I do not find a clean way to at least
  // get the last inserted ID directly in the run function.
  return Response.json({ newComment });
};
