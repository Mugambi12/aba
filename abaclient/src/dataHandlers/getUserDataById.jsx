import { BASE_URL } from "../Config/Config";

export async function fetchUserDataByID(id) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}
