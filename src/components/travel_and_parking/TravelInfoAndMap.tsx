import {Box, Table, Tbody, Td, Text, Th, Thead, Tr, useMediaQuery} from "@chakra-ui/react";
import {tableHeader} from "../../style/ts/TravelAndParking.style.ts";
import locationData from "../../assets/travel_and_parking/location.json";
import {secondaryInfo, underTitle} from "../../style/ts/Common.style.ts";
import {environments} from "../../services/environments.ts";

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
                <Text sx={secondaryInfo}>{locationData.location_details.station_distance}</Text>
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
                    src={environments.googleLocation}
                    allowFullScreen={true}
                    loading="lazy"
                />
            </Box>
        </>
    );
}

export default TravelInfoAndMap;