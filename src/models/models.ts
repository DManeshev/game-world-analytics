export interface IGenre {
    id: number;
    name: string;
    slug: string;
}
export interface ITag {
    games_count: number;
    id: number;
    image_background: string
    language: string
    name: string
    slug: string
}
export interface IPlatform {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}
export interface IScreen {
    id: number;
    image: string;
}

export interface IGame {
    id: number;
    slug: string;
    name: string;
    released: number;
    clip: any;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: object;
    ratings_count: number;
    reviews_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: {};
    metacritic: number;
    playtime: number;
    stores: [];
    suggestions_count: number;
    updated: Date;
    genres: IGenre[];
    tags: ITag[];
    esrb_rating: {
        id: number;
        slug: string;
        name: string;
    };
    parent_platforms: IPlatform[]; 
    dominant_color: string;
    saturated_color: string;
    platforms: IPlatform[];
    score: any;
    short_screenshots: IScreen[];
    user_game: any;
    description: string;
    description_raw: string;
    website: string;
};

export interface ServerResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}