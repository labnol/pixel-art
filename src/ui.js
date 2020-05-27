import getUserEmail from './user';

export const showSidebar = () => {
  const template = HtmlService.createTemplateFromFile('canvas');
  template.userEmail = getUserEmail();
  const html = template.evaluate();
  html.setTitle('Pixel Art for Google Sheets');
  SpreadsheetApp.getUi().showSidebar(html);
};

export const showVideo = () => {
  const html = HtmlService.createHtmlOutputFromFile('support');
  html.setWidth(575).setHeight(480).setTitle('Pixel Art 101');
  SpreadsheetApp.getUi().showModalDialog(html, 'Pixel Art');
};

export const onOpen = () => {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open', 'showSidebar')
    .addSeparator()
    .addItem('Tutorial', 'showVideo')
    .addToUi();
};

export const onInstall = () => {
  onOpen();
  console.info('💕', getUserEmail());
};
