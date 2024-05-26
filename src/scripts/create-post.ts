import fs from "fs";
import path from "path";

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// Retrieve the arguments from the command.
const args = process.argv.slice(2);

// Check if a "name" argument was provided.
// As this parameter is mandatory, we throw an error if this parameter does not exists.
if (args.length < 1) {
  console.error(
    "Error: No name provided. Usage: npm run create-post -- <name>"
  );
  // Finishing the process.
  // This "1" means: an error was found or an abnormal termination of the process.
  process.exit(1);
}

const name = args[0];

const dirPath = "./src/content/";
const filePath = path.join(dirPath, `${name}.mdx`);

const initialContent = `---
title: "${name}"
date: "${getCurrentDate()}"
---`;

fs.writeFileSync(filePath, initialContent);

console.log(`Post ${filePath} created successfully!`);
