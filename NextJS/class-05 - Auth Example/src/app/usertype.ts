export type PostType = {
    content: string,
    likes: number
}

export type UserType = {
    email: string,
    password: string,
    userName: string,
    hobbies: string[],
    post: PostType[]
}