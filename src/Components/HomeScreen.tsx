import React from "react";
import BookList from "./Books/BookList";
import DefaultBooks from "./Books/DefaultBooks";
import Hero from "./Hero/Hero";

interface MyData {
  _id: string;
  author: string;
  authorImage: string;
  category: string;
  coverImage: string;
  title: string;
  views: string[];
}

const HomeScreen = () => {
  const [searchData, setSearchData] = React.useState<MyData[]>([]);
  const [searchedFor, setSearchedFor] = React.useState<boolean>(false);

  return (
    <div>
      <Hero setSearchData={setSearchData} searchData={searchData} />

      {searchedFor === true ? (
        <>
          <BookList searchData={searchData} setSearchData={setSearchData} />
        </>
      ) : (
        <>
          <DefaultBooks />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
