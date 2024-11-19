import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

const theme = localStorage.getItem("theme") || "light"; // Default to light theme

const items = [
  "React",
  "Java",
  "Python",
  "Javascript",
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "Django",
  "Flask",
  "Vue.js",
  "Angular",
  "Svelte",
  "Nest.js",
  "Quarkus",
  "Shadcn",
  "MUI",
  "ZenUI",
  "TailwindCSS",
  "Spring Cloud",
  "Spring Security",
  "Spring Data",
  "Spring Batch",
  "Spring Integration",
];

function renderRow(props) {
  const { index, style, data } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={data[index]} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  const isDarkTheme = theme === "dark";

  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 360,
        bgcolor: isDarkTheme ? "background.default" : "background.paper",
        border: `2px solid ${isDarkTheme ? "#444" : "#ddd"}`, // Dark theme border
        color: isDarkTheme ? "#fff" : "#000", // Text color for themes
        borderRadius: "8px", // Rounded corners
        boxShadow: isDarkTheme
          ? "0px 4px 6px rgba(0, 0, 0, 0.5)"
          : "0px 4px 6px rgba(0, 0, 0, 0.1)", // Adjust shadow
        overflow: "hidden", // Prevent content overflow
      }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={items.length}
        overscanCount={5}
        itemData={items} // Pass the array as data
      >
        {({ index, style, data }) => renderRow({ index, style, data })}
      </FixedSizeList>
    </Box>
  );
}
