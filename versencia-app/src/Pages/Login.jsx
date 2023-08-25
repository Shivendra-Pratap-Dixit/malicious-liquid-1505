import {Input,Container,Button,Stack,Heading} from "@chakra-ui/react"
import { useState } from "react";
import axios from "axios"
// import { AuthContext } from "../../context/AuthContextProvider";
// import { getLogin } from "./api";
import { useNavigate } from "react-router-dom";
function Login() {

  const [userData,setData]=useState({
    email:"",password:""
  })
 const navigate =useNavigate()
 
const getLogin=(data)=>{
    return axios({
            url:``,
            method:"post",
             data:data
        }).then((res)=>{
            const token=res?.data?.token
            return token
        })
    
}
  // const {login}=useContext(AuthContext)
  const [loading,setloading]=useState(false)
  const handleChange=(e)=>{
const {name,value}=e.target;
setData({
  ...userData,[name]:value
})
  }
 const handleSubmit=(e)=>{
e.preventDefault()
setloading(true)
getLogin(userData)
.then((res)=>{
  // login(res)
  setloading(false)
  navigate(`/`)
})

 }
 const {email,password}=userData
  return (
    <Container maxW="container.md" mt={4}>
<Heading>Welcome To Versencia</Heading>
      {/* Add form here */}
      <Stack>
    <form onSubmit={handleSubmit}>
      
      <Input type ="email" placeholder="Email" name="email" value={email} _placeholder={{ opacity: 1, color: 'gray.600' }} onChange={handleChange}/>
      <br/>
      <br/>
      <Input type="passsword" placeholder="Password" name="password" _placeholder={{ color: 'teal' }} value={password} onChange={handleChange}/>
      <br/>
      <br/>
      <Button type="submit" isLoading={loading}>Login</Button>
      
    </form>
    </Stack>
    </Container>
  );
}

export default Login;