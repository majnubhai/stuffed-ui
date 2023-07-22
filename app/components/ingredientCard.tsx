import { Box } from "@chakra-ui/react"
import InventoryCard, { CardTypes } from "./inventoryCard"

const IngredientCard = () => {
  return (
    <InventoryCard cardType={CardTypes.ingredient}>
      <Box></Box>
    </InventoryCard>
  )
}

export default IngredientCard