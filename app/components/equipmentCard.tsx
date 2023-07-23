import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useTab } from "@chakra-ui/react"
import InventoryCard, { CardTypes } from "./inventoryCard"
import { ForwardedRef, forwardRef } from "react"
import truncateEthAddress from "truncate-eth-address"

const StyledTab = forwardRef((props: any, ref: ForwardedRef<HTMLElement>) => {
  const tabProps = useTab({ ...props, ref })
  return (
    <Tab
      _selected={{ bg: '#f8f9fa' }}
      bg='#f1f3f4'
      fontSize='sm'
      flex={1}
      whiteSpace='nowrap'
      {...tabProps}
    >
      {props.children}
    </Tab>
  )
})
StyledTab.displayName = 'StyledTab'

const StyledPanel = forwardRef((props: any, ref) => {
  return (
    <TabPanel h='full' {...props}>
      {props.children}
    </TabPanel>
  )
})
StyledPanel.displayName = 'StyledPanel'

const EquipmentCard = ({ title, imgUrl, heldBy }: { title: string, imgUrl: string, heldBy?: string }) => {

  const renderInfoPanel = () => {
    return (
      <Box height='full' display='flex' flexDir='column'>
        <Text fontWeight='semibold'>{title}</Text>
        <Box mt={2} mb='auto' flex={1}  display='flex' flexDir='column'>
          <Text fontSize='xs'>Current Status: </Text>
          {heldBy ? (
            <Text fontSize='xs' fontWeight='semibold' m='auto'>{truncateEthAddress(heldBy)}</Text>
          ) : (
            <Box bg='white' p={2} borderRadius='full' cursor='pointer' w='40px' boxShadow='base' m='auto'>
              <Image src='/icons/qrcode.png' alt='copy' h={6} w={6} />
            </Box>
          )}
        </Box>

        <Text fontSize='xs' mt='auto'>Manufactured On: </Text>
        <Text fontSize='xs'>Last Maintenance: </Text>
      </Box>
    )
  }

  return (
    <InventoryCard cardType={CardTypes.equipment} label={title} imgUrl={imgUrl} style={{flex: 0}}>
      <>
        <Tabs variant='enclosed' flex={1} display='flex' flexDir='column'>
          <TabList>
            <StyledTab>Info</StyledTab>
            <StyledTab>Usage Logs</StyledTab>
            <StyledTab>Rate Card</StyledTab>
          </TabList>
          <TabPanels bg='#f8f9fa' h='full'>
            <StyledPanel>
              {renderInfoPanel()}
            </StyledPanel>
            <StyledPanel>
              one
            </StyledPanel>
            <StyledPanel>
              one
            </StyledPanel>
          </TabPanels>
        </Tabs>
      </>
    </InventoryCard>
  )
}

export default EquipmentCard