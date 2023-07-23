import { Box } from "@chakra-ui/react"
import Header from "./header"
import { PropsWithChildren } from "react"

const NavLayout = ({children}: PropsWithChildren) => {
  return (
    <Box
      display='flex'
      flexDir='column'
      alignItems='stretch'
      pb={12}
    >
      <Header />
      {children}
    </Box>
  )
}

export default NavLayout