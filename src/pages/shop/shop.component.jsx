import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import MerchandisePageContainer from "../merchandise/merchandise.container";

import ShopOverviewContainer from "../../components/shop-overview/shop-overview.container";

import { fetchMerchandiseStart } from "../../redux/shop/shop.actions.js";

const Shop = ({ fetchMerchandiseStart, match }) => {
  useEffect(() => {
    fetchMerchandiseStart();
  }, [fetchMerchandiseStart]);
  return (
    <div>
      <Route exact path={`${match.path}`} component={ShopOverviewContainer} />
      <Route
        path={`${match.path}/:merchandiseId`}
        component={MerchandisePageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMerchandiseStart: () => dispatch(fetchMerchandiseStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
