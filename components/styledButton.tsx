import styled from "styled-components";

type ButtonProps = {
  color: string
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};
  font-size: 2em;
`

const StyledButton = (props: ButtonProps) => {
  const {color, backgroundColor} = props
  return(
    <Button color={color} backgroundColor={backgroundColor}>
      styled button
    </Button>
  )
}

export default StyledButton
