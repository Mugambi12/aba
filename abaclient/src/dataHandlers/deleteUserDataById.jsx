import { BASE_URL } from "../Config/Config";

export async function deleteUserDataByID(userID) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userID}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting user data:", error);
    return null;
  }
}
