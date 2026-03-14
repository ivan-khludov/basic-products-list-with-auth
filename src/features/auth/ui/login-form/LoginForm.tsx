import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm, type FieldErrors } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { login } from "@/features/auth/api/auth-api";
import { useAuthStore } from "@/features/auth/model/auth-store";
import {
  loginSchema,
  type LoginInput,
} from "@/features/auth/model/login-schema";
import { LoginPasswordInput } from "@/features/auth/ui/login-password-input";
import { LoginSubmitButton } from "@/features/auth/ui/login-submit-button";
import { LoginTextInput } from "@/features/auth/ui/login-text-input";
import { ROUTES_CONFIG } from "@/shared/config/routes";
import { ERROR_MESSAGE } from "@/shared/constants/messages";
import { Checkbox } from "@/shared/ui/checkbox";

const loginFormSchema = loginSchema.extend({
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);

  const { control, getValues, handleSubmit, setValue } =
    useForm<LoginFormValues>({
      resolver: zodResolver(loginFormSchema),
      defaultValues: {
        username: "",
        password: "",
        rememberMe: false,
      },
    });

  const loginMutation = useMutation({
    mutationFn: ({ username, password }: LoginInput) =>
      login(username, password),
    onSuccess: (result) => {
      if (result.success) {
        setSession(result.data, getValues("rememberMe"));
        navigate(ROUTES_CONFIG.HOME.href, { replace: true });
      } else {
        toast.error(result.error);
      }
    },
    onError: () => {
      toast.error(ERROR_MESSAGE.NETWORK_ERROR);
    },
  });

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue("rememberMe", event.target.checked);
  };

  const onSubmit = (data: LoginInput) => {
    loginMutation.mutate(data);
  };

  const fieldLabels: Record<keyof LoginInput, string> = {
    username: "Логин",
    password: "Пароль",
  };

  const handleInvalid = (validationErrors: FieldErrors<LoginFormValues>) => {
    const fieldsWithErrors = (["username", "password"] as const).filter(
      (key) => validationErrors[key]?.message,
    );

    if (fieldsWithErrors.length === 0) {
      toast.error(ERROR_MESSAGE.UNKNOWN_ERROR);

      return;
    }

    const labels = fieldsWithErrors.map((key) => fieldLabels[key]);
    const message = validationErrors[fieldsWithErrors[0]]?.message;
    toast.error(`${labels.join(", ")}: ${message}`);
  };

  return (
    <form
      className="flex w-[399px] flex-col gap-4"
      onSubmit={handleSubmit(onSubmit, handleInvalid)}
      noValidate
    >
      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <LoginTextInput
            label="Логин"
            name="username"
            placeholder="Логин"
            autoComplete="username"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <LoginPasswordInput
            label="Пароль"
            name="password"
            placeholder="Пароль"
            autoComplete="current-password"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <Checkbox
        label="Запомнить данные"
        checked={getValues("rememberMe")}
        onChange={handleRememberMeChange}
      />
      <LoginSubmitButton disabled={loginMutation.isPending} />
      <div className="relative flex h-[24px] items-center justify-center before:absolute before:top-1/2 before:right-0 before:left-0 before:h-px before:-translate-y-1/2 before:bg-(--auth-or-line) before:content-['']">
        <span className="relative z-10 bg-white px-2.5">
          <span className="text-auth-or">или</span>
        </span>
      </div>
    </form>
  );
};
