// Encryption type definitions
export interface EncryptedData {
  iv: string
  ciphertext: string
  salt?: string
}

export interface EncryptionKeys {
  publicKey: string
  privateKey: string
}
