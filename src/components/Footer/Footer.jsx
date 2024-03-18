import React from 'react'
import digicert from "../../assets/Digicert.webp"
import visa from "../../assets/visa.webp"
import mastercard from "../../assets/mastercard.png"
import maestro from "../../assets/maestro.png"
import amex from "../../assets/amex.png"
import paypal from "../../assets/paypal.png"
import "./Footer.scss"

function Footer() {
  return (
    <div className='FooterSection container-fluid'>
        <div className=''>
            <p className='rightfit'><span>RIGHT</span>FIT.COM</p>
        </div>
        <div className='row FooterItemsSection'>
            <div className="col-md-2 footeritem">
                <p>Home</p>
                <p>All Products</p>
                <p>Featured Products</p>
                <p>Contact</p>
                <p>About Us</p>
            </div>
            <div className="col-md-7 footeritem">
                <p className='paymentdescription'>We are a registered E-Commere seller and we support a variety of local and international payment modes.</p>
                <div className="paymentsection">
                <div > 
                    <img className='visa' src={visa} alt="visa"/>
                </div>
                <div  >
                <img className='mastercard'src={mastercard} alt="mastercard"/>
                </div>
                <div  >
                <img className='maestro' src={maestro} alt="maestro"/>
                </div>
                <div  >
                <img className='amex' src={amex} alt="amex"/>
                </div>
                <div  >
                <img className='paypal' src={paypal} alt="paypal"/>
                </div>
                </div>
            </div>
            <div className="col-md-3 footeritem">
                <p>Website protected by</p>
                <div>
                    <img className='digicert' src={digicert} alt="Digicert "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer