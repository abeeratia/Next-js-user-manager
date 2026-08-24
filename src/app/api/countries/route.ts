import { NextResponse } from "next/server";
import { COUNTRIES } from "@/types/constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const search = searchParams.get("search")?.toLowerCase() || "";

  // Simulate network delay for realistic async behavior
  await new Promise((resolve) => setTimeout(resolve, 500));

  const filteredCountries = COUNTRIES.filter((country) =>
    country.toLowerCase().includes(search)
  );

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCountries = filteredCountries.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedCountries,
    meta: {
      total: filteredCountries.length,
      page,
      limit,
      totalPages: Math.ceil(filteredCountries.length / limit),
      hasMore: endIndex < filteredCountries.length,
    },
  });
}
