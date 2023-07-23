'use client'

import { Box, Button, Flex, Grid, GridItem, Text, useDisclosure } from "@chakra-ui/react"
import ChefCard from "../components/cards/chefCard"
import { useRef, useState } from "react"
import RawIngredientCard from "../components/cards/rawIngredientCard"
import EquipmentCard from "../components/cards/equipmentCard"
import CreateOrder from "../components/dialogs/createOrder"

const Store = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const [chefs, setChefs] = useState([
    { id: 0, address: '0x43Cb32825f0A1CBaC2fd6B11a18f46aa81D142f4' },
  ])

  const [ingredients, setIngredients] = useState([{
    id: 'ing0',
    title: 'Mozzarella Cheese',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52_CylhbkD_leWPjSG4ESW8OGDk0x5i4VtA&usqp=CAU',
    quantity: 6000,
    units: 'grams'
  },])

  const [equipment, setEquipment] = useState([{
    id: 'eqp-0',
    title: 'Oven',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Double_oven.jpg/170px-Double_oven.jpg',
    heldBy: '0x43Cb32825f0A1CBaC2fd6B11a18f46aa81D142f4'
  }])

  return (
    <>
      <Box mt={6} display='flex' justifyContent='center'>
        <Button colorScheme='brandRed' onClick={() => onOpen()}>Place New Order</Button>
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
            <Box flex={1} key={ing.id} display='flex' justifyContent='center'>
              <RawIngredientCard {...ing} />
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mt={12} px={12}>
        <Text fontSize='2xl' fontWeight='bold' mb={2}>Inventory</Text>
        <Flex gap={6} flexWrap='wrap'>
          {equipment.map((eqp) => (
            <Box key={eqp.id} display='flex' flex={1} justifyContent='center'>
              <EquipmentCard {...eqp} />
            </Box>
          ))}
        </Flex>
      </Box>

      <CreateOrder isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} />
    </>
  )
}

export default Store