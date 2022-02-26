import CommentForm from "@components/CommentForm";
import React from "react";
import styles from "./Comment.module.scss";

function Comment ({comment, replies, activeComment, setActiveComment, addComment, parent = null}) {
    const isReplying = activeComment && activeComment.id === comment.sys.id;
    const createdAt = new Date(comment.sys.createdAt);
    const reply = parent? parent : comment;
    return (
        <div className={styles.comment}>
            <div className="comment-image">
                <img src="https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png"/>
            </div>
            <div className="commnet-rightSide">
                <div className="comment-rightSide_content">
                    <div className="comment-rightSide_content-author">{comment.fields.commentatorName}</div>
                    <div className="comment-rightSide_content-createdAt">{createdAt.toLocaleDateString()} { createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                </div>
                <div className="comment-rightSide-text">{comment.fields.content}</div>
                <div className="comment-rightSide-actions">
                    <div className="comment-rightSide-action" onClick={() =>
                        {
                            setActiveComment({id: comment.sys.id});
                        }
                    }>
                        Trả lời
                    </div>
                </div>
                {isReplying && (
                    <CommentForm submitLabel="Trả lời" handleSubmit={(text, name) => addComment(text, name, reply)} hasCancelButton={true} handleCancel={() => {
                        setActiveComment(null);
                      }} width="65rem"/>
                )}
                <div className="comment-rightSide-replies">
                    {replies.length > 0 && replies?.map((reply) => (
                        <Comment comment={reply} key={reply.sys.id} replies={[]} activeComment={activeComment} setActiveComment={setActiveComment} parent={comment.parent} addComment={addComment}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Comment;