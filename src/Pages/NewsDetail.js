import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../Store/Api";

export default function NewsDetail() {
  let { newsId } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);

  const getNewsDetail = async () => {
    console.log("object");
    const a = await Api.GetNewsDetail({ id: newsId });
    setNewsDetail(a.content);
  };

  useEffect(() => {
    getNewsDetail();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>NewsDetail {newsId}</div>
      {newsDetail ? <span>{newsDetail.content}</span> : ""}
    </>
  );
}
