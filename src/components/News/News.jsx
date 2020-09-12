import React from "react";
import NewSingle from "../NewSingle/NewSingle";

const News = ({ items }) => {
  const renderItem = () =>
    items.map(({ item }) => <NewSingle key={item.id} item={item}></NewSingle>);

  return <ul>{renderItem()}</ul>;
};

export default News;
