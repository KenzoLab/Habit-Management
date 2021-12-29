import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CreateIcon from "@mui/icons-material/Create";

const defaultActions = [{ icon: <CreateIcon />, name: "Add" }];
const defaultSpeedIcon = <SpeedDialIcon />;

export default function BasicSpeedDial({
  handleModal,
  actions = defaultActions,
  speedIcon = defaultSpeedIcon,
  sx = { position: "absolute", bottom: 16, right: 16, padding: 0 },
}) {
  return (
    <Box sx={{ height: 0, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial" sx={sx} icon={speedIcon}>
        {actions.map((action, idx) => (
          <SpeedDialAction
            onClick={() => handleModal[idx]()}
            key={idx}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
