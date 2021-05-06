import React , { useEffect } from "react";
import PostCard from "./PostCard";
import { useSelector , useDispatch } from "react-redux";
import {getPosts} from '../../redux/actions/postAction'

const Posts = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(getPosts(0))
  }, [])

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard postItem={postItem} key={postItem.id}/>
      ))}
    </div>
  );
};

export default Posts;
