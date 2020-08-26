import React from "react";
import Stories from "./Stories";
import Create from "./Create";
import ShowPost from "./ShowPost";

const Posts = () => {
  return (
    <div className="posts">
      <Stories />
      <Create />
      <ShowPost />
    </div>
  );
};

export default Posts;
