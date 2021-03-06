import React, { useState } from "react";
import {
  ThemeProvider,
  theme,
  BaseStyles,
  Flex,
  Box,
  Field,
  Input,
  Heading,
  Text
} from "rimble-ui";
// import * as icons from "@rimble/icons";
import * as mdIcons from "@rimble/icons/es/md";
import * as tokenIcons from "@rimble/icons/es/tokens";
import { Star, Battery20 } from "@rimble/icons";
import { Eth, Btc, Xuc } from "@rimble/icons";
import { Icon } from "@rimble/icons";
import styled from "styled-components";
import CopyToClipboard from "./CopyToClipboard";

const Truncate = styled(Box)([], {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});

const IconList = ({ filterValue, icons }) => {
  return Object.keys(icons)
    .filter(key => key !== "Icon" && key.includes(filterValue))
    .map((key, index) => (
      <Box key={key + index}>
        <CopyToClipboard text={key}>
          {isCopied => (
            <Box
              width={"4rem"}
              key={key}
              m={3}
              title={key}
              style={{
                textAlign: "center"
              }}
            >
              {React.createElement(icons[key], {
                size: 48
              })}

              <Truncate fontSize={"1rem"}>{isCopied ? "Copied" : key}</Truncate>
            </Box>
          )}
        </CopyToClipboard>
      </Box>
    ));
};

const FilteredIcons = ({ icons, placeholder }) => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <Box my={4}>
      <Field label="Filter icons">
        <Input
          type="text"
          placeholder={`e.g. ${placeholder}`}
          onChange={e => setFilterValue(e.target.value)}
          value={filterValue}
        />
      </Field>

      <Flex flexWrap="wrap">
        <IconList filterValue={filterValue} icons={icons} />
      </Flex>
    </Box>
  );
};

const App = props => {
  return (
    <ThemeProvider theme={theme} className="App">
      <BaseStyles>
        <Box m={4}>
          <Heading as="h1">Rimble Icons</Heading>

          <Text>Install with peer dependency</Text>

          <Box bg={"light-gray"} p={3}>
            <Text>yarn add @rimble/icons styled-components</Text>
          </Box>

          <Text mt={3}>Import entire library and reference any icon</Text>

          <Box bg={"light-gray"} p={4}>
            <Text>import {`{ Icon }`} from "@rimble/icons";</Text>
            <Text>{`<Icon name="Star" />`}</Text>
            <Text>{`<Icon name="Star" color="red" /> // set color value directly`}</Text>
            <Text>
              {`<Icon name="Star" color="primary" /> // access styled-system
              theme color values`}
            </Text>
          </Box>

          <Flex>
            <Box m={3}>
              <Icon name="Star" size={"24px"} />
            </Box>

            <Box m={3}>
              <Icon name="Star" size={"24px"} color="red" />
            </Box>

            <Box m={3}>
              <Icon name="Star" size={"24px"} color="primary" />
            </Box>
          </Flex>

          <Text>Single icon, named imports that supports tree-shaking</Text>

          <Text bg={"light-gray"} p={3}>
            import {`{ Star }`} from "@rimble/icons";
          </Text>

          <Flex>
            <Box m={3}>
              <Star size={"24px"} />
            </Box>
            <Box m={3}>
              <Star size={"24px"} color={"red"} />
            </Box>
            <Box m={3}>
              <Battery20 size={"24px"} />
            </Box>
            <Box m={3}>
              <Battery20 size={"24px"} color={"red"} />
            </Box>
          </Flex>

          <Text bg={"light-gray"} p={3}>
            import {`{ Btc, Eth }`} from "@rimble/icons";
          </Text>

          <Flex>
            <Box m={3}>
              <Eth size={"24px"} />
            </Box>
            <Box m={3}>
              <Eth size={"24px"} color={"red"} />
            </Box>
            <Box m={3}>
              <Btc size={"24px"} />
            </Box>
            <Box m={3}>
              <Btc size={"24px"} color={"red"} />
            </Box>
            <Box m={3}>
              <Xuc size={"24px"} />
            </Box>
            <Box m={3}>
              <Xuc size={"24px"} color={"red"} />
            </Box>
          </Flex>

          <Heading as="h2">Tokens</Heading>
          <FilteredIcons icons={tokenIcons} placeholder={"Eth"} />

          <Heading as="h2">Material</Heading>
          <FilteredIcons icons={mdIcons} placeholder={"Star"} />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
};

export default App;
