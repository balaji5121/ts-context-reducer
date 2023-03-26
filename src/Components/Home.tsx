import React, { ChangeEvent, useContext, useState } from "react";
import { UserInfoContext } from "../App";
import { TextField, Box, Card, CardHeader, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IUserObject } from "../Interfaces/model";
import { UserInfoObject } from "../Store/UserReducer";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const history = useHistory();
  const [userObj, setUserObj] = useState<IUserObject>(UserInfoObject);
  const { userDispatch, userState } = useContext(UserInfoContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserObj((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmitEvent = (e: any) => {
    e.preventDefault();
    userDispatch({ type: "ADD", payload: userObj });
    history.push(`/component`);
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gray",
          height: "100vh",
        }}
      >
        <Card
          elevation={5}
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "30%",
          }}
        >
          <CardHeader title="USER DATA" />
          <TextField
            value={userObj.name}
            onChange={handleChange}
            label="USERNAME"
            variant="outlined"
            className="m-2"
            fullWidth
            name="name"
          />{" "}
          <TextField
            value={userObj.age}
            onChange={handleChange}
            label="AGE"
            type="number"
            variant="outlined"
            className="m-2"
            fullWidth
            name="age"
          />{" "}
          <FormControlLabel
            value={true}
            control={<RadioGroup />}
            sx={{ paddingLeft: 1.5 }}
            label="PRIME MEMBER SHIP"
          />
          <RadioGroup
            sx={{ display: "flex" }}
            row={true}
            value={userObj.isPrime}
            onChange={handleChange}
            name="isPrime"
          >
            <FormControlLabel value={true} control={<Radio />} label="PRIME" />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="NON-PRIME"
            />
          </RadioGroup>
          <Button
            type="submit"
            className=""
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Card>
      </Container>
    </form>
  );
};

export default Home;
