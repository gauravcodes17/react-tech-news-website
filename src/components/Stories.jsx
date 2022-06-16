import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <>
      <div className="stories-div">
        {hits.map((post) => {
          const { title, created_at, author, objectID, url, num_comments } =
            post;

          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments} comments</span>
              </p>
              <div className="card-button">
                <a href={url} target="_blank" rel="noreferrer">
                  Read Full News
                </a>
                <a href="/#" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
              <div>
                <p className="date">Updated At : {created_at.slice(0, 10)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
