import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const imagePath = '/home/z/my-project/public/team/mr-joseph.jpg';
const outputPath = '/home/z/my-project/public/team/mr-joseph-hd.png';

const imageBuffer = fs.readFileSync(imagePath);
const base64Image = imageBuffer.toString('base64');
const dataUrl = `data:image/jpeg;base64,${base64Image}`;

async function upscale() {
  console.log('🚀 Initializing Z-AI SDK...');
  const zai = await ZAI.create();

  console.log('🎨 Upscaling Mr Joseph portrait to 864x1152...');
  const response = await zai.images.generations.edit({
    prompt:
      'Professional corporate headshot photograph of a businessman in a grey suit, red checkered shirt and red tie. Enhance to high resolution, sharpen facial details, preserve identity, lighting and composition exactly. Studio-quality portrait, no alterations to the person.',
    images: [{ url: dataUrl }],
    size: '864x1152',
  });

  const imageBase64 = response.data[0].base64;
  const outBuffer = Buffer.from(imageBase64, 'base64');
  fs.writeFileSync(outputPath, outBuffer);

  console.log(`✅ Saved upscaled image: ${outputPath}`);
  console.log(`📊 Size: ${(outBuffer.length / 1024).toFixed(1)} KB`);
}

upscale().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
