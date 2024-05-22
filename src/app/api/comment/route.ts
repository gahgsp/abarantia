export async function POST(request: Request) {
  const { comment } = await request.json();
  if (request.method === "POST") {
    return Response.json({
      author: "waifu",
      comment,
    });
  }
}
