import React from "react"
import styled from "styled-components"
import { Notyf } from "notyf"
import "notyf/notyf.min.css"
import { HasabForm, Space } from "comp"
import { saveMessage } from "src/api"

const ops = {
	position: { x: "left", y: "top" },
	ripple: false,
}
const Home = () => {
	const handleSubmit = (message) => {
		saveMessage(message)
			.then(()=> {
				const notyf = new Notyf(ops)
				notyf.success("ሀሳብዎ ደርሶናል ቴንክዩ")
			})
			.catch(() => {
				const notyf = new Notyf(ops)
				notyf.error("Check your internet connection, something's wrong")
			})
	}
	return (
		<Container>
			<Title>NCA ሀሳብ መስጫ ሳጥን</Title>
			<Space h="2rem" />
			<HasabForm onSubmit={handleSubmit} />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	max-width: 500px;
	margin: 0 auto;
`
const Title = styled.div`
	font-size: 3rem;
	text-align: center;
	color: var(--primary);
	font-weight: bold;
`

export default Home
