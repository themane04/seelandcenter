import {Box, Text, VStack} from "@chakra-ui/react";
import {underTitle} from "../../style/ts/Common.style.ts";
import {indexBox, itemDaysAndHours} from "../../style/ts/WorkingTimes.style.ts";
import {IWorkingHours} from "../../interfaces/time.interface.ts";

export const LeftSideInfo = (workingHours: IWorkingHours) => {
    return (
        <>
            <Box>
                <Text sx={underTitle}>Allgemeine Öffnungszeiten Center</Text>
                <VStack alignItems="left" mt={"5"}>
                    {workingHours.general.map((entry, index) => (
                        <Box key={index} sx={indexBox}>
                            <Text sx={itemDaysAndHours}>
                                {entry.days}: <Text as="span" color="white" opacity="0.7">{entry.hours}</Text>
                            </Text>
                        </Box>
                    ))}
                    <Text color="white" opacity="0.6" fontSize="sm" mt="4" fontStyle="italic">
                        {workingHours.additional_info}
                    </Text>
                </VStack>
            </Box>
        </>
    );
}

export default LeftSideInfo;