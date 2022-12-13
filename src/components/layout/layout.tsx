import { header } from "./header";
export const Layout = (children: JSX.Element) => {
    return (
        <div className="container">
            <header className="main-header"></header>
            <main className="main">{children}</main>
        </div>
    );
};
