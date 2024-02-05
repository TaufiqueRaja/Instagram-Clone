import { Grid } from "@chakra-ui/react"


const ProfilePosts = () => {
  return (
    <Grid
       templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)"
       }}
       gap={1}
       columnGap={1}
    
    >
      
    </Grid>
  )
}

export default ProfilePosts
