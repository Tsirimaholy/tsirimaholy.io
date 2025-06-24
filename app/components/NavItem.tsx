import { Link, NavLink, type To } from "react-router";

type NavItemProps = {
  section: string;
  isActive?: boolean;
  to: To;
};
export const NavItem = ({ section, to, isActive = false }: NavItemProps) => (
  <li>
    <NavLink
      viewTransition={true}
      to={to}
      className={({ isActive }) => {
        return `relative py-2 px-1 transition duration-300 ease-in-out capitalize ${
          isActive
            ? "text-primary font-medium"
            : "text-gray-700 hover:text-primary"
        }`;
      }}
    >
      {section === "hero" ? "Home" : section === "Home" ? "About me" : section}
      {/*{isActive && (*/}
      {/*    // marker line on the bottom*/}
      {/*    <span*/}
      {/*        className="absolute bottom-0 left-0 w-full h-[3px] rounded-full  bg-linear-90 bg-[#ff758c] shadow-sm"*/}
      {/*    />*/}
      {/*)}*/}
    </NavLink>
  </li>
);
