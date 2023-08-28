import {Skeleton,Stack} from "@chakra-ui/react"
function LoadingSkeleton() {
  return (
      <Stack>
      {/* Add chakra-ui Skeleton components here */}   
      <Skeleton height="80px"/> 
      <Skeleton height="80px"/> 
      <Skeleton height="80px"/> 
      <Skeleton height="80px"/> 
      <Skeleton height="80px"/> 
      <Skeleton height="80px"/> 
      </Stack>
  )
}

export default LoadingSkeleton