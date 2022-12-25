import React from "react";
import styled from "styled-components";
import pic from "../assets/2.webp";
import { useParams } from "react-router-dom";
import axios from "axios";

interface MyData {
  _id: string;
  author: string;
  authorImage: string;
  category: string;
  coverImage: string;
  title: string;
  views: string[];
  summary: string;
}
const SingleBook = () => {
  const [singleData, setSingleData] = React.useState<MyData>();
  const { id } = useParams();

  const getDetails = async () => {
    await axios
      .get(`https://bookstore-z52r.onrender.com/server/getone/${id}`)
      .then((res) => {
        setSingleData(res.data.data);
      });
  };

  React.useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container>
      <Wrapper>
        <First>
          <Hold>
            <AuthorImage>{singleData?.authorImage}</AuthorImage>
            <AuthName>{singleData?.author} </AuthName>
          </Hold>
        </First>

        <MainImage cv={singleData?.coverImage}>
          <Holder>
            <MainImage2 src={singleData?.coverImage} />
          </Holder>
        </MainImage>

        <h2>{singleData?.title}</h2>
        <Desc>{singleData?.summary}</Desc>
      </Wrapper>
    </Container>
  );
};

export default SingleBook;

const Holder = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  /* background-color: #e7e6e6; */
  /* object-fit: contain; */
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainImage2 = styled.img`
  height: 100%;
  width: 400px;
  object-fit: cover;
  /* backdrop-filter: blur(5px); */
  /* filter: blur(3px); */
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  h2 {
    width: 100%;
  }
`;
const Desc = styled.div`
  font-size: 18px;
`;

const AuthorImage = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #bb3d6e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-right: 10px;
`;
const AuthName = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;
const MainImage = styled.div<{ cv: any }>`
  height: 530px;
  width: 90%;
  /* position: absolute; */
  background-image: url(${(props) => props.cv});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const First = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  /* position: absolute; */
  /* top: 0; */
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  padding-bottom: 70px;
`;
