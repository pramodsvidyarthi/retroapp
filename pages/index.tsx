import React, { useState } from 'react';
import {
  Container,
  Heading,
  Box,
  Grid,
  Textarea,
  Button,
  Field,
} from 'theme-ui';

function Placeholder(props) {
  return (
    <Box
      sx={{
        height: 50,
        width: 125,
        borderRadius: 4,
      }}
      p={2}
      bg="indigo.2"
      {...props}
    >
      <Box
        sx={{
          height: '6px',
          width: '45px',
          borderRadius: 2,
        }}
        mb={2}
        bg="pink.1"
      ></Box>
      <Box
        sx={{
          height: '8px',
          width: '66px',
          borderRadius: 2,
        }}
        bg="pink.1"
      ></Box>
    </Box>
  );
}
const boxStyles = {
  border: '1px solid',
  borderRadius: '4px',
  borderColor: 'indigo.3',
  boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
};

function CreateLayout() {
  const [formState, setState] = useState(() => ({
    title: '',
    description: '',
    section1: '',
    section2: '',
    section3: '',
  }));
  const { formText } = CreateLayout;
  const handleChange = (event) => {
    const { value, name } = event.target;
    return setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Box color="white" sx={{ backgroundColor: 'indigo.8' }} p={3}>
        <Container>
          <Heading
            as="h2"
            variant="caps"
            sx={{
              textAlign: 'center',
            }}
          >
            retroboard
          </Heading>
        </Container>
      </Box>
      <Grid sx={{ alignItems: 'center', height: 'calc(100vh - 62px )' }}>
        <Container>
          <Grid
            columns={['277px 600px']}
            gap="32px"
            sx={{
              textAlign: 'center',
            }}
          >
            <Box as="form" bg="white" p={3} sx={boxStyles}>
              <Heading
                as="h3"
                sx={{
                  textAlign: 'center',
                }}
                mb={3}
              >
                Customize ✍️
              </Heading>
              <Field
                mb={3}
                name="title"
                label="Title"
                onChange={handleChange}
              />
              <Field
                mb={3}
                rows={3}
                as={Textarea}
                label="Description"
                onChange={handleChange}
                name="description"
              />
              <Field
                mb={3}
                name="section1"
                label="Section 1"
                onChange={handleChange}
              />
              <Field
                mb={3}
                name="section2"
                label="Section 2"
                onChange={handleChange}
              />
              <Field
                mb={3}
                name="section3"
                label="Section 3"
                onChange={handleChange}
              />
            </Box>
            <Box
              bg="white"
              sx={{
                ...boxStyles,
                borderColor: 'gray.4',
                position: 'relative',
              }}
            >
              <Heading
                as="h2"
                sx={{
                  textAlign: 'center',
                }}
                my={3}
              >
                {formState.title || formText.title}
              </Heading>
              <Heading
                as="h4"
                sx={{
                  textAlign: 'center',
                }}
                my={3}
              >
                {formState.description || formText.description}
              </Heading>
              <Grid
                columns={[3, '1fr 1fr 1fr']}
                sx={{ justifyItems: 'center' }}
              >
                <Box>
                  <Heading as="h3" my={3}>
                    {formState.section1 || formText.section1}
                  </Heading>
                  <Placeholder />
                  <Placeholder my={4} />
                </Box>
                <Box>
                  <Heading as="h3" my={3}>
                    {formState.section2 || formText.section2}
                  </Heading>
                  <Placeholder />
                  <Placeholder my={4} />
                </Box>
                <Box>
                  <Heading as="h3" my={3}>
                    {formState.section3 || formText.section3}
                  </Heading>
                  <Placeholder />
                </Box>
              </Grid>
              <Box my={3}>
                <Box
                  sx={{ bottom: '-8px', position: 'absolute', width: '100%' }}
                >
                  <svg
                    width="600"
                    height="144"
                    viewBox="0 0 600 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 18L150 90L300 108L450 36L600 0V144H450H300H150H0V18Z"
                      fill="#434190"
                    />
                  </svg>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              my={4}
              variant="outline"
              color="indigo.8"
              sx={{ textTransform: 'uppercase', width: 196 }}
            >
              Create Board
            </Button>
          </Box>
        </Container>
      </Grid>
    </>
  );
}

CreateLayout.formText = {
  title: 'Title goes here',
  description: 'Add your description here',
  section1: 'Section 1',
  section2: 'Section 2',
  section3: 'Section 3',
};

export default CreateLayout;
