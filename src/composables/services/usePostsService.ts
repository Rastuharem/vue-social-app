/**
 * Docs for implemenented api
 * https://dummyjson.com/docs/posts
 */

import useFetchService from "@/composables/services/useFetchService";
import type { IPost, IPostList } from "@/types";

const POSTS_URL = "posts";

export default function useTaskList() {
  const fetchService = useFetchService();

  const getPostList = async (
    query: {
      limit?: number;
      skip?: number;
      sort?: {
        by: keyof IPost;
        order?: "asc" | "desc";
      };
    } = { limit: 30 },
  ): Promise<IPostList | undefined> => {
    // Generating final url
    const limitQuery = query.limit !== undefined && `limit=${query.limit}`;
    const skipQuery = query.skip !== undefined ? `skip=${query.skip}` : "";
    const sortQuery =
      query.sort !== undefined
        ? `sort=${query.sort.by}` + `&order=${query.sort?.order ?? "asc"}`
        : "";
    const queryUrl = `${POSTS_URL}?${limitQuery}&${skipQuery}&${sortQuery}`;

    try {
      const response = await fetchService.makeGetRequest(queryUrl);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = async (postId: IPost["id"]): Promise<IPost | undefined> => {
    try {
      const response = await fetchService.makeGetRequest(
        `${POSTS_URL}/${postId}`,
      );
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const searchPosts = async (
    query: string,
  ): Promise<IPostList[] | undefined> => {
    try {
      const response = await fetchService.makeGetRequest(
        `${POSTS_URL}/search?q=${query}`,
      );
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return { getPostList, getPost, searchPosts };
}
