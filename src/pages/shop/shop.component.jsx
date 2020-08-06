import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import MerchandisePageContainer from "../merchandise/merchandise.container";

import ShopOverviewContainer from "../../components/shop-overview/shop-overview.container";

import { fetchMerchandiseStartAsync } from "../../redux/shop/shop.actions.js";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchMerchandiseStartAsync } = this.props;
    fetchMerchandiseStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={ShopOverviewContainer} />
        <Route
          path={`${match.path}/:merchandiseId`}
          component={MerchandisePageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMerchandiseStartAsync: () => dispatch(fetchMerchandiseStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
