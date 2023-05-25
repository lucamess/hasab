import React, { useState } from "react"
import styled from "styled-components"
import { InputMultiple, Button, Space } from "comp"
import { nullFn } from "src/utils"

const HasabForm = ({ onSubmit = nullFn }) => {
	const [hasab, setHasab] = useState("")
	return (
		<Container>
			<InputMultiple value={hasab} onChange={e => setHasab(e.target.value)}
				rows="6" placeholder="..." />
			<Space h="1rem" />
			<Button onClick={() => {
				onSubmit(hasab)
				setHasab("")
			}}>Send</Button>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export default HasabForm
