const PlayListTitle = () => {
  return (
    <div>
      <h4>Ballad Việt được remix đầy</h4>
    </div>
  );
};

const PlayListSubTitle = (props) => {
  return (
    <div>
      <h4>{props.subTitle}</h4>
    </div>
  );
};




export { PlayListTitle, PlayListSubTitle };
