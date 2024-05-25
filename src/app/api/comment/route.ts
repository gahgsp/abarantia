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
  if (request.method === "POST") {
    return Response.json({
      author: "waifu",
      comment,
    });
  }
};
