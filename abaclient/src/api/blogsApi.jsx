import { BASE_URL } from "./apiConfig";

export async function fetchBlogsData() {
  try {
    const response = await fetch(`${BASE_URL}/blogs`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return null;
  }
}
