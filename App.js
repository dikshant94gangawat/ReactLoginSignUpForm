import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    console.log("entry 2");
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const clearContent = () => {
    console.log("entry 1");

    setValue({
      name: "",
      email: "",
      password: "",
      // ... other input fields
    });
  };

  useEffect(() => {
    const container1 = document.getElementById("container1");
    // const overlayCon = document.getElementById("overlayCon ");
    const overlayBtn = document.getElementById("overlayBtn");

    overlayBtn.addEventListener("click", () => {
      if (container1) {
        container1.classList.toggle("right-panel-active");
        overlayBtn.classList.remove("btnScaled");
        window.requestAnimationFrame(() => {
          overlayBtn.classList.add("btnScaled");
        });
      } else {
        console.error("container1 not found");
      }
    });
  });

  return (
    <div className="App">
      <div className="container1 " id="container1">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a
                href="https://www.youtube.com/c/jamesqquick"
                className="youtube social"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <div className="infield">
              <input
                type="text"
                value={value.name}
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
              />
              <label></label>
            </div>
            <div className="infield">
              <input
                type="email"
                value={value.email}
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
              <label></label>
            </div>
            <div className="infield">
              <input
                type="password"
                value={value.password}
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
              />
              <label></label>
            </div>
            <button type="button">Sign Up</button>
            <button onClick={clearContent} type="button">
              Clear
            </button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a
                href="https://www.youtube.com/c/jamesqquick"
                className="youtube social"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
            <span>or use your account</span>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <a href="/" className="forgot">
              Forgot your password?
            </a>
            <button>Sign In</button>
          </form>
        </div>

        <div className="overlay-container" id="overlayCon">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button>Sign In</button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button>Sign Up</button>
            </div>
          </div>
          <button id="overlayBtn"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
