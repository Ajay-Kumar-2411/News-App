import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    // async updateNews() {
    const updateNews = async () => {
        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);

        let title = props.category;
        title = title[0].toUpperCase() + title.slice(1);
        document.title = `NewsMonkey - ${title}`;
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, []);

    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

        return (
            <>
                <h2 className="text-center">NewsMonkey - Top Headlines on {props.category[0].toUpperCase() + props.category.slice(1)}</h2>

                {/* To Show Spinner */}

                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}

                    loader={<Spinner />}
                >
                    <div className="container">
                        {<div className="row my-3">
                            {articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.source.name} date={element.publishedAt} />
                                </div>
                            })}
                        </div>}
                    </div>
                </InfiniteScroll>

            </>
        )
}

News.defaultProps = {
    country: 'in',
    pageNumber: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageNumber: PropTypes.number,
    category: PropTypes.string
}

export default News