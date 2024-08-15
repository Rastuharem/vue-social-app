import type { IUser } from "@/types";
import useFetchService from "@/composables/services/useFetchService";

const USER_URL = "users";

export function useUserService() {
  const fetchService = useFetchService();

  const getUser = async (userId: number): Promise<IUser | undefined> => {
    try {
      const response = await fetchService.makeGetRequest(
        `${USER_URL}/${userId}`,
      );
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return { getUser };
}
