import React from "react";
import { ReactComponent as Facebook } from "./img/facebook.svg";
import { ReactComponent as Instagram } from "./img/instagram.svg";

function Footer() {
  const style = `.st1{fill:#8b8b8b;}
  .footlist{
    text-align: right;
  }
  .footlist li{
    display: inline;
    margin-right: 2px;
  }
  .footlist li a{
    cursor: pointer;
    margin-right: 10px;
  }
  `;
  return (
    <>
      <div className="mx-24 my-12 border-y flex flex-row items-center justify-between">
        <div className="foodpanda-logo">
          <svg x="0px" y="0px" viewBox="0 0 1366 346" height="130" width="130">
            <style>{style}</style>
            <g class="svg-stroke-container">
              <g>
                <path
                  class="st1"
                  d="M305.1,129.9h18.7v-17.3c0-21,11.7-35,35-35l11.7,2.3v21l-12.8-2.3c-7,0-10.5,4.7-10.5,11.7v19.6h23.3v21
			h-23.3v88.7h-23.3v-88.7h-18.7V129.9z"
                ></path>
                <path
                  class="st1"
                  d="M430.9,127.6c30.3,0,57.2,23.3,57.2,57.2c0,33.8-26.8,57.2-57.2,57.2c-30.3,0-57.2-23.3-57.2-57.2
			C373.8,150.9,400.6,127.6,430.9,127.6z M430.9,220.9c22.2,0,33.8-16.3,33.8-36.2c0-19.8-11.7-36.2-33.8-36.2
			c-22.2,0-33.8,16.3-33.8,36.2C397.1,204.6,408.8,220.9,430.9,220.9z"
                ></path>
                <path
                  class="st1"
                  d="M555.5,127.6c30.3,0,57.2,23.3,57.2,57.2c0,33.8-26.8,57.2-57.2,57.2s-57.2-23.3-57.2-57.2
			C498.4,150.9,525.2,127.6,555.5,127.6z M555.5,220.9c22.2,0,33.8-16.3,33.8-36.2c0-19.8-11.7-36.2-33.8-36.2
			c-22.2,0-33.8,16.3-33.8,36.2C521.7,204.6,533.4,220.9,555.5,220.9z"
                ></path>
                <path
                  class="st1"
                  d="M735,239.6h-21l-2.3-9.3l-1.2-1.2l-1.2,1.2c-7,7-18.7,11.7-30.3,11.7c-30.3,0-56-23.3-56-57.2
			c0-33.8,25.7-57.2,56-57.2c11.4,0,23.3,4.7,30.3,11.7l1.2,1.2l1.2-1.2V77.6H735V239.6z M680.2,148.6c-22.2,0-34.1,16.3-34.1,36.2
			c0,19.8,11.9,36.2,34.1,36.2c19.8,0,33.8-16.3,33.8-36.2C714,164.9,700,148.6,680.2,148.6z"
                ></path>
                <path
                  class="st1"
                  d="M758.4,129.9h21l2.1,9.3l1.4,1.2l1.2-1.2c7-7,18.7-11.7,30.3-11.7c30.3,0,56,23.3,56,57.2
			c0,33.8-25.7,57.2-56,57.2c-11.4,0-23.3-4.7-30.3-11.7l-1.2-1.2l-1.4,1.2V289h-23.1V129.9z M813.2,220.9
			c22.2,0,33.8-16.3,33.8-36.2c0-19.8-11.7-36.2-33.8-36.2c-19.8,0-33.8,16.3-33.8,36.2C779.4,204.6,793.4,220.9,813.2,220.9z"
                ></path>
                <path
                  class="st1"
                  d="M929.1,171.5h19.1v-4.8c0-13.2-9-19.3-21.5-19.3c-10.1,0-16.9,4.8-20.6,14.7l-20.9-4.4
			c4.6-18.7,20.6-30.5,41.7-30.5c29.4,0,44.1,14.5,44.1,43.7v68.7h-19.3l-2.2-14.5c-7.7,10.8-19.1,16.3-34.3,16.3
			c-19.5,0-34-11.6-34-33.6C881.2,185.1,900.4,171.5,929.1,171.5z M919.2,221.1c7.7,0,14.5-2.4,20.2-7.2c5.9-5.1,8.8-11.9,8.8-20.9
			v-2.4h-20c-14.1,0-22.8,6.6-22.8,17.1C905.4,215.6,910.2,221.1,919.2,221.1z"
                ></path>
                <path
                  class="st1"
                  d="M992.6,129.9h21l2.3,9.3l1.2,1.2l1.2-1.2c4.7-7,16.3-11.7,25.7-11.7c28,0,44.3,18.7,44.3,44.3v67.7h-23.3
			v-67.7c-0.7-14.9-7.9-23.3-23.3-23.3c-13.8,0-25.2,11.2-25.7,24.7v66.3h-23.3V129.9z"
                ></path>
                <path
                  class="st1"
                  d="M1215.3,239.6h-21l-2.3-9.3l-1.2-1.2l-1.2,1.2c-7,7-18.7,11.7-30.3,11.7c-30.3,0-56-23.3-56-57.2
			c0-33.8,25.7-57.2,56-57.2c11.4,0,23.3,4.7,30.3,11.7l1.2,1.2l1.2-1.2V77.6h23.3V239.6z M1160.4,148.6
			c-22.2,0-34.1,16.3-34.1,36.2c0,19.8,11.9,36.2,34.1,36.2c19.8,0,33.8-16.3,33.8-36.2C1194.3,164.9,1180.3,148.6,1160.4,148.6z"
                ></path>
                <path
                  class="st1"
                  d="M1281.7,171.5h19.1v-4.8c0-13.2-9-19.3-21.5-19.3c-10.1,0-16.9,4.8-20.6,14.7l-20.9-4.4
			c4.6-18.7,20.6-30.5,41.7-30.5c29.4,0,44.1,14.5,44.1,43.7v68.7h-19.3l-2.2-14.5c-7.7,10.8-19.1,16.3-34.3,16.3
			c-19.5,0-34-11.6-34-33.6C1233.8,185.1,1252.9,171.5,1281.7,171.5z M1271.8,221.1c7.7,0,14.5-2.4,20.2-7.2
			c5.9-5.1,8.8-11.9,8.8-20.9v-2.4h-20c-14.1,0-22.8,6.6-22.8,17.1C1258,215.6,1262.8,221.1,1271.8,221.1z"
                ></path>
              </g>
              <g>
                <path
                  class="st1"
                  d="M142.1,205.3c13.5,0,24.4-9.6,24.4-21.4h-48.7C117.8,195.7,128.6,205.3,142.1,205.3z"
                ></path>
                <g>
                  <path
                    class="st1"
                    d="M224.4,103.3c5.5-4.8,9.1-11.8,9.1-19.8c0-14.4-11.7-26.1-26.2-26.1c-9.3,0-17.4,4.8-22,12
				c-13-6.3-27.6-9.9-43-9.9c-15.4,0-30,3.5-43,9.8c-4.7-7.2-12.7-12-22-12c-14.4,0-26.2,11.7-26.2,26.1c0,7.9,3.5,15,9,19.7
				c-10.7,15.8-17,34.9-17,55.4c0,54.7,44.5,99.1,99.1,99.1c54.6,0,99.1-44.4,99.1-99.1C241.4,138.2,235.1,119.1,224.4,103.3z
				 M142.3,250.1c-50.4,0-91.4-41-91.4-91.4c0-19,5.8-36.6,15.7-51.2c9-13.2,21.4-24,35.8-31c12-5.9,25.5-9.2,39.8-9.2
				c14.3,0,27.8,3.3,39.9,9.2c14.5,7,26.8,17.8,35.8,31c9.9,14.6,15.7,32.2,15.7,51.2C233.7,209.1,192.7,250.1,142.3,250.1z"
                  ></path>
                  <path
                    class="st1"
                    d="M142.1,177.8c1.5,0.4,17.2-4.9,17.2-12.3c0-4.1-12.7-4.9-17.2-4.9c-4.4,0-17.2,0.8-17.2,4.9
				C124.9,172.9,140.6,178.2,142.1,177.8z"
                  ></path>
                  <path
                    class="st1"
                    d="M199.7,115.8c-8.6-5.7-27.7-9.1-35.1,0.8c0,0-9.4,10.1-0.2,20.6c9.3,10.5,16.4,20.3,18.5,28.8
				c2.1,8.5,5.5,12,12.4,12.1c6.9,0,20.1-10.5,21.8-27.4C218.8,133.8,208.3,121.4,199.7,115.8z M180,137.4c-2.9,0-5.2-2.3-5.2-5.2
				c0-2.9,2.4-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C185.1,135,182.8,137.4,180,137.4z"
                  ></path>
                  <path
                    class="st1"
                    d="M119.6,116.5c-7.5-9.8-26.6-6.5-35.1-0.8c-8.6,5.7-19.1,18-17.4,34.9c1.6,16.9,14.9,27.4,21.8,27.4
				c6.9,0,10.3-3.5,12.4-12.1c2.1-8.5,9.3-18.3,18.5-28.8C129,126.6,119.6,116.5,119.6,116.5z M105.8,137.4c-2.9,0-5.2-2.3-5.2-5.2
				c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C110.9,135,108.6,137.4,105.8,137.4z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <ul className="socials inline">
          <li className="inline border-2 p-2 rounded-full mx-2">
            <a
              title="foodpanda on Facebook"
              href="https://www.facebook.com/foodpanda.pk/"
              className="mx-0.5"
            >
              {/* <Facebook style={{ width: "3%" }} /> */}
              <Facebook className="mb-1" style={{ display: "inline" }} />
            </a>
          </li>
          <li className="inline border-2 p-2 rounded-full mx-2">
            <a
              title="foodpanda on Instagram"
              href="https://www.instagram.com/foodpanda_pakistan/"
              className="mx-0.5"
            >
              <Instagram className="mb-1" style={{ display: "inline" }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-24 pb-12 grid grid-cols-2 gap-4 border-b">
        <p>&copy; 2022 Foodpanda </p>
        <div className="links">
          <ul className="footlist">
            <li>
              <a className="hover:text-pink" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Refunds with pandapay
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Pandapay User Account Terms and Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Press Terms and conditions
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Privacy policy
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Security
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Download foodpanda Apps
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Suggest a restaurant
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Corporate Customer
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                All cuisines
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                foodpanda Magazine
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Partner with us
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                pandago - Request a rider
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                foodpanda Vouchers & Promo
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                All cities
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Update on COVID-19 in Pakistan
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                pandamart Grocery Delivery
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                foodpanda home chef
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Become an affiliate
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="#">
                Ramzan deals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
