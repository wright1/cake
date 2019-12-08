import React from "react";
import PropTypes from "prop-types";
import { Img } from "../styles/style";

const Slide = ({ src, alt, onClick }) => <Img src={src} alt={alt} onClick={(e) => onClick(e)} />;
Slide.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default Slide;
