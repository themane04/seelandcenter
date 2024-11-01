import {
    Box,
    Heading,
    Text,
    VStack, useMediaQuery, HStack
} from '@chakra-ui/react';
import {gradientTitle, underTitle} from "../style/ts/Common.style.ts";
import BoxLayout from "../components/common/BoxLayout.tsx";
import workingHoursData from ".././assets/working_times/times.json";
import {IWorkingHours} from "../interfaces/time.interface.ts";
import AccordionBox from "../components/working_times/AccordionBox.tsx";

const WorkingTimes = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    const workingHours: IWorkingHours = workingHoursData;

    return (
        <>
            <BoxLayout>
                <Heading sx={gradientTitle(is650px)}>Öffnungszeiten</Heading>
                <HStack justifyContent={"center"} spacing={"50px"}>
                    <Box>
                        <Text sx={underTitle}>Allgemeine Öffnungszeiten Center</Text>
                        <VStack alignItems={"left"}>
                            {workingHours.general.map((entry, index) => (
                                <VStack key={index} alignItems={"left"} mt={4}>
                                    <Text>{entry.days}</Text>
                                    <Text>{entry.hours}</Text>
                                </VStack>
                            ))}
                            <Text color="teal.100">{workingHours.additional_info}</Text>
                        </VStack>
                    </Box>
                    <Box>
                        <AccordionBox
                            title="Abweichende Öffnungszeiten Geschäfte"
                            data={workingHours.stores}
                            allowMultiple={false}
                        />
                        <AccordionBox
                            title="Feiertage / Sonntagsverkäufe 2024"
                            data={workingHours.holidays["2024"]}
                            allowMultiple={true}
                        />
                    </Box>
                </HStack>
            </BoxLayout>
        </>
    );
};

export default WorkingTimes;
