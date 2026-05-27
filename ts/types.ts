export interface Link {
    href: string;
}

export interface PhotoData {
    id: number;
    titre: string;
    file: string;
    descr: string;
    format: string;
    type: string;
    size: number;
    width: number;
    height: number;
    url: Link;
    thumbnail: Link;
}

export interface PhotoResponse {
    type: string;
    photo: PhotoData;
    links: {
        categorie: Link;
        comments: Link;
    };
}

export interface CategorieResponse {
    type: string;
    categorie: {
        id: number;
        nom: string;
    };
}

export interface Commentaire {
    pseudo: string;
    content: string;
}

export interface CommentsResponse {
    type: string;
    comments: Commentaire[];
}

export interface GalleryPhoto {
    photo: PhotoData;
}

export interface GalleryResponse {
    type: string;
    photos: GalleryPhoto[];
    links: {
        first: Link;
        prev: Link;
        next: Link;
        last: Link;
    };
}

export type PhotoCallback = (id: number) => void;