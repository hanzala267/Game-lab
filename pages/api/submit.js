import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    const submission = {
      email,
      name,
      message,
    };

    const filePath = path.join(process.cwd(), "data", "submissions.json");
    const fileData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    fileData.push(submission);
    fs.writeFileSync(filePath, JSON.stringify(fileData)); // Write back the updated data to the file

    res.status(200).json({ message: "Form submitted successfully!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
