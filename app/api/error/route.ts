export const runtime = "nodejs";

export async function GET(request: Request) {
  throw new Error("Test errorr");
}
