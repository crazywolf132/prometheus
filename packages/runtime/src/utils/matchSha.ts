// Comparing the sha we know, to the sha we generate.
export const matchSha = async (sha: string, text: string): Promise<boolean> => {
  // We are creating a text-encoder to create the sha
  const encoder = new TextEncoder();
  // encoding the text
  const data = encoder.encode(text);
  // creating a sha buffer from the encoded text
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  // creating a hash from the buffer
  const hash = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  // returning if the hash is the same as the sha
  return hash === sha;
};
