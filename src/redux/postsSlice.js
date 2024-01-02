import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//it's like the createSlice
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => {
    return {
      getAllPosts: builder.query({
        query: () => "posts",
      }),
    };
  },
  endpoints: (builder) => {
    return {
      getPostsById: builder.query({
        query: (id) => `posts/${id}`,
      }),
    };
  },
  // endpoints: (builder) => ({

  //      getAllPosts: builder.query({
  //         query: () => 'posts'
  //     })
  // })
});

export const { useGetAllPostsQuery, useGetPostsByIdQuery } = postApi
