import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = () => {

    const user = useSelector((state) => state.session.user)

    // getlastOrderFromuser

    return (
        <h1>Hello from Checkout page</h1>
    )
};

export default CheckoutPage;