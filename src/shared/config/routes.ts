export interface RouteConfig {
  href: string;
  access: "public" | "protected" | "auth";
}

const HOME: RouteConfig = {
  href: "/",
  access: "protected",
};

const LOGIN: RouteConfig = {
  href: "/login",
  access: "auth",
};

export const ROUTES_CONFIG = {
  HOME,
  LOGIN,
} as const;
