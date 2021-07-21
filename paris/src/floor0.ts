/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
const zoneWelcomeToTCMName = "popUpWelcomeToTCM";
const zoneMeetTheDevTeamName = "popUpMeetTheDevTeam";
const zoneRespectPeopleName = "popUpRespectPeople";
const zoneTCMAroundTheWorld = "popUpTCMAroundTheWorld";

const urlWelcomeToTCM = "https://www.thecodingmachine.com/en/welcome-to-the-coding-machine/";
const urlTCMAroundTheWorld = "https://www.thecodingmachine.com/en/the-coding-machine-around-the-world/";

let currentPopup : any = undefined;
let isCoWebSiteOpened =  false;

WA.room.onEnterZone(zoneWelcomeToTCMName, () => {
    currentPopup =  WA.ui.openPopup("popUpWelcome","Hey ! Welcome to The Coding Machine !",[
        {
            label: "Who are we ? ",
            className: "normal",
            callback: (() => {
                WA.nav.openCoWebSite(urlWelcomeToTCM);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onEnterZone(zoneTCMAroundTheWorld, () => {
    currentPopup =  WA.ui.openPopup("popUpTCMAroundTheWorld","The Coding Machine around the World",[
        {
            label: "See more ",
            className: "normal",
            callback: (() => {
                WA.nav.openCoWebSite(urlTCMAroundTheWorld);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onEnterZone(zoneRespectPeopleName, () => {
    currentPopup =  WA.ui.openPopup("popUpRespect","Thank you for respecting people at work :D",[])
})

WA.room.onEnterZone(zoneMeetTheDevTeamName, () => {
    currentPopup =  WA.ui.openPopup("popUpMeetDev","Meet the WorkAdventure dev team ! ",[]);
})

WA.room.onLeaveZone(zoneRespectPeopleName, closePopUp)

WA.room.onLeaveZone(zoneMeetTheDevTeamName, closePopUp)

WA.room.onLeaveZone(zoneWelcomeToTCMName, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onLeaveZone(zoneTCMAroundTheWorld, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}