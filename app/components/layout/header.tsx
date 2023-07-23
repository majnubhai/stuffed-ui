'use client'

import { Image, Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box bg='#f8f9fa' py={5} display='flex'>
      <Box px={8} mx='auto' flex={1} display='flex' alignItems='center'>
        <Box display='flex' alignItems='center' cursor='pointer'>
          <Image src='icons/stuffed.svg' alt='stuffed' h='52px' />
          <Text fontWeight='bold' fontSize='3xl'>Stuffed</Text>
        </Box>

        <Box display='flex' alignItems='center' ml='auto'>    
          <Text fontWeight='bold' color='brandRed.500' cursor='pointer' transition='transition 0.3s ease' _hover={{transform: 'scale(1.08)'}}>Pizza Analyzer</Text>
          <Text ml={6} cursor='pointer' _hover={{textDecoration: 'underline'}}>About</Text>
          <Text ml={6} cursor='pointer' _hover={{textDecoration: 'underline'}}>Twitter</Text>
          <Text fontSize='xs' ml={1}>(Customer Support)</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Header