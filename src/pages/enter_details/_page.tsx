import React from "react";
import Select from "react-select";
import { GrUpload } from "react-icons/gr";
import { drawCaseOptions, durationOptions } from "../../data";
import { MtnButton } from "../../components/button/MtnButton";
import Confetti from "react-confetti";
import * as XLSX from "xlsx";
import Papa from "papaparse"; 
import {
  addAnimatedNumberShow,
  removeAnimatedNumberShow,
} from "../../core/functions";
import { showToast } from "../../core/hooks/alert_hook";

const EnterDetails = () => {
  const [isSpinDone, setSpinDone] = React.useState<boolean>(false);
  const [spinDuration, setSpinDuration] = React.useState<number>();
  const [selectedDuration, setSelectedDuration] = React.useState<any>(null);
  const [selectedDrawCase, setSelectedDrawCase] = React.useState<string>("");
  const [selectedDrawCaseValue, setSelectedDrawCaseValue] = React.useState<any>(null);
  const [winner, setWinner] = React.useState<string>("");
  const [fileName, setFileName] = React.useState<string>("");

  React.useEffect(() => {
    removeAnimatedNumberShow();
  }, []);

  const spinForWinner = () => {
    if (!fileName) {
      showToast("Please select file for the spin", false);
      return;
    }

    if (!spinDuration) {
      showToast("Please select duration for the spin", false);
      return;
    }

    if (!selectedDrawCase) {
      showToast("Please select draw case", false);
      return;
    }

    addAnimatedNumberShow();
    setTimeout(() => {
      removeAnimatedNumberShow();
      setSpinDone(true);
    }, spinDuration);
  };

  const handleDrawCaseDuration = (selectedOption: any) => {
    setSelectedDrawCase(selectedOption.value);
    setSelectedDrawCaseValue(selectedOption);
  };

  const handleDurationChange = (selectedOption: any) => {
    setSelectedDuration(selectedOption);
    const convertedStringToNumber = Number(selectedOption.value);
    setSpinDuration(convertedStringToNumber);
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) setFileName(file.name);
    if (file) {
      const fileType = file.name.split(".").pop()?.toLowerCase();

      const handleExcelFile = (file: File) => {
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
            const randomSelection = Math.floor(Math.random() * stringifiedArray.length);
            setWinner(stringifiedArray[randomSelection]);
          }
        };
        reader.readAsArrayBuffer(file);
      };

      const handleCSVFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target && event.target.result) {
            const csvData = Papa.parse(event.target.result as string, {
              header: false,
            }).data;
            let selectedArrayFromData: any = csvData[0];
            const stringifiedArray = selectedArrayFromData.map(String);
            const randomSelection = Math.floor(Math.random() * stringifiedArray.length);
            setWinner(stringifiedArray[randomSelection]);
          }
        };
        reader.readAsText(file);
      };

      if (fileType === "xlsx") {
        handleExcelFile(file);
      } else if (fileType === "csv") {
        handleCSVFile(file);
      } else {
        showToast("Unsupported file format. Please upload XLSX or CSV file.", false);
      }
    }
  };

  const cancelOperation = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-col">
        {isSpinDone && (
          <h1 className="mt-3 text-6xl font-bold text-green-800 animate-pulse">
            WINNER: {winner}
          </h1>
        )}
        {isSpinDone && (
          <MtnButton
            className="w-1/4 p-1 text-white bg-red-500"
            label="Cancel"
            onClick={cancelOperation}
          />
        )}
        <div className="flex justify-between">
          <div className="w-1/3 mt-3">
            <Select
              options={durationOptions}
              value={selectedDuration}
              onChange={handleDurationChange}
              placeholder="Select Duration For Spin"
            />
          </div>

          <div className="w-1/3 mt-3">
            <Select
              options={drawCaseOptions}
              value={selectedDrawCaseValue}
              onChange={handleDrawCaseDuration}
              placeholder="Select Draw Case"
            />
          </div>
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
            <p className="text-xs text-gray-500 dark:text-gray-400">XLSX or CSV</p>
          </div>
          <input
            onChange={(e) => handleInputOnChange(e)}
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
