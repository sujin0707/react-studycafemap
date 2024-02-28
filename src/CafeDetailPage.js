import React from "react";
import { useParams } from "react-router-dom";

const CafeDetailPage = ({ cafes }) => {

    const { cafeName } = useParams();

    // cafeName을 사용하여 해당 카페의 정보를 찾습니다.
    const cafe = cafes.find(cafe => cafe.name === cafeName);
    
    /*
    return (
        <div className="cafe-detail">
            <img className="picture" src={cafe.imageUrl} />
            <div className="cafeName">{cafe.name}</div>
            <div className="americanoCost">{"아메리카노 " + cafe.minPrice}</div>
            <div className="characteristic">{cafe.tags.join(", ")}</div>
        </div>
  );
  */
};

export default CafeDetailPage;