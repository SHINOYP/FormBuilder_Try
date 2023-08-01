import { useState, useEffect } from "react";
// import { useDraggable } from "@dnd-kit/core";
// import Dragable from "../Components/Dragable";
// import Dropable from "../Components/Dropable";
import  TextBox  from "../Components/TextBox";
import { SaveOutlined } from "@ant-design/icons";
import Dropdown from "../Components/Dropdown";
// import {DndContext} from '@dnd-kit/core';

const Form = () => {
  const [category, setCategory] = useState([]);
  const [newCate, setNewCate] = useState();
  const [answer, setAnswer] = useState([]);
  const [newAnswer, setNewAnswer] = useState([]);
  const [ansCategory, setAnsCategory] = useState();

  const handleAddCate = () => {
    setCategory([...category, newCate]);
    setNewCate("");
  };
  const handleRemoveCate = (data) => {
   if(data) setCategory(category.filter((element) => element !== data));
  };

  const handleRemoveAns = (data) => {
    if(data) setAnswer(answer.filter((element) => element !== data));
   };
  const handleAddAnswer = () => {
   if(newAnswer){
     setAnswer([...answer, newAnswer]);
    setNewAnswer("");
   }
  };

  console.log(ansCategory);
  return (
    <>
      <div className="bg-white w-full max-w-[1100px] rounded-lg mt-10 min-h-[60vh] mx-auto flex flex-col ">
        <div className="p-10">
          <h2 className="text-2xl font-bold">Category</h2>
          {category?.length !== 0 ? (
            <>
              {" "}
              <div className="mt-4">
              {category?.map((item) => (
                <TextBox
                  key={item}
                  data={item}
                  handleClose={handleRemoveCate}
                
                />
              ))}
              </div>
            </>
          ) : (
            <h1 className="text-black text-sm">Create Category </h1>
          )}
          <form className=" flex  mt-6   items-center">
            <input
              onChange={(e) => setNewCate(e.target.value)}
              value={newCate || ""}
              type="text"
              className="shadow-inner h-12 drop-shadow-lg w-[40%] bg-white "
            />
            <SaveOutlined
              onClick={handleAddCate}
              style={{ color: "black", marginLeft: "0.4rem" }}
            />
          </form>
        </div>
        <div  className="p-10">
          <h2 className="text-2xl font-bold">Item</h2>
          {answer?.length !== 0 ? (
            <>
              {" "}
              {answer?.map((item) => (
                <div key={item} className="flex">
                  <TextBox data={item} handleClose={handleRemoveAns} />
                  <Dropdown options={category} selected={setAnsCategory} />
                </div>
              ))}
            </>
          ) : (
            <h1 className="text-black text-sm">Create Items </h1>
          )}
          <form className=" flex  mt-6   items-center">
            <input
              onChange={(e) => setNewAnswer(e.target.value)}
              value={newAnswer || ""}
              type="text"
              className="shadow-inner h-12 drop-shadow-lg w-[40%] bg-white "
            />
            <SaveOutlined
              onClick={handleAddAnswer}
              style={{ color: "black", marginLeft: "0.4rem" }}
            />
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Form;
