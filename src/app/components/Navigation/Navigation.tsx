'use client'
import React from 'react'
import { Logo, NaviTop, NavItems,NavLink,NavLinks } from './Navigation.styled';

const Navigation = () => {
  return (
		<div>
			<NaviTop>
				<Logo>Zavier Lowe</Logo>

				<NavLinks>
					<NavItems>
						<NavLink>Projects</NavLink>
					</NavItems>

					<NavItems>
						<NavLink>About</NavLink>
					</NavItems>

					<NavItems>
						<NavLink>Playground</NavLink>
					</NavItems>

					<NavItems>
						<NavLink href={"https://github.com/ZavierLowe"} target="_blank">
							Github
						</NavLink>
					</NavItems>

					<NavItems>
						<NavLink>Resume</NavLink>
					</NavItems>
				</NavLinks>
			</NaviTop>
		</div>
	);
}

export default Navigation
