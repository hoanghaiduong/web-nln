import Header from "../../component/fix/Header";
import DetailProductBody from "../../component/product-detail/DetailProductBody";
import Footer from "../../component/fix/Footer";

export default function DetailProductPage(){
    return(
        <div className="ProductPage">
            <Header/>
            <DetailProductBody/>
            <Footer/>
        </div>
    );
}