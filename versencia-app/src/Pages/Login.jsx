import {Input,Container,Button,Stack,Heading} from "@chakra-ui/react"
import { useState } from "react";
import axios from "axios"
// import { AuthContext } from "../../context/AuthContextProvider";
// import { getLogin } from "./api";
import { useNavigate } from "react-router-dom";
function Login() {
  const [loading,setloading]=useState(false)
  const [userData,setData]=useState({
    username:"",password:""
  })
  const [data,Setdata]=useState([])
 const navigate =useNavigate()
 
const getLogin=(data)=>{
    return axios({
            url:`https://dummyjson.com/auth/login`,
            method:"post",
             data:data
        })
    
}

  // const {login}=useContext(AuthContext)
  
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
Setdata(res.data)
  setloading(false)
  navigate(`/`)
})

 }
 //console.log(data.firstName)
 const {username,password}=userData
  return (
    <Container maxW="container.md" mt={4} marginBottom={10} border="1px solid #000029" borderRadius={4} p={4} h={80}>
<Heading>Welcome To Versencia</Heading>
      
      <Stack>
    <form onSubmit={handleSubmit}>
      
      <Input type ="text" placeholder="Username" name="username" value={username} _placeholder={{ opacity: 1, color: 'gray.600' }} onChange={handleChange}/>
      <br/>
      <br/>
      <br/>
      <Input type="passsword" placeholder="Password" name="password" _placeholder={{ color: 'teal' }} value={password} onChange={handleChange}/>
      <br/>
      <br/>
      <br/>
      <Button type="submit" isLoading={loading}>Login</Button>
      <br/>
      <br/>
    </form>
    </Stack>
    </Container>
    
  );
}

export default Login;