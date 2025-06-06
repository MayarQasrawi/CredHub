import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import FormContainer from "../../components/FormContainer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Alert from "../../components/shared/Alert";
import PasswordResetStepper from "../../components/shared/PasswordResetStepper";
import useResetPassword from "../../hooks/auth/forgetpassword/useResetPassword";
import useAutoFocus from "../../hooks/useAutoFocus";
import { resetPasswordSchema } from "../../validation/validation";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate, isPending,isSuccess, data, isError,error } = useResetPassword();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const password = useAutoFocus();
  const onSubmit = ({ password }) => {
    // console.log({ password, token:decode1, email },'data send');
    mutate({ password, email, token: token });
  };

  return (
    <>
     {isError && <Alert type='error' message={error.response.data.errors[0] || 'Network Error'} />}
     {isSuccess && <Alert  message={data.data.meta}/>}
      <div className="flex items-center gap-30 bg-gray-100 justify-center">
        <PasswordResetStepper currentStep={2} />
        <FormContainer
          onSubmit={handleSubmit(onSubmit)}
          image={false}
          children={
            <div>
              <Header text="Reset Password" />
              <Input
                type="password"
                placeholder="Enter new password"
                name="password"
                icon={<FaLock />}
                register={() => {
                  const registeration = register("password");
                  return {
                    ...registeration,
                    ref: (el) => {
                      registeration.ref(el);
                      password.current = el;
                    },
                  };
                }}
                errors={errors}
              />
              <Input
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                icon={<FaLock />}
                register={register}
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
