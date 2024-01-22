import { useRouter } from "next/router";
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Search.module.css";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const q = router.query["q"];

  async function getMovies(query) {
    const res = await axios.get(`/movies/?q=${query}`);
    const nextMovies = res.data.results;
    setMovies(nextMovies);
  }

  useEffect(() => {
    getMovies(q);
  }, [q]);

  return (
    <>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <MovieList movies={movies} />
    </>
  );
}
