import { Flex,Text,Image } from "@chakra-ui/react"


const GoogleAuth = () => {
  return (
     <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
                <Image src="/public/google.png" w={5} alt=""Google Logo />
                <Text mx="2" color={"blue.500"}>
                    Log in with Google
                </Text>
            </Flex>
  )
}

export default GoogleAuth
