import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsMerchandiseLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import MerchandisePage from "./merchandise.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsMerchandiseLoaded(state),
});

const MerchandisePageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(MerchandisePage);

export default MerchandisePageContainer;
