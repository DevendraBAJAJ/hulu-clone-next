import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid justify-center">
        {results.map(result => (
            <Thumbnail key={result.id} result={result} />
        ))}
      
    </FlipMove>
  )
}

export default Results
