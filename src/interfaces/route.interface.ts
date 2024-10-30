export interface IRoutes {
    path: string;
    name: string;
    element: () => JSX.Element;
}