import {useState} from 'react'
import Checkbox from './Checkbox'
import { SaveOutlined } from "@ant-design/icons";





const Mcq = () => {
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState([]);
    
    const handleRemoveOption = (data) => {
        setOptions(options.filter((element) => element !== data));
    };
    const handleAddOption=()=>{
        setOptions([...options,newOption]);
        setNewOption("")
    }

  return (
    <div>
    <input  type='text' placeholder='Enter your question'/>
      {options?.length !== 0 ? (
            <>
              {" "}
              {options?.map((item) => (
                <Checkbox
                  key={item}
                  data={item}
                  handleClose={handleRemoveOption}
                />
              ))}
            </>
          ) : (
            <></>
        )}
        <form className=" flex w-max mt-6 h-4 justify-between items-center">
            <input
              onChange={(e) => setNewOption(e.target.value)}
              value={newOption || ""}
              type="text"
              className="drop-shadow-lg  bg-white "
            />
            <SaveOutlined
              onClick={handleAddOption}
              style={{ color: "black", marginLeft: "0.4rem" }}
            />
          </form>
    </div>
  )
}

export default Mcq