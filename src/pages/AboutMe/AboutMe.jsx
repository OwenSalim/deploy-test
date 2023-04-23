import React, { useEffect } from "react";
import "./aboutMe.css";
import { USERS_DATA } from "./constants";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { useGetUsers } from "./hooks/useUserData";

const AboutMe = () => {
  const { id } = useParams();

  const [isLoadingUsersData, usersData, getUsersData] = useGetUsers();

  const data = id ? USERS_DATA.filter((item) => item.id === id) : USERS_DATA;

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <h1>About Me</h1>

      {/* Menggunakan Index
      {USERS_DATA.map((user, index) => (
        <Card key={index}>
          <div>{user.name}</div>
          <div>{user.age}</div>
          <div>{user.hobby}</div>
        </Card>
      ))} */}

      {/* Menggunakan Key
      {USERS_DATA.map((user) => (
        <Card key={user.id}>
          <div>{user.name}</div>
          <div>{user.age}</div>
          <div>{user.hobby}</div>
        </Card>
      ))} */}

      {isLoadingUsersData ? (
        <LoadingComponent />
      ) : (
        usersData?.map((user) => (
          <Card title={user.firstName + " " + user.lastName} key={user.id}>
            <div>{user.age}</div>
            <div>{user.address}</div>
          </Card>
        ))
      )}
    </>
  );
};

export default AboutMe;
