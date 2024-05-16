import { BASE_URL } from "../Config/Config";

export async function deleteBlogDataByID(blogsID) {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${blogsID}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting user data:", error);
    return null;
  }
}
