import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useState } from "react";
import { RiArrowDownSLine, RiMenuFill } from "react-icons/ri";
import { Link } from "./Link";

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -72 && !scrolled) {
      setScrolled(true);
    } else if (currPos.y >= -72 && scrolled) {
      setScrolled(false);
    }
  });

  const linkColor = scrolled ? "#221D10" : "white";
  const buttonBg = scrolled ? "#CF6C33" : "white";
  const buttonColor = scrolled ? "white" : "#221D10";

  return (
    <Flex
      as="header"
      px={{ base: 4, sm: 10 }}
      h="72px"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      w="100%"
      zIndex={1}
      backgroundColor={scrolled ? "white" : "transparent"}
      transition="border-bottom 150ms ease 0s, background-color 300ms ease 0s"
    >
      <div>LOGO</div>
      <HStack display={{ base: "flex", sm: "none" }} alignItems="center" justifyContent="flex-end">
        <IconButton aria-label="Open menu" variant="ghost" onClick={onOpen} _focus={{ bg: "transparent" }}>
          <Icon as={RiMenuFill} color="white" fontSize="lg" />
        </IconButton>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="calc(100% - 32px)" mt={4}>
          <ModalHeader>
            <div>LOGO</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={8} as="nav" py={2} alignItems="start">
              <Link fontWeight="500" href="#">
                Cities
              </Link>
              <Link fontWeight="500" href="#">
                Co-living
              </Link>
              <Link fontWeight="500" href="#">
                FAQs
              </Link>
              <Link fontWeight="500" href="#">
                For landlords
              </Link>
              <Link fontWeight="500" href="#">
                For companies
              </Link>
              <ButtonGroup isAttached overflow="hidden">
                <Button color="white" bg="#CF6C33" borderRadius="sm" maxW="max-content" mr="-px" fontWeight="medium">
                  I'm moving to...
                </Button>
                <IconButton
                  color="white"
                  bg="#CF6C33"
                  borderLeftWidth="1px"
                  borderLeftColor="blackAlpha.900"
                  borderRadius="sm"
                  aria-label="Select city"
                  icon={<Icon as={RiArrowDownSLine} />}
                />
              </ButtonGroup>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <HStack spacing={8} as="nav" display={{ base: "none", sm: "flex" }} justifyContent="center">
        <Link fontWeight="500" color={linkColor} href="#">
          Cities
        </Link>
        <Link fontWeight="500" color={linkColor} href="#">
          Co-living
        </Link>
        <Link fontWeight="500" color={linkColor} href="#">
          FAQs
        </Link>
        <Link fontWeight="500" color={linkColor} href="#">
          For landlords
        </Link>
        <Link fontWeight="500" color={linkColor} href="#">
          For companies
        </Link>
        <ButtonGroup isAttached overflow="hidden">
          <Button bg={buttonBg} color={buttonColor} borderRadius="sm" maxW="max-content" mr="-px" fontWeight="medium">
            I'm moving to...
          </Button>
          <IconButton
            bg={buttonBg}
            color={buttonColor}
            borderLeftWidth="1px"
            borderLeftColor="blackAlpha.900"
            borderRadius="sm"
            aria-label="Select city"
            icon={<Icon as={RiArrowDownSLine} />}
          />
        </ButtonGroup>
      </HStack>
    </Flex>
  );
};
