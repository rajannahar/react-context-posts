import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const fetchPosts = async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await axios.get(url)
    // console.log("result: ",result);
    return result.data;
  } catch (e) {
    console.log('error ', e)
  }
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