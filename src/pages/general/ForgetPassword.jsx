import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { FaEnvelope } from "react-icons/fa";
import Button from "../../components/Button";
import { emailSchema } from "../../validation/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import useSendEmail from "../../hooks/auth/forgetpassword/useSendEmail";
import Header from "../../components/Header";
import FormContainer from "../../components/FormContainer";
import useAutoFocus from "../../hooks/useAutoFocus";
import PasswordResetStepper from "../../components/shared/PasswordResetStepper";
import Alert from "../../components/shared/Alert";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema), // Integrate Zod with react-hook-form
  });
  const { mutate, isPending, isSuccess, data, isError,error } = useSendEmail();
  const emailRef = useAutoFocus();

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };
console.log(error,'change password')
console.log(data,'change password')
  return (
    <>
     {isError && <Alert type='error' message={error?.response?.data?.errors[0] || 'Network Error'} />}
     {isSuccess && <Alert  message={data.data.meta}/>}
      <div className="flex items-center gap-30 bg-gray-100 justify-center">
        <PasswordResetStepper />
        <FormContainer
          onSubmit={handleSubmit(onSubmit)}
          image={false}
          children={
            <div>
              <Header text="Forgot Password" />
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                icon={<FaEnvelope />}
                register={() => {
                  const registeration = register("email");
                  return {
                    ...registeration,
                    ref: (el) => {
                      registeration.ref(el);
                      emailRef.current = el;
                    },
                  };
                }}
                errors={errors}
              />
              <Button btnText="Reset Password" disabled={isPending} />
              <div className="mt-4 text-center"></div>
            </div>
          }
        />
      </div>
    </>
  );
}

export default ForgotPassword;
