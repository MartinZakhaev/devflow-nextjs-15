import { NextRequest, NextResponse } from "next/server";

import tickets from "@/app/database";

// api/tickets/search?name=FixingButton&status=open&type=bug
// searchParams is this part
// { name: "FixingButton", status: "open", type: "bug" }
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) return NextResponse.json(tickets);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filteredTickets);
}
