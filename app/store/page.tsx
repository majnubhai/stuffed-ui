'use client'

import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import ChefCard from "../components/chefCard"
import { useState } from "react"
import IngredientCard from "../components/ingredientCard"
import EquipmentCard from "../components/equipmentCard"

const Store = () => {
  const [chefs, setChefs] = useState([
    { id: 0, address: '0x43Cb32825f0A1CBaC2fd6B11a18f46aa81D142f4' },
    { id: 1, address: '0x43Cb32825f0A1CBaC2fd6B11a18f46aa81D142f4' },
    { id: 2, address: '0x43Cb32825f0A1CBaC2fd6B11a18f46aa81D142f4' },
    { id: 3, address: '0x43Cb32825f0A1CBaC2fd6B11a18f46aa81D142f4' },
    { id: 4, address: '0x43Cb32825f0A1CBaC2fd6B11a18f46aa81D142f4' },
    { id: 5, address: '0x43Cb32825f0A1CBaC2fd6B11a18f46aa81D142f4' },
  ])

  const [ingredients, setIngredients] = useState([{
    id: 'ing0',
  }, {
    id: 'ing1'
  }, {
    id: 'ing2'
  }, {
    id: 'ing3'
  }, {
    id: 'ing4'
  }, {
    id: 'ing5'
  }])

  const [equipment, setEquipment] = useState([{
    id: 'eqp-0'
  }])

  return (
    <>
      <Box mt={6} display='flex' justifyContent='center'>
        <Button colorScheme='brandRed'>Place New Order</Button>
        <Button ml={3}>Your Orders</Button>
      </Box>

      <Box mt={6} px={12}>
        <Text fontSize='2xl' fontWeight='bold' mb={2}>Chefs</Text>
        <Flex gap={6} flexWrap='wrap'>
          {chefs.map((chef) => (
            <Box key={chef.id} flex={1} display='flex' justifyContent='center'>
              <ChefCard
                address={chef.address}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt={12} px={12}>
        <Text fontSize='2xl' fontWeight='bold' mb={2}>Inventory</Text>
        <Flex gap={6} flexWrap='wrap'>
          {ingredients.map((ing) => (
            <Box flex={1} maxW='280px' key={ing.id} display='flex' justifyContent='center'>
              <IngredientCard />
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt={12} px={12}>
        <Text fontSize='2xl' fontWeight='bold' mb={2}>Inventory</Text>
        <Flex gap={6} flexWrap='wrap'>
          {equipment.map((eqp) => (
            <Box key={eqp.id} display='flex' justifyContent='center'>
              <EquipmentCard />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  )
}

export default Store