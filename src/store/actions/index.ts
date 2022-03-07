import { ActionType } from "../action-types";

interface SearchRepositoriesActionType {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessActionType {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorActionType {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesActionType
  | SearchRepositoriesSuccessActionType
  | SearchRepositoriesErrorActionType;
