import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#101727] pt-20 md:pt-30">
      <div className="max-w-300 mx-auto px-2">
        <div className="flex flex-col md:flex-row gap-4 md:justify-between pb-20 border-b-2 border-[#E5E7EB20]">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              DigiTools
            </h2>
            <p className="mt-4 max-w-87.5 text-[#ffffff80]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Product</h4>
            <div className="space-y-4 text-[#ffffff80]">
              <p>Features</p>
              <p>Pricing</p>
              <p>Templates</p>
              <p>Integrations</p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Company</h4>
            <div className="space-y-4 text-[#ffffff80]">
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Resources</h4>
            <div className="space-y-4 text-[#ffffff80]">
              <p>Documentation</p>
              <p>Help Center</p>
              <p>Community</p>
              <p>Contact</p>
            </div>
          </div>

          <div className="">
            <h4 className="text-white text-lg font-medium mb-4">
              Social Links
            </h4>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full flex justify-center items-center bg-white">
                <RiInstagramFill></RiInstagramFill>
              </div>

              <div className="h-10 w-10 rounded-full flex justify-center items-center bg-white">
                <IoLogoFacebook></IoLogoFacebook>
              </div>

              <div className="h-10 w-10 rounded-full flex justify-center items-center bg-white">
                <FaXTwitter></FaXTwitter>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 text-[#FAFAFA50] flex flex-col md:flex-row gap-3 justify-between">
          <p className="">© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-3">
            <p>Privacy Policy </p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
<div>Footer</div>;
