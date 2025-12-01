import path from "path";
import dotenv from "dotenv";

const cwd = process.cwd();
// Lade .env aus dem Projekt-Root
dotenv.config({ path: path.resolve(cwd, ".env") });

import mod from '@tiwess/toolchains/webpack.dev.js';
const dev =
	typeof mod === "function" ? mod : (mod?.default ?? mod?.default?.dev);

import { merge } from "webpack-merge";

export default merge(dev(cwd), {
	// … deine zusätzlichen Anpassungen
});
