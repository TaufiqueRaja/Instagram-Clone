import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react"



const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(false)
        },2000)
    },[])



  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
        <Flex gap="2" >
        <SkeletonCircle size="10" />
        <VStack  gap={2} alignItems={"flex-start"}>
        <SkeletonCircle height="10px" w={"200px"} />
        <SkeletonCircle height="10px" w={"200px"} />

        </VStack>
      </Flex>
      <Skeleton w={"full"}>
        <Box h={"500px"}>contents wrapped</Box>
      </Skeleton>
     </VStack>
      ))} 
        {!isLoading && (
            <>
                
    <FeedPost 
        img='/public/img1.png'
        username="taufiqueKhan"
        avatar='/public/img1.png'
    
     />
    <FeedPost 
        img='/public/img2.png'
        username="ujjawalchhetri"
        avatar='/public/img2.png'
    
     />
    <FeedPost 
        img='/public/img3.png'
        username="asitbishwash"
        avatar='/public/img3.png'
    
     />
     <FeedPost 
        img='/public/img4.png'
        username="sridharsaaho"
        avatar='/public/img4.png'
    
     />
            </>
        )}


    </Container>
  )
}

export default FeedPosts
