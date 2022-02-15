import Comment from "@components/Comment";
import CommentForm from "@components/CommentForm";
import { IComment } from "contentful/__generated__/types";
import React, { useEffect, useState } from "react";
import { BlogApi } from "services/blog";
import styles from "./Comments.module.scss";

const api = new BlogApi();
function CommentSection ({blog_id}) {
    const [commentList, setCommentList] = useState<IComment[]>();
    const [activeComment, setActiveComment] = useState(null);
    const getComment = async () => {
        const data = await api.getBlogComments(blog_id);
        console.log(data);
        setCommentList(data);
    }
    const addComment = async (text, name, parent) => {
        var comment = await api.createComment(name, text, parent);
        await api.handleBlogComment(comment, blog_id);
        getComment();
        setActiveComment(null);
    }
    const getReplies = (commentID) => {
        return commentList?.filter(comment => comment.fields.parent?.sys.id == commentID).sort(
            (a, b) =>  new Date(a.sys.createdAt).getTime() - new Date(b.sys.createdAt).getTime());
    }
    useEffect(() => {
        getComment();
      }, []);
    const rootComments = commentList?.filter(comment => comment.fields.parent == null).sort(
        (a, b) =>  new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime());
    return (
        <div className={styles.comments}>
            <div className="comments-form">
                <div className="comments-form_title">
                    <h4>Viết bình luận</h4>
                </div>
                <CommentForm submitLabel="Bình luận" handleSubmit={addComment} handleCancel={() => {
                    setActiveComment(null);
                }} width="85rem"/>
            </div>
            <h2 className="comments-title">
                Bình luận
            </h2>
            <div className="comments-container">
                {rootComments?.length > 0 && rootComments?.map((comment) => {
                  return (
                    <Comment comment={comment} key={comment.sys.id} replies={getReplies(comment.sys.id)} activeComment={activeComment} setActiveComment={setActiveComment} addComment={addComment}/>
                  );
                })}
            </div>
        </div>
    );
}

export default CommentSection;