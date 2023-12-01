import { apiUrl } from "@/util/api/api-url";
import serverErrorResponseModel from "@/util/api/error-response";

export async function POST(request: Request) {
  try {
    const response = await fetch(apiUrl("/auth/register"), {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(await request.json())
    });

    return response;
  } catch (e: any) {
    if (e instanceof Error) {
      console.error(`Route handler threw: ${e}`);
    }
  }

  return Response.json(serverErrorResponseModel, { status: 500 });
}
