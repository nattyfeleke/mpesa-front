/* eslint-disable @typescript-eslint/no-explicit-any */

import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

export const exportToExcel = (
  data: any[],
  fileName: string,
  fileExtenstion: "csv" | "xlsx",
) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.${fileExtenstion}`);
  // const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  // saveAs(blob, "Members_Report.xlsx");
};

interface Sheet {
  name: string;
  data: any[];
}
export const exportToExcelWithMultipleSheets = (
  sheets: Sheet[],
  fileName: string,
  fileExtenstion: "csv" | "xlsx",
) => {
  const workbook = XLSX.utils.book_new();
  sheets.forEach((sheet) => {
    const worksheet = XLSX.utils.json_to_sheet(sheet.data);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name);
  });
  XLSX.writeFile(workbook, `${fileName}.${fileExtenstion}`);
  // const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  // saveAs(blob, "Members_Report.xlsx");
};
