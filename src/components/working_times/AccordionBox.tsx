import {Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import {AccordionBoxProps} from "../../interfaces/time.interface.ts";
import {underTitle} from "../../style/ts/Common.style.ts";
import {indexBox, itemDaysAndHours} from "../../style/ts/WorkingTimes.style.ts";

const AccordionBox = ({
                          title,
                          data,
                      }: AccordionBoxProps) => {
    return (
        <>
            <Text sx={{...underTitle, mb: 2}}>{title}</Text>
            <Accordion allowToggle>
                {Object.entries(data).map(([key, items]) => (
                    <AccordionItem key={key}>
                        <AccordionButton>
                            <Box
                                flex="1"
                                textAlign="left"
                                fontWeight={"bold"}
                                fontSize={"1.1rem"}
                            >
                                {key}
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                        <AccordionPanel pb="4" overflow="hidden" transition="max-height 0.3s ease-in-out">
                            {items.map((item, index) => (
                                <Box key={index} sx={indexBox}>
                                    {item.days && item.hours && (
                                        <Text sx={itemDaysAndHours}>
                                            {item.days}: <Text as="span" color="white" opacity="0.7">{item.hours}</Text>
                                        </Text>
                                    )}
                                    {item.date && item.event && item.hours && (
                                        <Box
                                            mt="2"
                                            bg="rgba(255, 255, 255, 0.1)"
                                            p="2"
                                            borderRadius="md"
                                        >
                                            <Text fontWeight="bold" color="white" opacity="0.85">
                                                {item.date} / <Text as="span" fontStyle="italic" color="white"
                                                                    opacity="0.7">{item.event}</Text>
                                            </Text>
                                            <Text
                                                color="white"
                                                opacity="0.6"
                                                fontSize="sm"
                                            >
                                                Öffnungszeiten: <Text as="span" color="white"
                                                                      opacity="0.75">{item.hours}</Text>
                                            </Text>
                                        </Box>
                                    )}
                                    {item.store_hours && (
                                        <Text mt="1" color="white" opacity="0.5" fontSize="sm" fontStyle="italic">
                                            {item.store_hours}
                                        </Text>
                                    )}
                                </Box>

                            ))}
                        </AccordionPanel>

                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default AccordionBox;
