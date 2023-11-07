import React from "react";
import styled from "styled-components";

export const NaviTop = styled.nav`
	font-family: "ClashDisplay-variable", sans-serif;
	padding: 24px 24px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #0c0c0c;
	@media (max-width: 1024px) {
		display: flex;
	}
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 425px) {
		display: none;
	}
`;
export const Logo = styled.h2`
	font-size: 24px;
	font-weight: 500;
	color: #090909;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		color: #7926e6;
		text-decoration: underline;
		transition: all 0.3s;
	}
`;
export const NavLinks = styled.div`
	display: flex;
	font-size: 20px;
	font-weight: 500;
	color: #090909;
	text-decoration: none;

	@media (max-width: 425px) {
		display: block;
	}
`;
export const NavItems = styled.ul`
	display: flex;
	margin-left: 16px;
	cursor: pointer;
	text-decoration: none;
	font-weight: 500;
	&:hover {
		color: #a421fb;
		transition: all 0.2s;
	}
	@media (max-width: 425px) {
		display: inline-block;
	}
`;

export const NavLink = styled.a`
	color: #030303;
	text-decoration: none;
	font-weight: 500;
	&:hover {
		color: #7926e6;
		text-decoration: underline;
		transition: all 0.3s;
	}
`;
