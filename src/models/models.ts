export interface IGame {
    id: number;
    slug: string;
    name: string;
    released: number;
    tba: true;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: object;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: {};
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: Date;
    esrb_rating: {
        id: number;
        slug: any;
        name: any;
    };
    platforms: [
        {
            platform: {
                id: number;
                slug: string;
                name: string;
            };
            released_at: string;
            requirements: {
                minimum: string;
                recommended: string;
            }
        }
    ]
};

export interface ServerResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}