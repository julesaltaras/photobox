import Handlebars from "handlebars";
import { WEBETU } from "./config";
import {
    PhotoResponse,
    CategorieResponse,
    CommentsResponse,
    Commentaire
} from "./types";

export function displayPicture(data: PhotoResponse): void {

    const source =
        (document.querySelector(
            "#photoTemplate"
        ) as HTMLScriptElement).innerHTML;

    const template =
        Handlebars.compile(source);

    const html = template({
        titre: data.photo.titre,
        description: data.photo.descr,
        type: data.photo.type,
        width: data.photo.width,
        height: data.photo.height,
        url: WEBETU + data.photo.url.href
    });

    const target =
        document.querySelector(
            "#lightbox_content"
        ) as HTMLElement;

    target.innerHTML = html;

    const lightbox =
        document.querySelector(
            "#lightbox"
        ) as HTMLElement;

    lightbox.style.display = "flex";
}

export function displayCategory(data: CategorieResponse): void {

    const categorie =
        document.querySelector(
            "#la_categorie"
        ) as HTMLElement;

    categorie.textContent =
        "categorie : " + data.categorie.nom;
}

export function displayComments(data: CommentsResponse): void {

    const ul =
        document.querySelector(
            "#les_commentaires"
        ) as HTMLUListElement;

    ul.innerHTML = "";

    data.comments.forEach((c: Commentaire) => {

        const li =
            document.createElement("li");

        li.textContent =
            c.pseudo + " : " + c.content;

        ul.appendChild(li);
    });
}