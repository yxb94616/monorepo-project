import type { IUser } from "./typing";
import Mockjs from "mockjs";
import axios from "axios";

const user: IUser = Mockjs.mock({
  name: "@cname",
  id: "@id",
});

Mockjs.setup({
  timeout: "200-600",
});

Mockjs.mock("/getUser", "get", () => {
  return user;
});

function getUser() {
  return axios.get("/getUser");
}

export { getUser };
