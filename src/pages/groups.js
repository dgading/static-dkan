import React from "react";
import { FontAwesomeIcon } from "interra-data-catalog-components";
import Layout from "../components/layout";
import Wrapper from "../containers/groups/Wrapper";



const Topics = () => (
  <Layout>
    <Wrapper className="page container-fluid">
      <div className="section">
        <h1>Groups</h1>
        <div className="section-content">
          <div className="block">
            <p>Groups allow you to classify datasets that share a common publisher or organizational group 
              (i.e. Parks and Recreation Department, Department of Education). Behind the scenes, Groups can 
              offer an additional set of roles and permissions that ensure quality and security when publishing data. 
              This is especially important for large sites that may have several working groups publishing data to the 
              same site.
            </p>
          </div>
          <div className="block info">
              <p><FontAwesomeIcon icon="info-circle" fill="#27AAE1"/> Update this with text specific to your site. </p>
          </div>
        </div>
      </div>
    </Wrapper>
  </Layout>
);

export default Topics;
