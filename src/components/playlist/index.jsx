import PlayListImg from "./components/PlayListImg";
import { PlayListTitle, PlayListSubTitle } from "./components/PlayListTitle";

const PlayList = () => {
  return (
    <div>
      <PlayListImg img="https://placehold.co/184x184"></PlayListImg>
      <PlayListSubTitle subTitle="Sub title"></PlayListSubTitle>
      <PlayListTitle>
        <h4
          style={{
            color: "red",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          [PlayListTitle]Ballad Việt được remix đầy
        </h4>
      </PlayListTitle>
    </div>
  );
};

export default PlayList;
