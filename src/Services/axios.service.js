import axios from "axios";
import {genreURL, moviesURL} from "../Consts";

const axiosService = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ZhYTlhNGU2ZTgyY2YxNGYzMzkwMjEyMmIzMDQxNiIsInN1YiI6IjYyZTJjNzJjNWUxMjAwMDA1NTY2MTNiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w0W2td__Ilm6COE0OFnNlGVYOILPY3WiSApaJ8K5CiM'
    }})





export {axiosService};