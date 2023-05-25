import React from "react"
import styled, { css } from "styled-components"
import { nullFn } from "src/utils"

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: ${props => props.width || "auto"};
	justify-content: center;
	align-items: center;
	gap: 0.6rem;
	font-weight: bold;
	cursor: pointer;
	border-radius: 32px;

	${props => props.size == "default" && css`
		padding: 1rem 3rem;
		font-size: 1.1rem;
	`}

	${props => props.size == "small" && css`
		padding: 0.7rem 1rem;
	`}

	${props => props.type == "default" && css`
		background: var(--primary);
		color: #272727;

		:hover {
			background: var(--primary-lighter);
			${props => props.active == false && css`
				background: #aaa;
				color: #545454;
			`}
		}

		${props => props.active == false && css`
			background: #aaa;
			color: #545454;
		`}
	`}

	${props => props.type == "outline" && css`
		background: rgba(255, 255, 255, 0.9);
		border: 4px solid var(--primary);
		box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
		color: var(--primary);

		:hover {
			color: var(--primary-lighter);
			border: 4px solid var(--primary-lighter);
		}
	`}

	${props => props.type == "outline-thin" && css`
		color: var(--primary);
		padding: 0.5rem 0.7rem;
		border: 1px solid #ddd;
		
		:hover {
			color: var(--primary-lighter);
		}
	`}

	${props => props.type == "text" && css`
		padding: 0.5rem 0.7rem;
		color: var(--primary);

		:hover {
			color: var(--primary-lighter);
		}
	`}

`

const Button = ({ className, children, style, onClick, type = "default", size = "default", width, active = "true" }) => {
	return (
		<ButtonContainer
			className={className}
			style={style}
			onClick={active ? onClick : nullFn}
			type={type}
			size={size}
			width={width}
			active={active}>
			{children}
		</ButtonContainer>
	)
}

export default Button
