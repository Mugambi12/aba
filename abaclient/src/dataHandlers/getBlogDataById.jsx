import { BASE_URL } from "../Config/Config";

export async function fetchBlogDataByID(id) {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}
