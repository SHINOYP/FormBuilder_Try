import { CloseOutlined } from "@ant-design/icons";
 const Checkbox = ({data,handleClose}) => {
  const handleButtonClick = () => {
    // Call the function with the specified parameters
    handleClose(data);
  };
 
  return (
    <div className=" flex w-[40%] p-4 h-16  justify-center items-center">
      
      <div className="shadow-inner drop-shadow-lg  h-full bg-white w-[100%] flex items-center pl-4 justify-start gap-2">
      <input type="checkbox"   />
        <span>shadow-inner</span>
      </div>
      
      <CloseOutlined  style={{color:'black',marginLeft:'0.4rem'}} onClick={ handleButtonClick}/>
    </div>
  );
};

export default Checkbox;