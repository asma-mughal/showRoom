import React from "react";

 
const Button = ({ filterItem, setItem, menuItems, show, props,carRec }) => {

  return (
    <>
       <div className="flex flex-row  flex-wrap
        justify-content-center">
        {menuItems?.map((Val, id) => {
          return (
            <button
              className="mt-5 px-4 py-2 mr-5 rounded-xl bg-secondary hover:bg-dimYellow text-white 
              font-semibold text-center block w-30 focus:outline-none focus:ring focus:ring-offset-2
               focus:ring-secondary    focus:ring-opacity-80 cursor-pointer"
              onClick={() =>  filterItem(Val) }
              key={id}
            >
              {Val}
            </button>
          );

        })}
        {show && <button
          className="mt-5 px-4 py-2 mr-5 rounded-xl bg-secondary hover:bg-dimYellow text-white 
          font-semibold text-center block w-30 focus:border-secondary cursor-pointer"
          onClick={() =>setItem(carRec)}
        >
          All
        </button> }
       
       
      </div>
    </>
  );
};
 
export default Button;