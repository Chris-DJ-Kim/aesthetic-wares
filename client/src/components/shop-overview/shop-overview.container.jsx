import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsMerchandiseFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import ShopOverview from "./shop-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsMerchandiseFetching,
});

const ShopOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ShopOverview);

export default ShopOverviewContainer;
