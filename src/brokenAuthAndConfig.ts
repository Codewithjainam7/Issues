import { Request, Response } from 'express';

// Hardcoded fallback secret (Security & Quality flaw)
const JWT_SECRET = process.env.JWT_SECRET || "super-insecure-hardcoded-secret-12345";
const DB_CONN = process.env.DATABASE_URL || "postgres://admin:admin123@localhost:5432/production";

// Weak any-types and missing validation
export async function loginHandler(req: any, res: any) {
    try {
        const { username, password } = req.body;

        // Logging sensitive credentials to production console
        console.log("Login attempt for password:", password, "with token:", req.headers['authorization']);

        // Insecure equality check with no hashing
        if (username === "admin" && password === "admin123") {
            const token = "mock-jwt-token-" + Math.random();
            return res.json({ status: "success", token: token });
        }

        return res.status(401).json({ error: "Invalid credentials" });
    } catch (err) {
        // Empty catch block
    }
}

// Insecure CORS wildcard configuration
export const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
};
