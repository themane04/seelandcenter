import {
    Box,
    Heading,
    useMediaQuery, HStack, VStack
} from '@chakra-ui/react';
import {gradientTitle, outsideAccordionBox} from "../style/ts/Common.style.ts";
import PageLayout from "../components/common/PageLayout.tsx";
import workingHoursData from ".././assets/working_times/times.json";
import {IWorkingHours} from "../interfaces/time.interface.ts";
import AccordionBox from "../components/working_times/AccordionBox.tsx";
import LeftSideInfo from "../components/working_times/LeftSideInfo.tsx";

const WorkingTimes = () => {
    const [is650px] = useMediaQuery("(max-width: 650px)");
    const [is520px] = useMediaQuery("(max-width: 520px)")
    const workingHours: IWorkingHours = workingHoursData;

    return (
        <>
            <PageLayout>
                <Heading sx={gradientTitle(is650px)}>Öffnungszeiten</Heading>
                {is520px ? (
                    <>
                        <VStack justifyContent={"center"} p={"6vw"}>
                            <LeftSideInfo {...workingHours}/>
                            <Box sx={outsideAccordionBox(is520px)}>
                                <AccordionBox
                                    title="Abweichende Öffnungszeiten Geschäfte"
                                    data={workingHours.stores}
                                />
                                <AccordionBox
                                    title="Feiertage / Sonntagsverkäufe 2024"
                                    data={workingHours.holidays["2024"]}
                                />
                            </Box>
                        </VStack>
                    </>
                ) : (
                    <>
                        <HStack justifyContent={"center"} p={"60px"}>
                            <LeftSideInfo {...workingHours}/>
                            <Box sx={outsideAccordionBox(is520px)}>
                                <AccordionBox
                                    title="Abweichende Öffnungszeiten Geschäfte"
                                    data={workingHours.stores}
                                />
                                <AccordionBox
                                    title="Feiertage / Sonntagsverkäufe 2024"
                                    data={workingHours.holidays["2024"]}
                                />
                            </Box>
                        </HStack>
                    </>
                )}
            </PageLayout>
        </>
    );
};

export default WorkingTimes;
