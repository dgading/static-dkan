import React from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';

const SiteName = ({
  link,
  site,
  slogan
}) => (
  <div className="site-name">
    <Link to={link}>{site}</Link>
    <div className="slogan">{slogan}</div>
  </div>
);

SiteName.defaultProps = {
  site: "Open Data Catalog",
  slogan: "Place your tag line here.",
  link: "/home"
};

SiteName.propTypes = {
  item: PropTypes.any,
};

export default SiteName;
