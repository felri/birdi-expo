import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Center } from "@gluestack-ui/themed-native-base";
import { Search } from "./src/routes/Search";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff">
        <Center flex={1}>
          <Search />
          <StatusBar style="auto" />
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
