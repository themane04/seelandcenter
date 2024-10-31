import {Box, Table, Tbody, Td, Text, Th, Thead, Tr, useMediaQuery} from "@chakra-ui/react";
import {tableHeader} from "../../style/ts/TravelAndParking.style.ts";
import locationData from "../../assets/travel_and_parking/location.json";
import {underTitle} from "../../style/ts/Common.style.ts";

const TravelInfoAndMap = () => {
    const [is900px] = useMediaQuery("(max-width: 900px)");
    return (
        <>
            <Box textAlign={is900px ? "center" : "left"}>
                <Text sx={{...underTitle, mt: 0}}>Standort</Text>
                <Text>{locationData.location_details.address}</Text>
                <Text sx={underTitle}>Parking</Text>
                <Text>{locationData.location_details.parking}</Text>
                <Text sx={underTitle}>Öffentliche Verkehrsmittel</Text>
                <Text>{locationData.location_details.public_transport}</Text>
                <Table variant="simple" mt={5}>
                    <Thead>
                        <Tr>
                            <Th sx={tableHeader}>Bus-Nr.</Th>
                            <Th sx={tableHeader}>Richtung 1</Th>
                            <Th sx={tableHeader}>Richtung 2</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {locationData.location_details.busTable.map(bus => (
                            <Tr key={bus.bus_number}>
                                <Td>{bus.bus_number}</Td>
                                <Td>{bus.direction_1}</Td>
                                <Td>{bus.direction_2}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Text mt={5} w={"95%"}>{locationData.location_details.station_distance}</Text>
            </Box>
            <Box
                width={is900px ? "90%" : "50%"}
                maxW={"700px"}
                borderRadius={"10px"}
                boxShadow="rgba(255, 255, 255, 0.5) 0px 0px 30px 0.5px"
                mt={is900px ? 10 : 0}
            >
                <iframe
                    width="100%"
                    height="450"
                    style={{border: 0, borderRadius: "10px"}}
                    referrerPolicy={"no-referrer-when-downgrade"}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2717.223938287596!2d7.306127000000001!3d47.075072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e180be402719d%3A0x860a9c42d76e61a0!2sSeeland%20Center!5e0!3m2!1sde!2sus!4v1730404342787!5m2!1sde!2sus"
                    allowFullScreen={true}
                />
            </Box>
        </>
    );
}

export default TravelInfoAndMap;