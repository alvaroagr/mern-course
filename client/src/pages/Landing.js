import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div class="container page">
        <div class="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            repudiandae exercitationem impedit optio quo. Eaque aliquid commodi
            dolorem neque libero magnam exercitationem quidem est voluptatum
            suscipit eius, temporibus accusamus delectus.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
