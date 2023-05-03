import axios from "axios";
import React, { useEffect, useState } from "react";

const Comment = ({ blogId }) => {
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/comments/${blogId}`)
      .then((response) => setComment(response.data))
      .catch((error) => console.error(error));
  }, [blogId]);

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/blog/${blogId}`,
        {
          content: newComment,
          user: userId,
        }
      );
      setComment([...comment, response.data]);
      setNewComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comments-container">
      <div className="comments">
        {comment.map((commentItem) => (
          <ul key={commentItem._id} className="comments-list">
            {commentItem.user.avatarUrl ? (
              <img
                className="comment-avatar"
                src={commentItem.user.avatarUrl}
                alt=""
              />
            ) : null}
            <div>
              <p className="username">{commentItem.user.username}</p>
              <li>{commentItem.content}</li>
            </div>
          </ul>
        ))}
      </div>
      <form onSubmit={submitComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Введите ваш комментарий"
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Comment;
