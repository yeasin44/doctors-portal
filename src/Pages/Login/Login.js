import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState();

  // JWT useState
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const { login } = useContext(AuthContext);
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message.slice(22, -2));
      });
  };
  return (
    <div className="h-[800px]   flex justify-center items-center">
      <div className="w-96 p-8 border-2 border-slate-900 rounded-2xl">
        <h2 className="text-xl text-center font-bold py-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Forget password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600 py-1">{errors.password?.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          {loginError && <p className="text-red-600 mb-1">{loginError}</p>}
          <p className="mt-2">
            New to doctors portal?{" "}
            <Link className="text-primary" to="/signup">
              Create an account
            </Link>
          </p>
          <div className="divider">OR</div>
          <input
            type="submit"
            className="btn btn-outline w-full"
            value="CONTINUE WITH GOOGLE"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
