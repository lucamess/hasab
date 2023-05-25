import styled from "styled-components"

export const Input = styled.input`
	box-sizing: border-box;
	background: #fff;
	border: 2px solid var(--primary);
	padding: 1rem 1rem;
	color: #545454;
	border-radius: 32px;
`


export const InputMultiple = styled(Input).attrs({ as: "textarea" })`
	font-family: sans-serif;
`
