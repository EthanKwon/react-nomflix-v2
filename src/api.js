import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "331e6f8949f674d2ea1d7eaf93c5f172", language: "en-US" },
});

export const movies = {
  nowPlaying: () => api.get("movie/now_playing"),
  latest: () => api.get("movie/latest"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  detail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (title) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(title),
      },
    }),
};

export const tv = {
  onTheAir: () => api.get("tv/on_the_air"),
  latest: () => api.get("tv/latest"),
  airingToday: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular"),
  detail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (title) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(title),
      },
    }),
};

export const person = {
  search: (person) =>
    api.get("search/person", {
      params: {
        query: encodeURIComponent(person),
      },
    }),
};
