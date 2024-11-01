import {Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import {AccordionBoxProps} from "../../interfaces/time.interface.ts";
import {underTitle} from "../../style/ts/Common.style.ts";

const AccordionBox = ({
                          title,
                          data,
                          allowMultiple = false
                      }: AccordionBoxProps) => {
    return (
        <>
            <Box>
                <Text sx={underTitle}>{title}</Text>
                <Accordion allowMultiple={allowMultiple}>
                    {Object.entries(data).map(([key, items]) => (
                        <AccordionItem key={key}>
                            <AccordionButton>
                                <Box flex="1" textAlign="left" fontWeight="bold">
                                    {key}
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                            <AccordionPanel pb="4">
                                {items.map((item, index) => (
                                    <Text key={index}>
                                        {item.days && item.hours && (
                                            <>{item.days}: {item.hours}</>
                                        )}
                                        {item.date && item.event && item.hours && (
                                            <>
                                                {item.date} / {item.event} - {item.hours}
                                            </>
                                        )}
                                        {item.store_hours && (
                                            <Text color="gray.500" fontSize="sm">
                                                {item.store_hours}
                                            </Text>
                                        )}
                                    </Text>
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </>
    );
};

export default AccordionBox;
