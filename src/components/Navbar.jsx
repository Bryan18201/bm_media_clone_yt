import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background: '#000',
    top: 0, justifyContent:'space-between'}}>

    <Link to="/" style={{display: 'flex', alignItems:'center'}}>
    <img src={logo} alt="logo" height={55} />
    <span className="name_navbar" style={{ color: "#FC1503", fontSize: "40px", padding: "10px" }}

    >BM MEDIA</span>  
    </Link>
    
    <SearchBar/>

    
    </Stack>
 
 
 
    )


export default Navbar