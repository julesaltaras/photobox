import Handlebars from "handlebars";
import { WEBETU } from "./config";
import {
    GalleryResponse,
    PhotoCallback
} from "./types";

export function displayGallery(
    data: GalleryResponse,
    callback: PhotoCallback
): void {

    const source =
        (document.querySelector(
            "#galleryTemplate"
        ) as HTMLScriptElement).innerHTML;

    const template =
        Handlebars.compile(source);

    const photos = data.photos.map((p) => {

        return {
            id: p.photo.id,
            thumbnail: WEBETU + p.photo.thumbnail.href
        };
    });

    const html = template({
        photos: photos
    });

    const target =
        document.querySelector(
            "#gallery_container"
        ) as HTMLElement;

    target.innerHTML = html;

    const images =
        document.querySelectorAll(".vignette");

    images.forEach((img) => {

        img.addEventListener("click", () => {

            const id = Number(
                (img as HTMLElement).dataset.id
            );

            callback(id);
        });
    });
}