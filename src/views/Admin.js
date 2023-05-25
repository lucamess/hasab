import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Space } from "comp"
import { fetchMessages } from "src/api"

const Admin = () => {
	const [messages, setMessages] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetchMessages()
			.then(messages => {
				setMessages(messages)
				setLoading(false)
			})
	}, [])
	return (
		<Container>
			<Title>Admin page</Title>
			<Space h="1rem" />
			{loading ? <Loading>Loading ሀሳቦች</Loading> :
					messages.length == 0 ? <Nothing>ለጊዜው no ሀሳቦች </Nothing> :
					messages.map(message => 
					<Message key={message}>
						<Date>May 25</Date>
						{message}
					</Message>)}
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
	font-size: 2rem;
	text-align: center;
	color: var(--primary);
	font-weight: bold;
`

const Date = styled.div`
	text-align: right;
	color: #aaa;
	font-size: 0.8rem;
`
const Loading = styled.div`
	font-size: 1.6rem;
	text-align: center;
	color: #454545;
`

const Nothing = styled.div`
	font-size: 1.6rem;
	text-align: center;
	color: #454545;
`

const Message = styled.div`
	padding: 2rem;
	border: 2px solid var(--primary);
	border-radius: 32px;
	margin-bottom: 1rem;
`

export default Admin
