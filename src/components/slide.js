import React from "react";
import PropTypes from "prop-types";
import {Img} from "../styles/style";



const Slide = ({ src, alt }) => <Img src={src} alt={alt} />;
Slide.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default Slide;
