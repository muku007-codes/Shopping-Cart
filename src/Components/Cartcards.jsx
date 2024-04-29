import React from "react";

function Cartcards({item}) {
    console.log(item);
  return (
    <>
      <div className=" bg-#1f2937-100 text-white">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="text-white justify-between mb-6 rounded-lg bg-gray-700 p-6 sm:flex sm:justify-start ">
              <img
                src={item.image}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-white">
                    {item.title}
                  </h2>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-700 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <span className="cursor-pointer rounded-l bg-gray-700 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">1</span>
                    <span className="cursor-pointer rounded-r bg-gray-700 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">$ {item.price}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          {/* <!-- Sub total --> */}
          
        </div>
      </div>
    </>
  );
}

export default Cartcards;
