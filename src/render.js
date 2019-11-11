import { toast, sheet, flushSheet, deleteEmptyCells } from './sheet';
import getClosestEmoji from './emoji';

const render = (data, mode) => {
  try {
    toast('Adding new sheet..');
    sheet();
    toast('Extracting Colors..');
    sheet()
      .getRange(1, 1, data.length, data[0].length)
      .setValues(data)
      .setHorizontalAlignment('center')
      .setVerticalAlignment('center');
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
        toast(`Processing ${r}th row..`);
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

    sheet()
      .getRange(1, 1, maxRow, maxCol)
      .setFontSize(6);

    flushSheet();
    if (mode === 'pixel') {
      sheet().clear({
        contentsOnly: true
      });
    }

    flushSheet();
    Utilities.sleep(2000);
    toast('Done :)');

    return 'OK';
  } catch (f) {
    return f.toString();
  }
};

export default render;
