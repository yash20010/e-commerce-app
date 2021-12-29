import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: Uppercase;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  text-transform: Uppercase;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`
const Error = styled.span`
  color: red;
`

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  text-transform: Uppercase;
  cursor: pointer;
`

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Do not remember the password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
