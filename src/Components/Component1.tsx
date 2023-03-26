import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { UserInfoContext } from "../App";

const Component1: React.FC = () => {
  const { userState, userDispatch } = useContext(UserInfoContext);
  console.log(userState, "S");

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "lightBlue",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card elevation={5}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">
            USERNAME - <span>{userState.name}</span>
          </Typography>
          <Typography variant="h6">
            AGE - <span>{userState.age}</span>
          </Typography>
          <Typography variant="h4">
            MEMBER SHIP TYPE -
            <span style={{ color: "red", fontWeight: "500" }}>
              {userState.isPrime ? "PRIME USER" : "NON PRIME USER"}
            </span>
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              userDispatch({ type: "RESET" });
            }}
          >
            RESET
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Component1;
