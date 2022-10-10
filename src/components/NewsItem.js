import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date } = props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://gaadiwaadi.com/wp-content/uploads/2022/08/maruti-grand-vitara-1.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {author}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknwon"} Updated {new Date(date).toUTCString()}</small></p>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem