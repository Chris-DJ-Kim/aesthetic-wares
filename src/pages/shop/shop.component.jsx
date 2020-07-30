import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import MerchandisePage from "../merchandise/merchandise.component";

import ShopOverview from "../../components/shop-overview/shop-overview.component";

import { updateMerchandise } from "../../redux/shop/shop.actions.js";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateMerchandise } = this.props;
    const merchandiseRef = firestore.collection("merchandise");
    this.unsubscribeFromSnapshot = merchandiseRef.onSnapshot(
      async (snaphot) => {
        const merchandiseMap = convertCollectionSnapshotToMap(snaphot);
        updateMerchandise(merchandiseMap);
      }
    );
  }

  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div>
        <Route exact path={`${match.path}`} component={ShopOverview} />
        <Route
          path={`${match.path}/:merchandiseId`}
          component={MerchandisePage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateMerchandise: (merchandiseMap) =>
    dispatch(updateMerchandise(merchandiseMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
