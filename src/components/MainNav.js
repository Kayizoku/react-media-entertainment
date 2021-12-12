import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/shows");
    else if (value === 3) history.push("/search");
  }, [value, history]);

  return (
    <Box sx={{ color: "white !important" }}>
      <BottomNavigation
        className="bottomNavigation"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="bottomNavigationAction"
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigationAction"
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigationAction"
          label="TV Shows"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigationAction"
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
