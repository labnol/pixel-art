export const showSidebar = () => {
  const html = HtmlService.createTemplateFromFile('canvas').evaluate();
  html.setTitle('Spreadsheet Art');
  SpreadsheetApp.getUi().showSidebar(html);
};

export const showVideo = () => {
  const html = HtmlService.createHtmlOutputFromFile('support');
  html
    .setWidth(575)
    .setHeight(480)
    .setTitle('Pixel Art 101');
  SpreadsheetApp.getUi().showModalDialog(html, 'Pixel Art');
};

export const onOpen = () => {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open', 'showSidebar')
    .addSeparator()
    .addItem('Video Tutorial', 'showVideo')
    .addToUi();
};

export const onInstall = () => {
  onOpen();
};
