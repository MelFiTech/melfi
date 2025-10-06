const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const INPUT_DIR = 'public';
const OUTPUT_DIR = 'public/optimized';
const QUALITY = 85;
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 75;

// Image sizes for responsive images
const SIZES = {
  small: 400,
  medium: 800,
  large: 1200,
  xlarge: 1920,
};

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to get all image files recursively
function getAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllImageFiles(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to optimize a single image
async function optimizeImage(inputPath, outputDir) {
  const relativePath = path.relative(INPUT_DIR, inputPath);
  const dir = path.dirname(relativePath);
  const name = path.basename(relativePath, path.extname(relativePath));

  const outputBaseDir = path.join(outputDir, dir);
  if (!fs.existsSync(outputBaseDir)) {
    fs.mkdirSync(outputBaseDir, { recursive: true });
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Processing: ${relativePath}`);
    console.log(
      `  Original: ${metadata.width}x${metadata.height}, ${Math.round(metadata.size / 1024)}KB`
    );

    // Generate WebP versions
    for (const [sizeName, width] of Object.entries(SIZES)) {
      if (metadata.width >= width) {
        const outputPath = path.join(outputBaseDir, `${name}-${sizeName}.webp`);
        await image
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log(`  WebP ${sizeName}: ${width}px, ${Math.round(stats.size / 1024)}KB`);
      }
    }

    // Generate AVIF versions (smaller but less supported)
    for (const [sizeName, width] of Object.entries(SIZES)) {
      if (metadata.width >= width) {
        const outputPath = path.join(outputBaseDir, `${name}-${sizeName}.avif`);
        await image
          .resize(width, null, { withoutEnlargement: true })
          .avif({ quality: AVIF_QUALITY })
          .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log(`  AVIF ${sizeName}: ${width}px, ${Math.round(stats.size / 1024)}KB`);
      }
    }

    // Generate optimized original format
    const originalOutputPath = path.join(outputBaseDir, `${name}.${metadata.format}`);
    await image
      .resize(metadata.width, metadata.height, { withoutEnlargement: true })
      .jpeg({ quality: QUALITY })
      .png({ quality: QUALITY })
      .toFile(originalOutputPath);

    const stats = fs.statSync(originalOutputPath);
    console.log(
      `  Optimized ${metadata.format}: ${metadata.width}x${metadata.height}, ${Math.round(
        stats.size / 1024
      )}KB`
    );

    console.log(`  ✅ Completed: ${relativePath}\n`);
  } catch (error) {
    console.error(`❌ Error processing ${relativePath}:`, error.message);
  }
}

// Main function
async function main() {
  console.log('🚀 Starting image optimization...\n');

  const imageFiles = getAllImageFiles(INPUT_DIR);
  console.log(`Found ${imageFiles.length} images to process\n`);

  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath, OUTPUT_DIR);
  }

  console.log('🎉 Image optimization completed!');
  console.log(`\nOptimized images are in: ${OUTPUT_DIR}`);
  console.log('\nNext steps:');
  console.log('1. Update your components to use the optimized images');
  console.log('2. Implement responsive image loading with srcset');
  console.log('3. Test the performance improvements');
}

// Run the optimization
main().catch(console.error);
