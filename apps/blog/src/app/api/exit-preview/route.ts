import { exitPreview } from "@prismicio/next";

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function GET() {
  return exitPreview();
}