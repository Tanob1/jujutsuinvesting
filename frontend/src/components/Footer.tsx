import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaGithub, FaReddit } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallWithSocial() {
  return (

    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'7xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'/'}>
            Home
          </Box>
          <Box as="a" href={'https://docs.google.com/forms/d/e/1FAIpQLSfWVcNtQKfH30nhsetrvV7lHol_VL9YYRA7KV59yf8H6GL8Ug/viewform'}>
            Contact
          </Box>
          <Box as="a" href={'/#moreinfo'}>
            Warning
          </Box>
        </Stack>          <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Reddit'} href={'https://www.reddit.com/r/Jujutsufolk/comments/1e17fxl/the_jujutsu_kaisen_stock_report_15/?'}>
            <FaReddit />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/Tanob1/jujutsuinvesting'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}