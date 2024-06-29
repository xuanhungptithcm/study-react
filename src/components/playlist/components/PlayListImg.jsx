import PropTypes from "prop-types";

const PlayListImg = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
    </div>
  );
};

/* validate props là kiểu string */
PlayListImg.propTypes = {
  img: PropTypes.string.isRequired,
};

export default PlayListImg;
