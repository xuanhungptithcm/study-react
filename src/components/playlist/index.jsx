import PlayListImg from "./components/PlayListImg";
import { PlayListTitle, PlayListSubTitle } from "./components/PlayListTitle";

const PlayList = () => {
  return (
    <div>
      <PlayListImg img="https://placehold.co/184x184"></PlayListImg>
      <PlayListSubTitle></PlayListSubTitle>
      <PlayListTitle></PlayListTitle>
    </div>
  );
};

export default PlayList;
