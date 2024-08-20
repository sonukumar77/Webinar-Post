import { Box, Stack } from "@mui/material";
import TopNav from "./components/Navbar/TopNav";
import WebinarCard from "./components/Card/WebinarCard";
import WebinarModal from "./components/Modal/WebinarModal";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { COLORS, INITIAL_INPUTDATA } from "./constants/data";
import { generateRandomColor } from "./utils/common";

function App() {
  const [inputData, setInputData] = useState(INITIAL_INPUTDATA);
  const [webinarData, setWebinarData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [topicList, setTopicList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
  };

  // Input Field Handler
  const handleInput = (e) => {
    const { value, name } = e.target;
    const id = uuidv4();
    const randomColor = generateRandomColor(COLORS.length);
    setInputData((prev) => ({
      ...prev,
      id,
      color: randomColor,
      [name]: value,
    }));
  };
  // Navbar Create Button Webinar handler
  const handleCreateWebinar = () => {
    const updatedWebinarData = [...webinarData, inputData];
    setWebinarData(updatedWebinarData);
    setFilterData(updatedWebinarData);
    handleClose(false);
  };

  // Modal Create Webinar Button handler
  const handleAddWebinar = () => {
    setOpen(true);
    setInputData(INITIAL_INPUTDATA);
  };

  // Edit Modal data handler
  const handleEditWebinar = (id) => {
    setOpen(true);
    setIsEdit(true);
    const findWebinarData = webinarData.find((element) => element.id === id);
    setInputData(findWebinarData);
  };

  // Delete Webinar Data handler
  const handleDeleteWebinar = (id) => {
    const filterData = webinarData.filter((element) => element.id !== id);
    setWebinarData(filterData);
    setFilterData(filterData);
    setIsEdit(false);
  };

  // Select Input handler for filter
  const handleSelectInput = (e) => {
    const topicValue = e.target.value;
    const filterTopicData = webinarData.filter(
      (element) => element.topic === topicValue
    );

    if (topicValue) {
      setFilterData(filterTopicData);
      return;
    } else {
      setFilterData(webinarData);
    }
  };

  useEffect(() => {
    const uniqueTopics = [
      ...new Set(webinarData.map((webinar) => webinar.topic)),
    ];

    setTopicList(uniqueTopics);
  }, [webinarData]);

  return (
    <Box>
      <TopNav
        handleAddWebinar={handleAddWebinar}
        handleSelectInput={handleSelectInput}
        topicList={topicList}
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        flexWrap="wrap"
        useFlexGap
        sx={{ p: 4 }}
      >
        {filterData.length > 0
          ? filterData.map((item, index) => (
              <WebinarCard
                key={index}
                handleOpen={handleOpen}
                {...item}
                handleDeleteWebinar={handleDeleteWebinar}
                handleEditWebinar={handleEditWebinar}
              />
            ))
          : null}
      </Stack>

      <WebinarModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        handleInput={handleInput}
        inputData={inputData}
        handleCreateWebinar={handleCreateWebinar}
        isEdit={isEdit}
      />
    </Box>
  );
}

export default App;
