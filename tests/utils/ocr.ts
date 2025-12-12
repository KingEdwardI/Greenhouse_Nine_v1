import Tesseract from "tesseract.js";
import type { Page } from "@playwright/test";

/**
 * OCR utility for extracting and verifying text from screenshots
 */

export interface OCRResult {
  text: string;
  confidence: number;
  words: Array<{
    text: string;
    confidence: number;
    bbox: { x0: number; y0: number; x1: number; y1: number };
  }>;
}

/**
 * Extract text from a screenshot buffer using Tesseract OCR
 */
export const extractTextFromBuffer = async (
  buffer: Buffer
): Promise<OCRResult> => {
  const result = await Tesseract.recognize(buffer, "eng", {
    logger: () => {}, // Suppress logging
  });

  // Extract words from the nested structure: blocks → paragraphs → lines → words
  const words: OCRResult["words"] = [];
  if (result.data.blocks) {
    for (const block of result.data.blocks) {
      for (const paragraph of block.paragraphs) {
        for (const line of paragraph.lines) {
          for (const word of line.words) {
            words.push({
              text: word.text,
              confidence: word.confidence,
              bbox: word.bbox,
            });
          }
        }
      }
    }
  }

  return {
    text: result.data.text.trim(),
    confidence: result.data.confidence,
    words,
  };
};

/**
 * Take a screenshot of the page and extract text via OCR
 */
export const extractTextFromPage = async (page: Page): Promise<OCRResult> => {
  const screenshot = await page.screenshot({ type: "png" });
  return extractTextFromBuffer(screenshot);
};

/**
 * Take a screenshot of a specific element and extract text via OCR
 */
export const extractTextFromElement = async (
  page: Page,
  selector: string
): Promise<OCRResult> => {
  const element = page.locator(selector);
  const screenshot = await element.screenshot({ type: "png" });
  return extractTextFromBuffer(screenshot);
};

/**
 * Check if expected text appears in OCR result (case-insensitive)
 */
export const containsText = (
  ocrResult: OCRResult,
  expectedText: string
): boolean => {
  return ocrResult.text.toLowerCase().includes(expectedText.toLowerCase());
};

/**
 * Check if all expected texts appear in OCR result
 */
export const containsAllTexts = (
  ocrResult: OCRResult,
  expectedTexts: string[]
): boolean => {
  return expectedTexts.every(text => containsText(ocrResult, text));
};

/**
 * Check if any of the expected texts appear in OCR result
 */
export const containsAnyText = (
  ocrResult: OCRResult,
  expectedTexts: string[]
): boolean => {
  return expectedTexts.some(text => containsText(ocrResult, text));
};

/**
 * Get words that match a pattern (useful for finding specific UI elements)
 */
export const findMatchingWords = (
  ocrResult: OCRResult,
  pattern: RegExp
): OCRResult["words"] => {
  return ocrResult.words.filter(word => pattern.test(word.text));
};

/**
 * Assert that OCR result contains expected text with minimum confidence
 */
export const assertTextWithConfidence = (
  ocrResult: OCRResult,
  expectedText: string,
  minConfidence: number = 70
): void => {
  const foundWord = ocrResult.words.find(
    word =>
      word.text.toLowerCase().includes(expectedText.toLowerCase()) &&
      word.confidence >= minConfidence
  );

  if (!foundWord) {
    throw new Error(
      `Expected text "${expectedText}" not found with confidence >= ${minConfidence}. ` +
        `OCR text: "${ocrResult.text}", Overall confidence: ${ocrResult.confidence}`
    );
  }
};
