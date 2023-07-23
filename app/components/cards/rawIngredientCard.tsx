import { Box, Image, Text } from "@chakra-ui/react"
import InventoryCard, { CardTypeMetadata, CardTypes } from "./inventoryCard"

const RawIngredientCard = ({
  title,
  imgUrl,
  quantity,
  units,
}: {
  title: string,
  imgUrl: string,
  quantity: number,
  units: string,
}) => {
  return (
    <InventoryCard cardType={CardTypes.rawIngredient} style={{ flex: 0 }} label={title} imgUrl={imgUrl}>
      <Box height='full' display='flex' flexDir='column' p={4} pos='relative'>
        <Text fontWeight='semibold'>{title}</Text>
        <Box pos='absolute' bg='white' p={2} borderRadius='full' cursor='pointer' w='40px' boxShadow='base' m='auto' top='-22px' right={4}>
          <Image src='/icons/qrcode.png' alt='copy' h={6} w={6} />
        </Box>

        <Box mt={2} mb='auto' flex={1}  display='flex' flexDir='column'>
          <Text fontSize='xs'>Available: </Text>
          <Text fontSize='lg' fontWeight='semibold' m='auto'>{quantity} {units}</Text>
        </Box>

        <Box pos='absolute' bg={CardTypeMetadata[CardTypes.rawIngredient].color} p={2} borderRadius='full' cursor='pointer' w='40px' boxShadow='base' m='auto' top='-22px' right={16}>
          <Image src='/icons/fresh.png' alt='copy' h={6} w={6} />
        </Box>

        <Text fontSize='xs' mt='auto'>Purchased On: </Text>
        <Text fontSize='xs'>Use Before: </Text>
      </Box>
    </InventoryCard>
  )
}

export default RawIngredientCard