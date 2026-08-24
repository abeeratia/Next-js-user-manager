import { UserFormValues } from "@/schemas/user.schema";

export const apiService = {
  getUsersWithCacheBuster: async () => {
    const res = await fetch(`/api/users?_t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  },

  getUsers: async () => {
    const res = await fetch("/api/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  },

  searchUsers: async (searchTerm: string) => {
    const res = await fetch(`/api/users?search=${searchTerm}`);
    const json = await res.json();
    return json;
  },

  createUser: async (data: UserFormValues) => {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    return response.json();
  },

  getCountries: async (searchTerm: string, pageParam: number) => {
    const res = await fetch(`/api/countries?search=${searchTerm}&page=${pageParam}&limit=15`);
    const json = await res.json();
    return json;
  }
};
