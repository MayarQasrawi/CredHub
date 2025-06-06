import { useEffect, useRef, useState } from "react";
import {
  useForm,
  FaEnvelope,
  FaLock,
  z,
  zodResolver,
  Link,
  Input,
  Button,
  Header,
  FormContainer,
} from "../sharedImports";
import useSignin from "../../hooks/auth/useLogin";
import { signinSchema } from "../../validation/validation";
import login from "../../assets/img/animation/loginA.json";
import Alert from "../shared/Alert";
import { HiArrowNarrowLeft } from "react-icons/hi";

// Input fields configuration
const inputFields = [
  {
    type: "email",
    placeholder: "Enter your email",
    name: "email",
    icon: <FaEnvelope />,
  },
  {
    type: "password",
    placeholder: "Enter your password",
    name: "password",
    icon: <FaLock />,
  },
];

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema), // Integrate Zod with react-hook-form
    mode: "onChange",
  });
  const [serverError, setServerError] = useState([]); // State for server errors
  const { mutate, isPending, isError, error, isSuccess, data } = useSignin();
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  const onSubmit = ({ email, password }) => {
    setServerError([]);
    console.log({ email, password });
    mutate({ email, password });
  };

  console.log(error, "during login");
  return (
    <>
      {isError && (
        <Alert
          type="error"
          message={error?.response?.data?.message || "Network Error"}
        />
      )}
      {isSuccess && <Alert message={data.message} />}

      <FormContainer onSubmit={handleSubmit(onSubmit)} image={login}>
        <div >
          <Header text="Login" />
          {/* Display server error message */}
          {serverError && (
            <div className="text-red-500 text-sm mb-4">{serverError}</div>
          )}
          {/* Map over the inputFields array to render Input components */}
          {inputFields.map((field, index) => {
            const fieldRegister =
              index == 0
                ? (name) => {
                    console.log(name);
                    const registration = register(name);
                    return {
                      ...registration,
                      ref: (el) => {
                        registration.ref(el);
                        ref.current = el;
                      },
                    };
                  }
                : register;
            return (
              <div key={index}>
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  icon={field.icon}
                  register={fieldRegister}
                  errors={errors}
                />
              </div>
            );
          })}

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              {...register("rememberMe")} // Register the checkbox with react-hook-form
              className="w-3 h-3"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-500">
              Remember Me
            </label>
          </div>

          <Button btnText={"Login"} disabled={isPending} />

          {/* Forgot Password Link */}
          <div className="mt-2 text-center text-sm">
            <Link
              to="/forgetPassword"
              className="text-indigo-500 hover:text-indigo-700"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="mt-1 text-center text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <Link
              to="/signup"
              className="text-indigo-500 hover:text-indigo-700 underline"
            >
              Sign Up
            </Link>
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-gray-400 hover:text-gray-600 text-sm cursor-pointer flex items-center gap-1 justify-center"
              >
               <HiArrowNarrowLeft /> Back to Ratify
              </Link>
            </div>
          </div>
        </div>
      </FormContainer>
    </>
  );
}

export default Login;
