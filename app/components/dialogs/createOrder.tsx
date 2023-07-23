import { AlertDialog, AlertDialogContent, AlertDialogOverlay, Box, Button, Select, Text, useToast } from "@chakra-ui/react"
import { ReactElement, Ref, RefObject, useState } from "react"

const toppings = [{
  label: '-- No toppings --',
  value: 'no_toppings',
  price: 0
},{
  label: 'Onions',
  value: 'onions',
  price: 20
}, {
  label: 'Capsicum',
  value: 'capsicum',
  price: 20
}, {
  label: 'Paneer',
  value: 'paneer',
  price: 30
}]

const basePrice = 100

const CreateOrder = ({isOpen, cancelRef, onClose}: {isOpen: boolean, cancelRef: RefObject<any>, onClose: () => void}) => {
  const [topping1, setTopping1] = useState(0)
  const [topping2, setTopping2] = useState(0)
  const [topping3, setTopping3] = useState(0)

  const total = basePrice + toppings[topping1].price + toppings[topping2].price + toppings[topping3].price 

  const toast = useToast()

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent p={6}>

          <Text fontSize='2xl' fontWeight='bold' textAlign='center' textTransform='capitalize'>
            Place order
          </Text>

          <Box mt={6}>
            <Text fontSize='sm'>Choose pizza</Text>
          </Box>
          <Select>
            <option>Cheese Pizza (7&quot;)</option>
          </Select>

          <Box mt={6}>
            <Text fontSize='sm'>Choose Topping 1 (optional)</Text>
          </Box>
          <Select mt={1} value={topping1} onChange={e => setTopping1(parseInt(e.target.value))}>
            {toppings.map((topping, i) => (
              <option key={`topping-1-${topping.value}`} value={i}>{topping.label}</option>
            ))}
          </Select>

          <Box mt={2}>
            <Text fontSize='sm'>Choose Topping 2 (optional)</Text>
          </Box>
          <Select mt={1} value={topping2} onChange={e => setTopping2(parseInt(e.target.value))}>
            {toppings.map((topping, i) => (
              <option key={`topping-1-${topping.value}`} value={i}>{topping.label}</option>
            ))}
          </Select>

          <Box mt={2}>
            <Text fontSize='sm'>Choose Topping 3 (optional)</Text>
          </Box>
          <Select mt={1} value={topping3} onChange={e => setTopping3(parseInt(e.target.value))}>
            {toppings.map((topping, i) => (
              <option key={`topping-1-${topping.value}`} value={i}>{topping.label}</option>
            ))}
          </Select>

          <Text fontSize='2xl' fontWeight='bold' textAlign='center' textTransform='capitalize' mt={6}>
            Your Total: ₹{total}
          </Text>

          
          <Box display='flex' justifyContent='center' mt={2}>
            <Button colorScheme='brandRed' onClick={() => {
              onClose()
              toast({
                title: 'Order Place',
                description: `We've started processing your order. You can find your pending order in "Your Orders"`,
                status: 'success',
                duration: null,
                isClosable: true,
              })
            }}>Place Order</Button>
          </Box>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default CreateOrder