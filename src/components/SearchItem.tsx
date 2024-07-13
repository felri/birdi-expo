import React from "react";
import { StyleSheet } from "react-native";
import { Box, Input } from "native-base";

interface SearchItemProps {
  search: string;
  setSearch: (text: string) => void;
}

export const SearchItem: React.FC<SearchItemProps> = ({
  search,
  setSearch,
}) => {
  return (
    <Box>
      <Input
        style={styles.input}
        placeholder="Search items"
        value={search}
        onChangeText={setSearch}
        variant="outline"
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
