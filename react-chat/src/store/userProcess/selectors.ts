import { User } from "../../api";
import { State } from "../../types/state";
import { NameSpace } from "../../utils/const";

export const getUser = (state: State): User => state[NameSpace.User].user;
export const getIsUserDataLoading = (state: State): boolean => state[NameSpace.User].isUserDataLoading;