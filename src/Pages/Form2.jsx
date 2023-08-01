import { useState } from "react";
import Checkbox from '../Components/Checkbox'
import { FileAddOutlined  } from "@ant-design/icons";

const Form2 = () => {
  const [sentence, setSentence] = useState("");
  const [selectedWord, setSelectedWord] = useState([]);
  const [button, setButton] = useState(true);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSentence(inputText);
  };

  const handleWordSelection = () => {
    if (window.getSelection) {
      const selectedText = window.getSelection().toString();
      if(selectedText){
      setSelectedWord([...selectedWord,selectedText]);
      console.log(selectedText);
      }
    }
  };
  const handleRemoveOption = (data) => {
    setSelectedWord(selectedWord.filter((element) => element !== data));
  };
  return (
    <div className="bg-white rounded-lg w-full max-w-[1100px] min-h-[60vh] flex-col mt-10 flex mx-auto">
      <div className=" flex relative w-[60%] flex-col p-6  mt-6">
      <input
          type="text"
          value={sentence}
          onChange={handleInputChange}
          placeholder="Enter the sentence & select the word using mouse  "
          className="shadow-inner h-12 drop-shadow-lg  p-4 h-10 bg-white "
        />
        {button ? (
          <button  className="text-2xl  bg-white absolute -right-2" onClick={handleWordSelection}><FileAddOutlined/></button>
        
        ) : (
          <></>
        )}
       
      </div>
      <div className=" flex  p-4 flex-col ">
        {selectedWord?.map((item) => (
          <Checkbox
            key={item}
            data={item}
            handleClose={handleRemoveOption}
          />
        ))}
      </div>
    </div>
  );
};

export default Form2;
