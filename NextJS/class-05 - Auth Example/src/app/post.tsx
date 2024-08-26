import { PostType } from "./usertype"

type PostPropType = {
    post: PostType
}

export default function Post({ post: { content, likes } }: PostPropType) {
    return (
        <>
            <p>{content}</p>
            <b>Likes: {likes}</b>
        </>
    )
}