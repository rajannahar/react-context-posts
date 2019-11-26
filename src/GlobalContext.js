import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const fetchPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const result = await axios(url);
  // console.log("result: ",result.data);
  return result.data;
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    console.log('mounted')
    fetchPosts().then((data) => {
      setPosts(data)
    }, (error) => {
      console.error("error: ", error);
    });


  }, [])

  return(
    <GlobalContext.Provider value={{ posts }}>
      {children}
    </GlobalContext.Provider>
  );
};