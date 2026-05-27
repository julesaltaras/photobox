import { WEBETU } from "./config";

export function loadResource(url: string): Promise<any> {

    if (!url.startsWith("http")) {

        url = WEBETU + url;
    }

    return fetch(url, {
        credentials: "include"
    })

        .then((response) => {

            return response.json();
        });
}