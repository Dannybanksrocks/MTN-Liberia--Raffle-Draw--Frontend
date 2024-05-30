import React from "react";
import Select from "react-select";
import { GrUpload } from "react-icons/gr";
import { durationOptions } from "../../data";
import { MtnButton } from "../../components/button/MtnButton";
import Confetti from "react-confetti";
import * as XLSX from "xlsx";
import {
  addAnimatedNumberShow,
  removeAnimatedNumberShow,
} from "../../core/functions";

const EnterDetails = () => {
  const [isSpinDone, setSpinDone] = React.useState<boolean>(false);
  const [selectedDuration, setSelectedDurarion] = React.useState<any>(null);
  const [winner, setWinner] = React.useState<any[]>([]);
  const [fileName, setFileName] = React.useState<any>();

  React.useEffect(() => {
    removeAnimatedNumberShow();
  }, []);

  const spinForWinner = () => {
    addAnimatedNumberShow();
    setTimeout(() => {
      removeAnimatedNumberShow();
      setSpinDone(true);
    }, 5000);
  };

  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) setFileName(file.name);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const data = new Uint8Array(event.target.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          let selectedArrayFromData: any = excelData[0];
          const stringifiedArray = selectedArrayFromData.map(String);
          console.log("stringifiedArray: ", stringifiedArray);
          const randomSelection = Math.floor(
            Math.random() * stringifiedArray.length
          );
          // const me = setUploadedMsisdns(randomSelection, stringifiedArray[randomSelection])
          console.log(stringifiedArray[randomSelection]);
          setWinner(stringifiedArray[randomSelection]);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        {/* <div className="flex items-center mt-3">
          <span className="mr-3 text-sm font-medium text-black">
            Turn on if you'd want to upload from a file
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={toggleIsChecked}
              onChange={handleCheckboxChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 dark:peer-focus:ring-[#ffcc00] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ffcc00]"></div>
          </label>
        </div> */}
        {isSpinDone && (
          <h1 className="mt-3 text-6xl font-bold text-green-800 animate-pulse">
            WINNER
          </h1>
        )}
        <div className="w-1/3 mt-3">
          <Select
            options={durationOptions}
            value={selectedDuration}
            placeholder="Select Duration For Spin"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full bg-red-200 mt-9">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <GrUpload className="mb-3" size={30} />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">XLSX</p>
          </div>
          <input
            onChange={(e) => handleInputOnchange(e)}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <div>
        Uploaded file:{" "}
        <span className="font-bold text-blue-700">{fileName}</span>
      </div>

      <div id="animated-counter"></div>
      {isSpinDone && (
        <Confetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />
      )}

      <h1 className="mt-3 text-6xl">{isSpinDone && winner}</h1>
      <MtnButton
        className="w-1/3 py-2 mt-8 text-white bg-black form-wizard-submit disabled:bg-gray-200 disabled:shadow-none lg:px-20"
        type={"submit"}
        label={"Click to spin..."}
        onClick={spinForWinner}
      />
    </>
  );
};

export default EnterDetails;
