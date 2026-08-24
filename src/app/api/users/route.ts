import { NextResponse } from "next/server";
import { User } from "@/types/select";

const MOCK_USERS: User[] = [
  { id: "1", name: "Alice Smith", email: "alice@example.com" },
  { id: "2", name: "Bob Jones", email: "bob@example.com" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com" },
  { id: "4", name: "David Williams", email: "david@example.com" },
  { id: "5", name: "Eva Davis", email: "eva@example.com" },
  { id: "6", name: "Frank Miller", email: "frank@example.com" },
  { id: "7", name: "Grace Wilson", email: "grace@example.com" },
  { id: "8", name: "Hannah Moore", email: "hannah@example.com" },
  { id: "9", name: "Ian Taylor", email: "ian@example.com" },
  { id: "10", name: "Jane Anderson", email: "jane@example.com" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.toLowerCase() || "";

  // Simulate network delay for realistic async behavior
  await new Promise((resolve) => setTimeout(resolve, 600));

  let filteredUsers = MOCK_USERS;

  if (search) {
    filteredUsers = MOCK_USERS.filter(
      (user) =>
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
    );
  }

  return NextResponse.json({
    data: filteredUsers.slice(0, 5), // Return top 5 matches
  });
}
