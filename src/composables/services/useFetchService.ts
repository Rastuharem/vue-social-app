// TODO: Make backend url as env variable
const BACKEND_API_URL = "https://dummyjson.com/";

interface IGetRequestInit extends RequestInit {
  method: "GET";
}

interface IPostRequestInit extends RequestInit {
  method: "POST";
}

/**
 * Creates a fetch service that provides functions for making HTTP requests.
 *
 * @return {Object} An object containing functions for making different kind of fetch requests.
 */
export default function useFetchService() {
  /**
   * Makes a fetch request to the specified URL with optional request options.
   *
   * @param {string} url - The URL to make the request to.
   * @param {RequestInit} [options] - Optional request options.
   * @return {Promise<Response>} - A promise that resolves with the response from the server if the request is successful, or rejects with an error if the response is not ok.
   * @throws {Error} If the response is not ok.
   */
  const makeFetchRequest = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  /**
   * Makes a GET request to the specified endpoint.
   *
   * @param {string} endpoint - The endpoint to make the request to.
   * @param {IGetRequestInit} [options={ method: "GET" }] - The options for the request. Defaults to { method: "GET" }.
   * @return {Promise<Response>} - A promise that resolves with the response from the server if the request is successful, or rejects with an error if the response is not ok.
   * @throws {Error} If the response is not ok.
   */
  const makeGetRequest = async (
    endpoint: string,
    options: IGetRequestInit = { method: "GET" },
  ) => await makeFetchRequest(BACKEND_API_URL + endpoint, options);

  /**
   * Makes a POST request to the specified endpoint.
   *
   * @param {string} endpoint - The endpoint to make the request to.
   * @param {IPostRequestInit} [options={ method: "POST" }] - The options for the request. Defaults to { method: "POST" }.
   * @return {Promise<Response>} - A promise that resolves with the response from the server if the request is successful, or rejects with an error if the response is not ok.
   * @throws {Error} If the response is not ok.
   */
  const makePostRequest = async (
    endpoint: string,
    options: IPostRequestInit = { method: "POST" },
  ) => await makeFetchRequest(BACKEND_API_URL + endpoint, options);

  return { makeFetchRequest, makeGetRequest, makePostRequest };
}
