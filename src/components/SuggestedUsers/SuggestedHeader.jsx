import { Avatar,Link , Flex, Text } from "@chakra-ui/react";

import { Link as RouterLink} from "react-router-dom";

const SuggestedHeader = () => {

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Avatar name="Taufique Khan" size={"lg"} src="/public/profilepic.png.jpg"/>
				<Text fontSize={12} fontWeight={"bold"}>
					taufiquekhan
				</Text>
			</Flex>
			<Link
				as={RouterLink}
				to={"/auth"}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
				style={{textDecoration: "none"}}
				cursor={"pointer"}
			>
				Log out
			</Link>
		</Flex>
	);
};

export default SuggestedHeader;