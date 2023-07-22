import { Box } from "@chakra-ui/react"
import InventoryCard, { CardTypes } from "./inventoryCard"

const EquipmentCard = () => {
  return (
    <InventoryCard cardType={CardTypes.equipment}>
      <Box></Box>
    </InventoryCard>
  )
}

export default EquipmentCard