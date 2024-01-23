import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const res = await axios.get(`/movies/`);
    const nextMovies = res.data.results ?? [];
    setMovies(nextMovies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Head>
        <title>Watchit</title>
      </Head>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
