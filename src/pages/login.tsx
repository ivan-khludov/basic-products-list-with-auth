import { LoginForm } from "@/features/auth/ui/login-form";
import { LogoCircle } from "@/features/auth/ui/logo-circle";

export const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="rounded-[40px] bg-white p-1.5 shadow-(--shadow-1)">
        <div className="flex flex-col items-center gap-[32px] rounded-[34px] border border-solid border-transparent p-[48px] [background:var(--bg-gradient-soft)_padding-box,var(--bg-gradient-stroke)_border-box]">
          <LogoCircle />
          <div className="flex w-[417px] flex-col items-center gap-3">
            <h1 className="text-heading-auth">Добро пожаловать!</h1>
            <p className="text-subtitle-auth">Пожалуйста, авторизуйтесь</p>
          </div>
          <LoginForm />
          <p className="text-no-account">
            Нет аккаунта?{" "}
            <button
              type="button"
              className="cursor-pointer border-b-2 border-solid border-(--brand-primary) leading-[115%] font-medium text-(--brand-primary)"
            >
              Создать
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};
