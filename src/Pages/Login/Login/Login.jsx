import { useEffect, useRef, useState } from "react";
import gif from "../../../assets/others/authentication2.png";
import bgImg from "../../../assets/reservation/wood-grain-pattern-gray1x.png";
// import racaptcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setdisable] = useState(true);
  useEffect(() => {
    fetch(loadCaptchaEnginge(6));
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    const value = { email, password, captcha };
    console.log(value);
  };
  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setdisable(false);
    } else {
      setdisable(true);
    }
  };
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={gif} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-4xl font-bold text-center">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <LoadCanvasTemplate />
                  </span>
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="input the avobe text"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <button disabled={disable} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
