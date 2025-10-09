#!/usr/bin/env tsx

/**
 * Script to generate radix-overrides.css from colors.ts
 * Run with: npx tsx scripts/generateRadixCSS.ts
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { colors } from '../src/tokens/colors.js';
import { generateRadixCSS } from '../src/utils/colorUtils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputPath = join(__dirname, '../src/theme/radix-overrides.css');

try {
  const cssContent = generateRadixCSS(colors);
  writeFileSync(outputPath, cssContent, 'utf8');
  console.log('✅ Generated radix-overrides.css from colors.ts');
  console.log(`📁 Output: ${outputPath}`);
} catch (error) {
  console.error('❌ Failed to generate CSS:', error);
  process.exit(1);
}
