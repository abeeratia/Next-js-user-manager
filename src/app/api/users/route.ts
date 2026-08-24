import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { UserModel } from "@/schemas/user.schema";
import { User } from "@/types/select";
import { MOCK_USERS } from "@/types/constants";

export const dynamic = "force-dynamic";

const globalForUsers = global as unknown as { globalUsers: UserModel[] | undefined };
if (!globalForUsers.globalUsers) {
  globalForUsers.globalUsers = [...MOCK_USERS];
}
let globalUsers = globalForUsers.globalUsers;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.toLowerCase() || "";

  // Simulate network delay for realistic async behavior
  await new Promise((resolve) => setTimeout(resolve, 600));

  const cookieStore = await cookies();
  const customUsersStr = cookieStore.get("custom_users")?.value;
  const customUsers: UserModel[] = customUsersStr ? JSON.parse(customUsersStr) : [];
  
  let filteredUsers = [...customUsers, ...(globalForUsers.globalUsers || [])];

  if (search) {
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.fullName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
    );
  }

  // Also support the old format for Select Component if needed, but here we return full models
  return NextResponse.json({
    data: filteredUsers,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation / just assigning ID
    const newUser: UserModel = {
      ...body,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
    };

    // Add to the front of the list in the global object as fallback
    globalForUsers.globalUsers = [newUser, ...(globalForUsers.globalUsers || [])];
    globalUsers = globalForUsers.globalUsers;

    // Add to cookies for persistence
    const cookieStore = await cookies();
    const customUsersStr = cookieStore.get("custom_users")?.value;
    const customUsers: UserModel[] = customUsersStr ? JSON.parse(customUsersStr) : [];
    
    const updatedCustomUsers = [newUser, ...customUsers];
    cookieStore.set("custom_users", JSON.stringify(updatedCustomUsers), {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create user" },
      { status: 400 }
    );
  }
}
