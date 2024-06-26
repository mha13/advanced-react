import { useState } from "react";

const Feedback = () => {
    const [score, setScore] = useState('10');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (Number(score) <= 5 || comment.length <= 10) {
            alert('notComleted');
            return;
        }

        console.log('Completed');
        setScore('10');
        setComment('');
    }

    return (
        <div className="feedback-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor='range'>sadas : {score}⭐️</label>
                        <input id='range' type="range" max='10' min='0' value={score} onChange={e => setScore(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='comment'>Comment</label>
                        <textarea id='comment' value={comment} onChange={e => setComment(e.target.value)}></textarea>
                    </div>
                    <button type="submit"> SUBMIT </button>
                </fieldset>
            </form>
        </div>
    )
}

export default Feedback;