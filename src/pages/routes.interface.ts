export type RouteType = {
  path: string;
  exact?: boolean;
};

export type RoutesConfigType = Record<string, RouteType>;
