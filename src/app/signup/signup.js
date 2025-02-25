import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST method allowed" });
  }
  console.log(req.body.Cpassword)

  const { email, password, Cpassword } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: "Invalid Email" });
  }
  if(!password || !Cpassword){
    return res.status(400).json({ message: "Invalid Password" });
  }

  if (password !== Cpassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const [existingUser] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password]);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Database error", error: error.message });
  }
}
