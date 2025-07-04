import { Link, NavLink, useMatch, type To } from "react-router";
import { cn } from "~/lib/utils";

type NavItemProps = {
	section: string;
	isActive?: boolean;
	to: To;
	className?: string;
};
export const NavItem = ({
	className,
	section,
	to,
	isActive = false,
}: NavItemProps) => {
	const isBlog = useMatch("/blog");
	return (
		<li>
			<NavLink
				viewTransition={true}
				to={to}
				className={({ isActive: isActivePage }) =>
					cn(
						`relative py-2 px-1 transition duration-300 ease-in-out capitalize ${
							(isBlog && isActivePage) || isActive
								? "text-primary font-medium"
								: "text-gray-700 hover:text-primary"
						}`,
						className,
					)
				}
			>
				{section === "hero" ? "Home" : section}
				{/*{isActive && (*/}
				{/*    // marker line on the bottom*/}
				{/*    <span*/}
				{/*        className="absolute bottom-0 left-0 w-full h-[3px] rounded-full  bg-linear-90 bg-[#ff758c] shadow-sm"*/}
				{/*    />*/}
				{/*)}*/}
			</NavLink>
		</li>
	);
};
