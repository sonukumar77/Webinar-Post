import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const SelectInput = ({ handleSelectInput, topicList }) => {
  const [topicName] = React.useState([]);

  return (
    <Box>
      <FormControl sx={{ width: 300 }}>
        <Select
          displayEmpty
          value={topicName}
          onChange={handleSelectInput}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span>Topic</span>;
            }

            return selected.join(", ");
          }}
          style={{
            borderRadius: "15px",
          }}
        >
          {topicList.length > 0 && (
            <MenuItem selected value="">
              <em>All</em>
            </MenuItem>
          )}
          {topicList.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default React.memo(SelectInput);
