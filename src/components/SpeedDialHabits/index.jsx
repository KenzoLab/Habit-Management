import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CreateIcon from "@mui/icons-material/Create";

const actions = [{ icon: <CreateIcon />, name: "Add" }];

export default function BasicSpeedDial({ handleModal }) {
  return (
    <Box sx={{ height: 0, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map(action => (
          <SpeedDialAction
            FabProps={{
              onClick: () => handleModal(),
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
