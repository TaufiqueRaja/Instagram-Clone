import { Avatar, AvatarGroup, Flex, VStack, Text, Button } from "@chakra-ui/react"


const ProfileHeader = () => {
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column", sm:"row"}}>


        <AvatarGroup
           size={{base:"xl", md:"2xl"}}
           justifySelf={"center"}
           alignSelf={"flex-start"}
           mx={"auto"}
        >
            <Avatar name="Taufique Khan" src="/public/profilepic.png.jpg" alt="Taufique Khan logo"/>

        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
           <Flex
           gap={4}
           direction={{base:"center", sm:"flex-start" }}
           alignItems={"center"}
           w={"full"}
           >
             <Text fontSize={{base:"sm", md:"lg"}}>taufiquekhan</Text>
             
            <Flex gap={4} alignItems={"center"} justifyContent={"center"} >
                <Button bg={"white"} color={"black"}
                _hover={{bg:"whiteALpha.800"}}
                size={{base:"xs", md:"sm"}}     
                >
                Edit Profile
                </Button>
            </Flex>
           </Flex>

            <Flex alignItems={"center"} gap={{base:2,sm:4}}>
              <Text fontSize={{base:"xs",md:"sm"}}>
                <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
                Posts
              </Text>
              <Text fontSize={{base:"xs",md:"sm"}} >
                <Text as="span" fontWeight={"bold"} mr={1}>786</Text>
                Followers
              </Text>
              <Text fontSize={{base:"xs",md:"sm"}}>
                <Text as="span" fontWeight={"bold"} mr={1}>67</Text>
               Following
              </Text>
           </Flex>

            <Flex  alignItems={"center"} gap={4}>
              
                <Text fontSize={"sm"} fontWeight={"bold"} >
                 Taufique Khan
                </Text>
            </Flex>

            <Text fontSize={"sm"}>
                Eat Sleep  Code Repeat is a lifestyle brand that empowers developers to take their skills
                and hobbies to the next level by providing quality products and resources.

            </Text>


        </VStack>


    </Flex>
  )
}

export default ProfileHeader
