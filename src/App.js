
import './App.css';
import FlipHead from './Components/FlipHead';
import Fliprops from './Components/Flipprops';
import Fliprops1 from './Components/Flipprops1';
import Fliprops2 from './Components/Fliprops2';
import { Input} from 'antd';
import { Button } from 'antd';


  import { AudioOutlined } from '@ant-design/icons';
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  

function App() {

  // function handleMenuClick(e) {
  //   console.log('click', e);
  // }
  
  
  return (
    
    <div className="App"><h2 style={{color:"blue"}}>Flipkart</h2>

<div>
      
<Search className='srch'
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
    
    
    />
     </div>
     <FlipHead />
     

     
     <div className='imgs'>
       <Fliprops 
       src="https://rukminim1.flixcart.com/flap/128/128/image/e09286c6edd281d0.png?q=100" 
       name="Mobiles" />
       <Fliprops
       src="https://rukminim1.flixcart.com/flap/128/128/image/e7d30211bbb602cc.png?q=100" 
       name="Fashion" /> 
        <Fliprops
       src="https://rukminim1.flixcart.com/flap/128/128/image/c5a1aae989f3aac4.png?q=100" 
       name="Electronics" />
        <Fliprops
       src="https://rukminim1.flixcart.com/flap/128/128/image/6214910e86384399.png?q=100"
       name="Home" />
        <Fliprops
       src="https://rukminim1.flixcart.com/flap/128/128/image/5126ce89b897c8e9.png?q=100"
       name="Travel" />
        <Fliprops
       src="https://rukminim1.flixcart.com/flap/128/128/image/fe2a5da6f688d660.png?q=100"
       name="Appliances" />
        <Fliprops
       src="https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100"
       name="furniture" />
        <Fliprops
       src="https://rukminim1.flixcart.com/flap/128/128/image/a2fccf3370909581.png?q=100"
       name="Beauty,toys&more" />
       <Fliprops
       src="https://rukminim1.flixcart.com/flap/128/128/image/19b4a157cd8e8ff7.png?q=100"
      name="Groccery" />


       
     </div>
     <div>
       <div className="site-button-ghost-wrapper">
    <Button className="btn" type="primary" ghost>
      Kids Wear
    </Button>
    <Button className="btn"ghost>Mens Wear</Button>
    <Button className="btn"type="dashed" ghost>
      womens Wear
    </Button>
    <Button className="btn" type="primary" danger ghost>
      Trends
    </Button>
  </div>
     </div>
     <br/>
     <div className='divimage'>
     <Fliprops1
     src="https://rukminim1.flixcart.com/image/400/400/jped7rk0/ottoman-pouffe/b/h/t/black-leatherette-tr-ottoman-pw001-tied-ribbons-original-imafbnayp3gxnvnu.jpeg?q=70" 
     name="Ottoman & pouffe"
     color="From Rs.549"
     id="Trendy Collection"/>
     <Fliprops1
     src="https://rukminim1.flixcart.com/image/400/400/jim0x3k0/sofa-sectional/c/v/7/blue-polycotton-ph0003-perfect-homes-by-flipkart-blue-original-imaf6dhhsfhvvjdn.jpeg?q=70"
     name="sofa & sectional"
     color="From Rs.7,999"
     id="Fabric & leatherette" />
        <Fliprops1
     src="https://rukminim1.flixcart.com/image/400/400/kfr5le80/learning-toy/a/r/j/8-5-inch-lcd-e-writer-electronic-writing-pad-tablet-drawing-original-imafw4qbsu6fbwum.jpeg?q=70"
     name="Learning & Eduational toy"
     color="Under Rs.999" 
     id="Abacus,Block Toys&more" />
     <Fliprops1
     src="https://rukminim1.flixcart.com/image/400/400/khnqqa80/diary-notebook/c/3/z/toss-6020-go-green-silky-6020-go-green-silky-original-imafxmjgpzhztpa3.jpeg?q=70"
     name="Diaries"
     color="From Rs.799"
     id="Explore More" />
    
     <Fliprops1
    src="https://rukminim1.flixcart.com/image/612/612/ku04o7k0/sofa-sectional/j/w/c/symmetrical-grey-chenille-888-flipkart-perfect-homes-black-grey-original-imag782zykdyx8sr.jpeg?q=70"
    name="Flipkart Arora Fabric"
    color="From Rs.39,999"
    id="Explore more"
    />
    <br/>
    </div>
    <div className='divimage2'>
    <Fliprops2
    src="https://rukminim1.flixcart.com/image/452/542/kay9bbk0/sari/a/s/z/free-1262-5-kashvi-sarees-unstitched-original-imafsepbpnpbxgsz.jpeg?q=50" 
    name="Black & Yellow"
    id="From Rs.1500"
   />
     <Fliprops2
    src="https://rukminim1.flixcart.com/image/452/542/kfu0h3k0-0/sari/w/d/q/free-hina-magenta-satyam-weaves-unstitched-original-imafw7ngv5jecuzw.jpeg?q=50"
    name="Kanchipuram"
    id="From Rs.2500"/>
     <Fliprops2
    src="https://rukminim1.flixcart.com/image/452/542/kflftzk0-0/sari/o/y/c/free-hitesh2series-fumvel-unstitched-original-imafwypg4fwky3a7.jpeg?q=50"
    name="Ethnic Junction"
    id="From Rs.3500"/>
    <Fliprops2
    src="https://rukminim1.flixcart.com/image/452/542/k4d27ww0/sari/f/s/k/free-new-more-kanjivaram-fashion-anusuya-saree-original-imafgvemre4fcxy6.jpeg?q=50"
    name="Fancy Saree"
    id="From Rs.2000"/>
     <Fliprops2
    src="https://rukminim1.flixcart.com/image/452/542/kj8wccw0-0/sari/2/a/w/free-1614-6-anand-unstitched-original-imafyurtrbgzs5kb.jpeg?q=50"
        name="ShopperShoppe"
        id="From Rs.2700"
    /> 
     </div>
    <div className='content'>
            <h3>Flipkart: The One-stop Shopping Destination</h3>
            <p>
            E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered.
            </p>
            <h3>Flipkart Plus</h3>
            <p>
            A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!

What's more, you can even use the Flipkart supercoins for a number of exciting services, like:
An annual Zomato Gold membership
An annual Hotstar Premium membership
6 months Gaana plus subscription
Rupees 550 instant discount on flights on ixigo
Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.
            </p>
            <h3>What Can You Buy From Flipkart?</h3>
            <p>
            Mobile Phones
From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - the Flipkart Complete Mobile Protection covers a comprehensive range of post-purchase problems, with door-to-door services.
            </p>
        </div>

   
    
    </div>
  );
}

export default App;
