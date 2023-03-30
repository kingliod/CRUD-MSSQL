import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import DrawerLayout from "../components/DrawerLayout";
import Form from "./DialogueForm";
import Tablee from "./Table";
import axios from "axios";
export default function Sample() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      try {
        await axios
          .get("http://localhost:3001/api/view_activity")
          .then((response) => {
            setActivities(response.data.data);
          });
        // console.log("hello")
      } catch (err) {
        console.error("Error: ", err);
      }
    };
    initialize();
  }, []);
  return (
    <Box>
      <DrawerLayout>
        <Form />
        <Tablee rows={activities} />
      </DrawerLayout>
    </Box>
  );
}
