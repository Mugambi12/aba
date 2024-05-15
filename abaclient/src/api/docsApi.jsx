import { BASE_URL } from "./apiConfig";

export async function fetchDocsData() {
  try {
    const response = await fetch(`${BASE_URL}/docs/api`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching docs data:", error);
    return null;
  }
}
