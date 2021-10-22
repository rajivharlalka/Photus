import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
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
  max-width: 100vw;
  @media (min-width: 984px) {
    max-width: 50vw;
  }
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: white;

  border-radius: 20px;
  padding: 8px;
  width: ${(props) => (props.load ? "20%" : "100%")};
`;

const Image = styled.img`
  display: ${(props) => (props.load ? "none" : "block")};
  width: 100%;
  height: 100%;

  border-radius: 20px;
  object-fit: cover;
`;
const Loader = styled.img`
  display: ${(props) => (props.load ? "block" : "none")};
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
///

function GetFile() {
  const { code } = useParams();
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(false);
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
        <Card load={load}>
          <Loader
            src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e479bf72ydu3coh3k2j0iy92odmrxh5mx8nblnu02wb&rid=giphy.gif&ct=g"
            load={load}
          ></Loader>
          {data.url === "Cannot read property 'path' of undefined" ? (
            <Redirect to="/404" />
          ) : (
            <Image src={data.url} alt="" load={load} />
          )}
        </Card>
      </Container>
    </Background>
  );
}

export default GetFile;
