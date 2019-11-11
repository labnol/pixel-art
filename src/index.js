/*

GOOGLE SPREADSHEET ART

Written by Amit Agarwal
Email: amit@labnol.org
Web: https://ctrlq.org

Published: February 21, 2018

*/

import { onOpen, onInstall, showSidebar, showVideo } from './ui';
import render from './render';

global.onOpen = onOpen;
global.onInstall = onInstall;
global.showSidebar = showSidebar;
global.showVideo = showVideo;
global.render = render;
