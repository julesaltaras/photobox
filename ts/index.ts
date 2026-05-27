import { loadResource } from "./photoloader";

import {
    displayPicture,
    displayCategory,
    displayComments
} from "./ui";

import {
    load,
    next,
    prev,
    first,
    last
} from "./gallery";

import { displayGallery } from "./gallery_ui";

import {
    PhotoResponse,
    CategorieResponse,
    CommentsResponse,
    GalleryResponse
} from "./types";

function getPicture(id: number): void {

    loadResource<PhotoResponse>(
        "/www/canals5/phox/api/photos/" + id
    )

        .then((data: PhotoResponse) => {

            displayPicture(data);

            loadResource<CategorieResponse>(
                data.links.categorie.href
            )

                .then(displayCategory);

            loadResource<CommentsResponse>(
                data.links.comments.href
            )

                .then(displayComments);
        });
}

function loadAndDisplayGallery(
    action: () => Promise<GalleryResponse>
): void {

    action()

        .then((data: GalleryResponse) => {

            displayGallery(data, getPicture);
        });
}

(
    document.querySelector(
        "#load_gallery"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {
        loadAndDisplayGallery(load);
    });

(
    document.querySelector(
        "#next"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {
        loadAndDisplayGallery(next);
    });

(
    document.querySelector(
        "#prev"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {
        loadAndDisplayGallery(prev);
    });

(
    document.querySelector(
        "#first"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {
        loadAndDisplayGallery(first);
    });

(
    document.querySelector(
        "#last"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {
        loadAndDisplayGallery(last);
    });

(
    document.querySelector(
        "#close_lightbox"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {

        (
            document.querySelector(
                "#lightbox"
            ) as HTMLElement
        ).style.display = "none";
    });