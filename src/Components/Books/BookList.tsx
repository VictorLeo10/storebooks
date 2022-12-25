import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pic from "../assets/2.webp";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import NoResults from "../NoResults/NoResults";

interface MyData {
  _id: string;
  author: string;
  authorImage: string;
  category: string;
  coverImage: string;
  title: string;
  views: string[];
}

interface Iprops {
  searchData: MyData[];
  setSearchData: React.Dispatch<React.SetStateAction<MyData[]>>;
}

const BookList: React.FC<Iprops> = ({ searchData, setSearchData }) => {
  const [bookData, setBookData] = useState<MyData[]>([]);
  const [isLoading, setIsloading] = useState(true);
  const [ipState, setIpstate] = useState("");
  const [show, setShow] = React.useState(false);

  const ReadData = async () => {
    await axios
      .get("https://bookstore-z52r.onrender.com/server/getall")
      .then((res) => {
        setIsloading(false);
        setBookData(res.data.data);
      })
      .catch((err) => {
        console.log(err);

        return err;
      });
  };

  const ReadIpAddress = async () => {
    await axios
      .get(
        "https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce"
      )
      .then((res) => {
        setIpstate(res.data.IPv4);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const StoreViews = async (id: string) => {
    await axios
      .patch(`https://bookstore-z52r.onrender.com/server/views/${id}`, {
        ip: ipState,
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    ReadIpAddress();
    ReadData();
  }, []);

  return (
    <Container>
      {isLoading ? <p>Loading...</p> : null}
      {searchData?.length === 0 ? (
        <NoResults />
      ) : (
        <>
          {searchData?.length >= 1 ? (
            <>
              {searchData?.map((props) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/books/${props._id}/details`}>
                  <Card key={props._id}>
                    <ImageHolder
                      onClick={() => {
                        if (props.views.includes(ipState)) {
                          return null;
                        } else {
                          StoreViews(props._id);
                        }
                      }}>
                      <Image src={props.coverImage} />
                      <Cont>
                        <Button>{props.category}</Button>

                        <TitleHold>
                          <Title>{props.title}</Title>
                        </TitleHold>
                      </Cont>
                    </ImageHolder>

                    <DownPart>
                      <Hold>
                        <AuthorImage bc="">{props.authorImage}</AuthorImage>
                        <AuthName>{props.author}</AuthName>
                      </Hold>
                      <ViewIcon>
                        <AiOutlineEye />
                        <span> {props.views.length}</span>
                      </ViewIcon>

                      <HoverCard>
                        <First>
                          <Hold>
                            <AuthorImage bc=""></AuthorImage>
                            <AuthName></AuthName>
                          </Hold>

                          <But></But>
                        </First>
                        <Second>
                          <MainImage src={pic} />
                          <MainImage src={pic} />
                          <MainImage src={pic} />
                        </Second>
                      </HoverCard>
                    </DownPart>
                  </Card>
                </Link>
              ))}
            </>
          ) : (
            <>
              {bookData?.map((props) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/books/${props._id}/details`}>
                  <Card key={props._id}>
                    <ImageHolder
                      onClick={() => {
                        if (props.views.includes(ipState)) {
                          return null;
                        } else {
                          StoreViews(props._id);
                        }
                      }}>
                      <Image src={props.coverImage} />
                      <Cont>
                        <Button>{props.category}</Button>

                        <TitleHold>
                          <Title>{props.title}</Title>
                        </TitleHold>
                      </Cont>
                    </ImageHolder>

                    <DownPart>
                      <Hold>
                        <AuthorImage bc="">{props.authorImage}</AuthorImage>
                        <AuthName>{props.author}</AuthName>
                      </Hold>
                      <ViewIcon>
                        <AiOutlineEye />
                        <span> {props.views.length}</span>
                      </ViewIcon>

                      <HoverCard>
                        <First>
                          <Hold>
                            <AuthorImage bc=""></AuthorImage>
                            <AuthName></AuthName>
                          </Hold>

                          <But></But>
                        </First>
                        <Second>
                          <MainImage src={pic} />
                          <MainImage src={pic} />
                          <MainImage src={pic} />
                        </Second>
                      </HoverCard>
                    </DownPart>
                  </Card>
                </Link>
              ))}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default BookList;

const Mea = styled.div`
  /* display: none; */
`;

const HoverCard = styled.div`
  height: 150px;
  width: 100%;
  /* background-color: red; */
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 20px;
  z-index: 10;
  display: none;
  /* display: block; */
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;
const MainImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  background-color: gray;
  margin-right: 5px;
  object-fit: cover;
`;
const First = styled.div`
  display: flex;
`;
const AuthImage = styled.div``;
const Name = styled.div``;
const But = styled.div`
  height: 30px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: silver;
  border-radius: 5px;
`;
const Second = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const Container = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* align-items: center; */
`;
const Card = styled.div`
  width: 300px;
  /* position: relative; */
  margin: 10px;
`;

const Title = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  margin-left: 10px;
  font-size: 18px;
`;
const TitleHold = styled.div`
  opacity: 0;
  height: 150px;
  color: white;
  display: flex;
  transition: all 350ms;
  border-radius: 5px;
  /* background-color: red; */
  background-image: linear-gradient(
    0deg,
    rgba(65, 73, 73, 1) 0%,
    rgba(253, 187, 45, 0) 100%
  );
  /* position: relative; */
  :hover {
    opacity: 1;
  }
  /* display: none; */
`;
const ImageHolder = styled.div`
  height: 200px;
  width: 100%;
  background-color: silver;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
`;
const DownPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  /* position: relative; */
  /* display: inline-block; */
  /* &:hover ~ ${HoverCard} {
		display: flex;
		position: absolute;
		height: 500px;
		width: 300px;
		background: black;
	} */
  ::after ~ ${Mea} {
    content: "dgjfjgdsdgaz";
  }
  /* &:hover ~ ${HoverCard} {
		display: inline-block;
		position: absolute;
		height: 500px;
		width: 300px;
		background: black;
	} */
`;
const Cont = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  /* background-color: red; */
  top: 0;
`;
const Button = styled.div`
  margin: 10px;
  background-color: #302f3e;
  width: 130px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border-radius: 20px;
`;

const AuthorImage = styled.div<{ bc: string }>`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.bc};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-right: 10px;
`;
const AuthName = styled.div`
  font-weight: bold;
  color: black;
`;
const ViewIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: gray;
  span {
    color: black;
  }
`;
