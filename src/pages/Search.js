import { useEffect } from "react";
import {Card} from '../components/Card'
import { UseFetch } from "../hooks/UseFetch";
import { useSearchParams } from "react-router-dom";
export const Search = ({apipath}) => {
  const [searchParamas]=useSearchParams();
  const queryTerm = searchParamas.get("q")
  const {data:movies}= UseFetch(apipath,queryTerm);

  useEffect(()=>{
    document.title=`Search result for ${queryTerm}`;
  })
  return (
    <main className="container">
      <h5 className="text-danger py-2  border-bottom">{movies.length==0?`No result found for ${queryTerm}`:`Result for ${queryTerm}`}</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.map((movie)=>{
            return <Card key={movie.id} movie={movie}/>
          })}
        </div>
    </main>
  )
}
