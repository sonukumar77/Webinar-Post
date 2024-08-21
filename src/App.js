import { Box, Stack } from "@mui/material";
import TopNav from "./components/Navbar/TopNav";
import WebinarCard from "./components/Card/WebinarCard";
import WebinarModal from "./components/Modal/WebinarModal";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { COLORS, INITIAL_INPUTDATA } from "./constants/data";
import { debounce, generateRandomColor } from "./utils/common";

function App() {
  const [inputData, setInputData] = useState(INITIAL_INPUTDATA);
  const [errors, setErrors] = useState({});
  const [webinarData, setWebinarData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [topicList, setTopicList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditId(null);
  };

  // Input Field Handler
  const handleInput = (e) => {
    const { value, name } = e.target;
    const id = uuidv4();
    const randomColor =
      webinarData.length <= 6
        ? COLORS[webinarData.length]
        : generateRandomColor(webinarData.length);

    setInputData((prev) => ({
      ...prev,
      id,
      color: randomColor,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: value ? "" : `${name.replace(/([A-Z])/g, " $1")} is required`,
    }));
  };

  // Navbar Create Button Webinar handler
  const handleCreateWebinar = () => {
    const newErrors = {};

    Object.keys(INITIAL_INPUTDATA).forEach((key) => {
      if (!inputData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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

  // Modal Edit Button handler
  const handleModalEdit = () => {
    const updatedWebinarData = webinarData.map((element) =>
      element.id === editId ? inputData : element
    );
    setWebinarData(updatedWebinarData);
    setFilterData(updatedWebinarData);
    handleClose();
  };

  // Card Edit Button data handler
  const handleEditWebinar = (id) => {
    setOpen(true);
    setEditId(id);
    const findWebinarData = webinarData.find((element) => element.id === id);
    setInputData(findWebinarData);
  };

  // Delete Webinar Data handler
  const handleDeleteWebinar = (id) => {
    const filterData = webinarData.filter((element) => element.id !== id);
    setWebinarData(filterData);
    setFilterData(filterData);
    setEditId(null);
  };

  // Select Input handler for filter
  const handleSelectInput = useCallback(
    (e) => {
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
    },
    [webinarData]
  );

  const onSearchChange = useCallback(
    debounce((value) => {
      const searchData = webinarData.filter((element) => {
        return Object.values(element).some((propValue) =>
          propValue?.toString().toLowerCase().includes(value.toLowerCase())
        );
      });

      setFilterData(searchData);
    }, 150),
    [webinarData]
  );

  const handleSearch = useCallback(
    (e) => {
      const { value } = e.target;
      setSearchKey(value);
      onSearchChange(value);
    },
    [onSearchChange]
  );

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
        handleSearch={handleSearch}
        searchKey={searchKey}
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
                chooseCardBgColor
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
        handleModalEdit={handleModalEdit}
        editId={editId}
        errors={errors}
      />
    </Box>
  );
}

export default App;
