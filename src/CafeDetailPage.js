import React from "react";
import { useParams } from "react-router-dom";
import "./CafeDetailPage.css";

const CafeDetailPage = ({ cafes, list, changeFavorite }) => {

    const { id } = useParams();
    const cafe = cafes.find(cafe=> cafe.cafeId === parseInt(id));
    const isFavorite = list.find(item => item.name === cafe.name)?.favorite;
    const toggleFavorite = () => {
        changeFavorite(cafe.name);
    };

    return (
        <div className="cafe-detail">
            <h1 className="detail-Logo">LOGO</h1>
            <img className="detail-cafe-picture" src={cafe.imageUrl} alt={cafe.name} />
            <div className="detail-cafeName">{cafe.name}</div>
            {isFavorite ? (
                <img
                    className="detail-isFavorite"
                    src="/img/like.png"
                    style={{ cursor: "pointer" }}
                    alt="favorite"
                    onClick={toggleFavorite}
                />
            ) : (
                <img
                    className="detail-isFavorite"
                    src="/img/dislike.png"
                    style={{ cursor: "pointer" }}
                    alt="favorite"
                    onClick={toggleFavorite}
                />
            )}
            <div className="detail-americanoCost">{"아메리카노 " + cafe.minPrice + "원"}</div>
            <div className="detail-characteristic">{cafe.operationHours}</div>
            <div className="detail-tags">
                {cafe.tags.map((tag, index) => (
                    <div key={index} className="detail-tag-container">
                        <div className="detail-tag"> {tag} </div>
                    </div>
                ))}
            </div>
            <h3 className="review">리뷰</h3>
            <div className="review-list">
            </div>
            <button className="review-button"></button>
        </div>
    );
};

export default CafeDetailPage;
