import {
    loadResource
} from "./photoloader";

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

import {
    displayGallery
} from "./gallery_ui";

function getPicture(id: number): void {

    loadResource(
        "/www/canals5/phox/api/photos/" + id
    )

        .then((data: any) => {

            displayPicture(data);

            loadResource(
                data.links.categorie.href
            )

                .then(displayCategory);

            loadResource(
                data.links.comments.href
            )

                .then(displayComments);
        });
}

(
    document.querySelector(
        "#load_gallery"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {

        load()

            .then((data) => {

                displayGallery(
                    data,
                    getPicture
                );
            });
    });

(
    document.querySelector(
        "#next"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {

        next()

            .then((data) => {

                displayGallery(
                    data,
                    getPicture
                );
            });
    });

(
    document.querySelector(
        "#prev"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {

        prev()

            .then((data) => {

                displayGallery(
                    data,
                    getPicture
                );
            });
    });

(
    document.querySelector(
        "#first"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {

        first()

            .then((data) => {

                displayGallery(
                    data,
                    getPicture
                );
            });
    });

(
    document.querySelector(
        "#last"
    ) as HTMLButtonElement
)

    .addEventListener("click", () => {

        last()

            .then((data) => {

                displayGallery(
                    data,
                    getPicture
                );
            });
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
        )

            .style.display = "none";
    });