import { PostType } from "./usertype"

type PostPropType={
    post: PostType
}

export default function Post({post}: PostPropType){
    return (
        <>
            <p>{post.content}</p>
            <b>{post.likes}</b>
        </>
    )
}