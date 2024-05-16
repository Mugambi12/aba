import { BASE_URL } from "../Config/Config";

export async function fetchUserDataByID() {
  try {
    const response = await fetch(`${BASE_URL}/users/1715850051760`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users data:", error);
    return null;
  }
}
