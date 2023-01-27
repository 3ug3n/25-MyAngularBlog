export interface Post {
    id: number,
    nomeAutore: string,
    contenuto: string
}

export type NewPost = Omit<Post, 'id'>