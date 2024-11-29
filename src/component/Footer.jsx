import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="col-lg-12">
          <FaFacebookSquare className="iconFooter" />
          <FaInstagram className="iconFooter" />
          <FaTwitter className="iconFooter" />
        </div>

        <div className="row">
          <div className="col-6 col-sm-6  col-sm-6  col-md-4 col-lg-3  d-flex mt-lg-4 px-2">
            <p className="text-dark-emphasis">Audio and subtitles</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis mt-lg-4 mt-sm-0 me-sm-0">
              Audio Description
            </p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
            <p className="text-dark-emphasis mt-lg-4 mt-sm-0 me-sm-0">
              Help Center
            </p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis mt-lg-4 mt-sm-0">Gift Cards</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis">Media Center</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis">Investor Relations</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis">Jobs</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis">Terms of Use</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis">Privacy</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis">Legal Notices</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis">Cookie Preference</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3  ">
            <p className="text-dark-emphasis">Corporate Information</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
            <p className="text-dark-emphasis">Contact Us</p>
          </div>
        </div>

        <p className="mt-4 text-light-emphasis">1997-2019 Netflix,inc. </p>
      </div>
    </>
  );
};
export default Footer;
