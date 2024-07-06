// read-only

const PlayListTitle = (props) => {
  return (
    <div>
      {props.children}
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
