import { toast, sheet, flushSheet, deleteEmptyCells } from './sheet';
import getClosestEmoji from './emoji';
import exception from './exception';
import { isMultipleAccountIssue } from './multiple';

const render = (email, data, mode) => {
  try {
    const err = isMultipleAccountIssue(email);
    if (err) return err;
    toast('Adding new sheet..');
    sheet();
    toast('Extracting Colors..');
    sheet()
      .getRange(1, 1, data.length, data[0].length)
      .setValues(data)
      .setHorizontalAlignment('center')
      .setVerticalAlignment('center')
      .setFontFamily('Roboto Mono')
      .setFontSize(8);
    flushSheet();
    deleteEmptyCells();
    toast('Adjusting rows..');
    const maxRow = sheet().getMaxRows();
    for (let i = 1; i <= maxRow; i += 1) {
      sheet().setRowHeight(i, 12);
    }

    for (let r = 0, rl = data.length; r < rl; r += 1) {
      for (let d = 0, dl = data[0].length; d < dl; d += 1) {
        const range = sheet().getRange(r + 1, d + 1);
        if (mode === 'pixel') {
          if (data[r][d] !== '#ffffff') {
            range.setBackground(data[r][d]);
          }
        } else {
          const { emoji, colors } = getClosestEmoji(data[r][d].split('.'));
          range.setValue(emoji).setBackgroundRGB(colors[0], colors[1], colors[2]);
        }
      }
      if (r && r % 10 === 0) {
        toast(`Processing ${r}th row of ${rl}`);
        flushSheet();
        Utilities.sleep(1000);
      }
    }

    toast('Adjusting columns..');
    const maxCol = sheet().getMaxColumns();
    for (let c = 1; c <= maxCol; c += 1) {
      sheet().setColumnWidth(c, 12);
    }

    flushSheet();
    toast('Almost there..');

    sheet().getRange(1, 1, maxRow, maxCol).setFontSize(6);

    flushSheet();
    if (mode === 'pixel') {
      sheet().clear({
        contentsOnly: true,
      });
    }

    flushSheet();
    Utilities.sleep(1000);
    toast('Artwork is ready!');

    return 'OK';
  } catch (f) {
    return exception(f);
  }
};

export default render;
