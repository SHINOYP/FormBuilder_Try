import { CloseOutlined } from "@ant-design/icons";
 const TextBox = ({data,handleClose}) => {
  const handleButtonClick = () => {
    // Call the function with the specified parameters
    handleClose(data);
  };
 
  return (
    <div className=" flex w-[40%] p-4 h-16 justify-between items-center">
    
      <span  className=" shadow-inner drop-shadow-lg border-solid border-2 border-sky-100  bg-white w-[100%]">
        {data}
      </span>
      <CloseOutlined  style={{color:'black',marginLeft:'0.4rem'}} onClick={ handleButtonClick}/>
    </div>
  );
};

export default TextBox;