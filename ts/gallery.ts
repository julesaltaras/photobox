import { API } from "./config";
import { loadResource } from "./photoloader";
import { GalleryResponse } from "./types";

let gallery: GalleryResponse;

export function load(): Promise<GalleryResponse> {

    return loadResource<GalleryResponse>(API + "/photos")

        .then((data: GalleryResponse): GalleryResponse => {

            gallery = data;

            return data;
        });
}

function getPage(name: keyof GalleryResponse["links"]): Promise<GalleryResponse> {

    return loadResource<GalleryResponse>(gallery.links[name].href)

        .then((data: GalleryResponse): GalleryResponse => {

            gallery = data;

            return data;
        });
}

export function next(): Promise<GalleryResponse> {
    return getPage("next");
}

export function prev(): Promise<GalleryResponse> {
    return getPage("prev");
}

export function first(): Promise<GalleryResponse> {
    return getPage("first");
}

export function last(): Promise<GalleryResponse> {
    return getPage("last");
}