import { Flex, Heading, Text, Grid, Image, Input, VStack } from "@chakra-ui/react";
// import LogoSecondary from "../../assets/logo-secondary.svg";

export const Login = () => (
  <Flex
   padding="10px 15px"
   alignItems="center"
   bgGradient="linear(to-r, purple.800 65%, white 35%)"
   height="100vh"
   color="white"
  >
       <Flex 
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
       >
           <Grid w="100%" paddingRight="100px">
               <Image /*src={LogoSecondary}*/ alt="doit" boxSize="120px"/>
               <Heading as="h1">O jeito fácil, grátis</Heading>
               <Text>
                   Flexivel e atrativo de gerenciar 
                   <b>seus projetos em uma única plataforma</b>
               </Text>
           </Grid>
           <Grid 
            as="form"
            mt="4"
            w="100%"
            padding="30px 15px"
            border="3px solid"
            borderColor="gray.100"
            bg="white"
            color="gray.900"
           >
                <Heading size="lg">Bem vindo de volta!</Heading>
                <VStack mt="6" spacing="5">
                    <Input placeholder="Digite seu email"/>
                    <Input placeholder="Digite sua senha"/>
                </VStack>
           </Grid>
       </Flex>
   </Flex>
);
