import { Box, Image, Text, VStack } from '@chakra-ui/react';
import Posts from './Posts';

const Profile = () => {
  return (
    <Box>
      <VStack p={7} m="auto" width="fit-content" borderRadius={6} bg="gray.700">
        <Image
          borderRadius="20px"
          boxSize="100px"
          src="https://static.toiimg.com/photo/msid-80600977/80600977.jpg"
          alt="Profile"
        />
        <Text fontSize="lg" color="gray.400">
          Summer Project
        </Text>
      </VStack>

      <Posts />
    </Box>
  );
};
export default Profile;
