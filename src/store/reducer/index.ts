interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

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

type Action =
  | SearchRepositoriesActionType
  | SearchRepositoriesSuccessActionType
  | SearchRepositoriesErrorActionType;

enum ActionType {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

const reducer = (state: RepositoryState, action: Action): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
