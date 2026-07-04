import "./GameReviews.css";

function GameReviews() {

    const reviews = [
        {
            user:"Alex",
            rating:5,
            review:"Amazing graphics and gameplay!"
        },
        {
            user:"John",
            rating:4,
            review:"Worth every rupee."
        },
        {
            user:"Emma",
            rating:5,
            review:"One of the best games I've played."
        }
    ];

    return (

        <div className="reviews">

            <h2>⭐ Player Reviews</h2>

            {
                reviews.map((item,index)=>

                    <div
                        className="review-card"
                        key={index}
                    >

                        <h3>{item.user}</h3>

                        <p>{"⭐".repeat(item.rating)}</p>

                        <p>{item.review}</p>

                    </div>

                )
            }

        </div>

    );

}

export default GameReviews;