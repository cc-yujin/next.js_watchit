import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <h1>watchit</h1>
      <h2>{q} 검색 결과</h2>
    </>
  );
}
