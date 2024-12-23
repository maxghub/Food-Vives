import React from 'react'

export default function Footer() {
  return (
    <>
     <div className="footer-text">
   <div className="information-text">
       <h5>Information</h5>
       <ul>
        <li>
          <a href="">General Conditions</a></li>

        <li> <a href="">Privacy Policy</a> </li>
        <li> <a href="">Cookies Policy</a></li>
        <li> <a href="">Purchase Conditions</a> </li>
        <li> <a href="">Quality</a></li>  
       </ul>
   </div>
    <div className="product-categories">
      <h5>Product categories</h5>
      <ul>
       
        <li><a href=""> Saffron</a></li>
       <li> <a href="">BIO Spices</a> </li>
       <li> <a href="">Botanical Collection</a></li>
       <li> <a href="">Sweeteners and Coffees</a> </li>
       <li> <a href=""> Spices and Condiments</a></li>  
       <li> <a href="">Herbal Teas</a> </li>
       <li> <a href="">Grinders</a></li>
       <li> <a href="">Pastry</a> </li>
       <li> <a href=""> Paprika</a></li> 
       <li> <a href=""> Complementary Products</a></li>
       <li> <a href="">Paella Products</a> </li>
       <li> <a href=""> Seasonings</a></li>  
      </ul> 
    </div>

    <div className="location">
        <h5>Location</h5>
        <iframe width="266" height="222" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=266&amp;height=222&amp;hl=en&amp;q=%20Jaipur+(Restaurant)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1
        d227748.9997360682!2d75.65047149601598!3d26.88514167878653!2m3!1f0
        !2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce
        1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1666539416
        127!5m2!1sen!2sin" width="250" height="250" style="border:0;"
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            
         <div className="social-networks">
          <h5>Social Networks</h5>
          <ul>
           <li><a href="">Facebook</a></li>
           <li><a href="">Instagram</a></li>
          </ul>
   
       </div>
        </div>
    
</div>
    </>
  )
}
