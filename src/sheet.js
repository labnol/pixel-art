import expBackoff from './backoff';
import exception from './exception';

export function ss() {
  if (typeof this.ss === 'undefined') {
    try {
      this.ss = expBackoff(() => SpreadsheetApp.getActiveSpreadsheet());
    } catch (f) {
      exception(f);
      this.ss = null;
    }
  }
  return this.ss;
}

export const toast = (e = '') => {
  try {
    if (e && ss()) {
      ss().toast(e);
    }
  } catch (f) {
    // Do nothing
  }
};

export const flushSheet = () => {
  try {
    SpreadsheetApp.flush();
  } catch (f) {
    exception(f);
    // Do nothing
  }
};

export function sheet() {
  if (typeof this.newsheet === 'undefined') {
    try {
      this.newsheet = expBackoff(() => ss().insertSheet());
      ss().setActiveSheet(this.newsheet);
      flushSheet();
    } catch (f) {
      exception(f);
      this.newsheet = null;
    }
  }
  return this.newsheet;
}

export const deleteEmptyCells = () => {
  try {
    toast('Deleting empty rows..');
    const maxRows = sheet().getMaxRows();
    const lastRow = sheet().getLastRow();
    sheet().deleteRows(lastRow + 1, maxRows - lastRow);
    flushSheet();
    toast('Deleting empty columns..');
    const maxCols = sheet().getMaxColumns();
    const lastCol = sheet().getLastColumn();
    sheet().deleteColumns(lastCol + 1, maxCols - lastCol);
    flushSheet();
  } catch (e) {
    exception(e);
  }
};
