import {Box, Image} from "@chakra-ui/react";

const RentalSpaceImages = () => {
    return (
        <>
            <Box>
                <Image
                    src="/rental_space/rental_space_first_floor.png"
                    alt="Rental space"
                    objectFit="cover"
                />
            </Box>
            <Box>
                <Image
                    src="/rental_space/rental_space_second_floor.png"
                    alt="Rental space"
                    objectFit="cover"
                />
            </Box>
        </>
    );
}

export default RentalSpaceImages;