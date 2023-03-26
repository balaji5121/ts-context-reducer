import { IUserObject } from "../Interfaces/model";

export const UserInfoObject: IUserObject = {
  name: "",
  age: 0,
  isPrime: null,
};

export type Actions = { type: "ADD"; payload: IUserObject } | { type: "RESET" };

export const userInfoReducer = (state: IUserObject, actions: Actions) => {
  switch (actions.type) {
    case "ADD":
      return { ...UserInfoObject, ...actions.payload };
    case "RESET":
      return UserInfoObject;
    default:
      throw new Error("Default");
  }
};
