import { useState } from "react";
import { CloseOutlined,FileAddOutlined  } from "@ant-design/icons";
import Mcq from "../Components/Mcq";

const Form3 = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [mcq, setMcq] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Question:", question);
  //   console.log("Options:", options);
  // };
  const handleNewQuestion = () => {
    setMcq([...mcq, mcq + 1]);
  };
  const handleRemoveMcq = (data) => {
    console.log(mcq);
    setMcq(mcq.filter((element) => element !== data));
  };
  return (
    <div className="bg-white w-full max-w-[1100px] rounded-lg min-h-[60vh] mt-10 flex-col flex mx-auto  ">
      <textarea style={{resize: 'none'}} className="m-6 drop-shadow-md bg-white border-solid border-2 border-sky-100  h-40 w-[80%]" />
      {mcq?.map((item) => (
        <div key={item} className="ml-5">
          <Mcq />
          <button className="bg-red-400 " onClick={()=>handleRemoveMcq(item)}>
            Delete Question
          </button>
        </div>
      ))}

      <FileAddOutlined className="text-2xl"  onClick={handleNewQuestion}/>
    </div>
  );
};

export default Form3;
