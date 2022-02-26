import image from '../assets/images/3.jpg';

export default function Video() {
    return (
            <div className="col-md-4" style={{"margin-top": "20px"}}>
                <a href="quiz.html">
                    <div className="video">
                        <img src={image} alt="Video Title Here" />
                        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                        <div className="qmeta">
                        <p>10 Questions</p>
                        <p>Score : Not taken yet</p>
                        </div>
                    </div>
                </a>
            </div>
    );
}