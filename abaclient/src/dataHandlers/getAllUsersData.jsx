import { BASE_URL } from "../Config/Config";

export async function fetchUsersData() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users data:", error);
    return null;
  }
}
