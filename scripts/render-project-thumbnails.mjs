import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = path.join(projectRoot, "public", "svg_sources");
const outputDirectory = path.join(projectRoot, "public", "projects");

const sourceFiles = (await readdir(sourceDirectory))
  .filter((file) => file.endsWith(".svg"))
  .sort();

if (sourceFiles.length === 0) {
  throw new Error(`No SVG thumbnail sources found in ${sourceDirectory}`);
}

await Promise.all(
  sourceFiles.map(async (sourceFile) => {
    const sourcePath = path.join(sourceDirectory, sourceFile);
    const outputPath = path.join(
      outputDirectory,
      `${path.basename(sourceFile, ".svg")}.png`,
    );

    await sharp(sourcePath, { density: 144 })
      .resize(1000, 1000)
      .png({ compressionLevel: 9 })
      .toFile(outputPath);

    console.log(`${path.relative(projectRoot, sourcePath)} → ${path.relative(projectRoot, outputPath)}`);
  }),
);
