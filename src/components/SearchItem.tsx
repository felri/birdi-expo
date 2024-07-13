import React from "react";
import { Box, Input } from "@gluestack-ui/themed-native-base";

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
        placeholder="Search items"
        value={search}
        onChangeText={setSearch}
        variant="outline"
        height={10} 
        borderColor="#ccc"
        borderWidth={1}
        borderRadius={8}
        paddingLeft={2}
        paddingRight={2} 
      />
    </Box>
  );
};
