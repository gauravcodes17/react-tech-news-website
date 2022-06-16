// context creation
// provider
// consumer -> useContext Hook
import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./Reducer";

//let tempApi = "https://hn.algolia.com/api/v1/search?query=html";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "",
  numOfPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });

    try {
      const response = await fetch(url);
      const data = await response.json();

      //console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          numOfPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //removing post...

  const removePost = (postId) => {
    //console.log(postId);
    dispatch({
      type: "REMOVE_POST",
      payload: postId,
    });
  };

  //search here...

  const searchPost = (data) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: data,
    });
  };

  //pagination here...

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook create

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
