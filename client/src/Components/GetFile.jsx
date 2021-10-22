import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
///
const Background = styled.div`
  background-color: #e5e5e5;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

const Container = styled.div`
  max-width: 100vh;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: white;
  width: 100%;
  margin-top: 20vh;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
///

function GetFile() {
  const { code } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:4000/view/${code}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  return (
    <Background>
      <Container>
        <Card>
          <Image
            style={{ objectFit: "cover", maxHeight: "50vh", maxWidth: "50vw" }}
            src={data.url}
            alt=""
          />
        </Card>
      </Container>
    </Background>
  );
}

export default GetFile;
