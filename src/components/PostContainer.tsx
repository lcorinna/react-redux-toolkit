import React, { useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";


const PostContainer = () => {
	const [ limit ] = useState(10);
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);
	const [ createPost, {} ] = postAPI.useCreatePostMutation();
	const [ updatePost, {} ] = postAPI.useUpdatePostMutation();
	const [ deletePost, {} ] = postAPI.useDeletePostMutation();

	const handleCreate = async() => {
		const title = prompt();
		await createPost({title, body: title} as IPost);
	}

	const handleUpdate = (post: IPost) => {
		updatePost(post);
	};

	const handleRemove = (post: IPost) => {
		deletePost(post)
	};

	return (
		<div>
			<div className="post__list">
				<button onClick={handleCreate}>Add new post</button>
				{isLoading && <h1>Идет загрузка</h1>}
				{error && <h1>Произошла ошибка при загрузки</h1>}
				{posts && posts.map(post => 
					<PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
				)}
			</div>
		</div>
	)
}

export default PostContainer;