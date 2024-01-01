import { useContext } from "react";
import gif from "../../assets/others/authentication2.png";
import bgImg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { loading, emailSignUp } = useContext(AuthContext);
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    emailSignUp(data.email, data.password)
      .then(res => {
        const user = res.user;
        console.log(user);
    })
  };


  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={gif} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-4xl font-bold text-center">Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered"
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
                />
              </div>

              <div className="form-control mt-4">
                <button
                  type="submit"
                  className="btn btn-primary bg-[#D1A054] border-0 hover:bg-white"
                >
                  sign up
                </button>
              </div>
            </form>
            <Link to={"/login"}>
              <p className="text-center text-yellow-500 my-5">
                <small>Already registered? Go to log in</small>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
