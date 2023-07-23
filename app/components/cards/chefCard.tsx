import { Box, Button, Card, Image, Text, Textarea, useToast } from "@chakra-ui/react"
import Avatar, { genConfig } from "react-nice-avatar"
import truncateEthAddress from "truncate-eth-address"

const ChefCard = ({
  address
}: {
  address: string
}) => {
  const config = genConfig(address)
  const toast = useToast()
  return (
    <Card maxW='420px' flex={1} h='160px' boxShadow='md' display='flex' alignItems='stretch' flexDir='row' px={6} bg='#f8f9fa'>
      <Box display='flex' flexDir='column' justifyContent='center' pos='relative'>
        <Avatar style={{ width: '6rem', height: '6rem' }} {...config} />
        <Box pos='absolute' bg='white' p={2} borderRadius='full' cursor='pointer' right={0} top='75px' boxShadow='base'>
          <Image src='/icons/qrcode.png' alt='copy' h={6} w={6}/>
        </Box>
        <Box display='flex' alignItems='center' mt={2}>
          <Text fontSize='sm'>{truncateEthAddress(address)}</Text>
          <Image ml={1} src='/icons/copy.png' alt='copy' h={3} w={3} cursor='pointer' onClick={() => {
            toast({
              position: 'bottom',
              duration: 1200,
              render: () => (
                <Box p={3} bg='green.400' borderRadius='md'>
                  <Text fontSize='sm' color='white'>Address Copied!</Text>
                </Box>
              ),
            })
          }} />
        </Box>
      </Box>

      <Box display='flex' flexDir='column' flex={1} py={3} ml={6}>
        <Box display='flex' alignItems='center' mt={2}>
          <Text fontSize='sm' fontWeight='bold'>Active Orders</Text>
          <Button ml='auto' size='xs'>View Items</Button>
        </Box>

        <Box flex={1} p={2} bg='white' overflow='scroll' mt={2} borderRadius='base'>
          <Text whiteSpace='break-spaces' wordBreak='break-all' fontFamily='mono' fontSize='xs'>
            {address}
          </Text>
        </Box>
      </Box>

    </Card>
  )
}

export default ChefCard