import { WEBETU } from "./config";

export function loadResource<T>(url: string): Promise<T> {

    if (!url.startsWith("http")) {
        url = WEBETU + url;
    }

    return fetch(url, {
        credentials: "include"
    })

        .then((response: Response): Promise<T> => {

            if (!response.ok) {
                throw new Error("Erreur HTTP : " + response.status);
            }

            return response.json() as Promise<T>;
        });
}