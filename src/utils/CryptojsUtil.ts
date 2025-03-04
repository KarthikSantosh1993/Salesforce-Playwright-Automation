const CryptoJSUtil = require("crypto-js");

// Encryption function
export function encrypt(text: string) {
  // Get the SALT from the system environment variable
  const SALT = process.env.SALT || "XYZ";
  const cipherText = CryptoJSUtil.AES.encrypt(text, SALT).toString();
  return cipherText;
}

// Decryption function
export function decrypt(cipherText: string) {
  // Get the SALT from the system environment variable
  const SALT = process.env.SALT || "XYZ";
  const decipheredText = CryptoJSUtil.AES.decrypt(cipherText, SALT);
  const originalText = decipheredText.toString(CryptoJSUtil.enc.Utf8);
  return originalText;
}