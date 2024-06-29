import PlayListImg from "./components/PlayListImg";
import { PlayListTitle, PlayListSubTitle } from "./components/PlayListTitle";

const PlayList = () => {
  return (
    <div>
      <PlayListImg img="https://placehold.co/184x184"></PlayListImg>
      <PlayListSubTitle subTitle="Sub title"></PlayListSubTitle>
      <PlayListTitle></PlayListTitle>
    </div>
  );
};

export default PlayList;
