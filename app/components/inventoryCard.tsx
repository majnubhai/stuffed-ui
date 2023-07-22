import { Box, Card, Text } from "@chakra-ui/react"

export enum CardTypes {
  rawIngredient = 0,
  ingredient = 1,
  order = 2,
  equipment = 3
}

const CardTypeMetadata = [{
  color: '#F5CF64',
  label: 'Raw Ingredient'
}, {
  color: '#6AAC9F',
  label: 'Ingredient'
}, {
  color: '#E77867',
  label: 'Order'
}, {
  color: '#C4C1B0',
  label: 'Equipment'
}]

const InventoryCard = ({cardType, children}: {cardType: CardTypes, children: React.ReactElement}) => {
  return (
    <Card flex={1} minW='280px' h='520px' boxShadow='md' display='flex' alignItems='stretch' flexDir='column' bg='#f8f9fa' overflow='clip'>
      <Box bg={CardTypeMetadata[cardType].color} px={4} py={1}>
        <Text fontWeight='bold' fontSize='xs' textTransform='uppercase'>{CardTypeMetadata[cardType].label}</Text>
      </Box>
      {children}
    </Card>
  )
}

export default InventoryCard