import { API } from "./config";
import { loadResource } from "./photoloader";

let gallery: any;

export function load(): Promise<any> {

    return loadResource(API + "/photos")

        .then((data) => {

            gallery = data;

            return data;
        });
}

function getPage(name: string): Promise<any> {

    return loadResource(gallery.links[name].href)

        .then((data) => {

            gallery = data;

            return data;
        });
}

export function next(): Promise<any> {

    return getPage("next");
}

export function prev(): Promise<any> {

    return getPage("prev");
}

export function first(): Promise<any> {

    return getPage("first");
}

export function last(): Promise<any> {

    return getPage("last");
}