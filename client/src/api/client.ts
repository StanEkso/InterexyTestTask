interface HTTPClientOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

export const createHTTPClient = (options: HTTPClientOptions) => {
  const { baseUrl = "", headers = {} } = options;
  return {
    get: <T>(
      endPoint: string,
      passedHeaders: Record<string, string> = {}
    ): Promise<T> =>
      fetch(`${baseUrl}${endPoint}`, {
        headers: { ...headers, ...passedHeaders },
      }).then((r) => {
        if (r.status !== 200) throw new Error();
        return r.json();
      }),
    post: <T>(
      endPoint: string,
      body: Partial<T>,
      passedHeaders: Record<string, string> = {}
    ): Promise<T> =>
      fetch(`${baseUrl}${endPoint}`, {
        headers: { ...headers, ...passedHeaders },
        method: "POST",
        body: JSON.stringify(body),
      }).then((r) => {
        if (r.status !== 201 && r.status !== 200) throw new Error();
        return r.json();
      }),
  };
};
