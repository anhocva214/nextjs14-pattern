import axios, { AxiosRequestConfig } from "axios";
import { getCookie, setCookie } from "cookies-next";

export async function axiosClient<T>(
  config: AxiosRequestConfig,
  options?: { ssr?: boolean },
): Promise<T> {
  return new Promise((resolve, reject) => {
    axios({
      baseURL: options?.ssr
        ? process.env.CONTAINER_API
        : process.env.ENDPOINT,
      ...config,
      headers: {
        Authorization: "Bearer " + getCookie("access_token"),
        "Accept-Language": "vi",
        ...config.headers,
      },
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        if (e?.response?.status == 401) {
          setCookie("access_token", { path: "/" });
        }
        reject(e);
      });
  });
}
