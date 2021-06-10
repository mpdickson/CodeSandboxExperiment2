import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DesktopDashboard from "./components/DesktopDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-dashboard)">
          <DesktopDashboard {...desktopDashboardData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const groupData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/triangle@2x.png",
};

const bubble12Data = {
    title: "11 km",
    groupProps: groupData,
};

const bubble1Data = {
    path6Copy5: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-6-copy-5@2x.png",
    bubble12Props: bubble12Data,
};

const group2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/triangle@2x.png",
};

const bubble22Data = {
    title: "5 km",
    groupProps: group2Data,
};

const bubble2Data = {
    path6Copy4: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-6-copy-4@2x.png",
    bubble22Props: bubble22Data,
};

const group3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/triangle@2x.png",
};

const bubble122Data = {
    title: "10 km",
    groupProps: group3Data,
};

const bubble3Data = {
    path6Copy3: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-6-copy-5@2x.png",
    bubble12Props: bubble122Data,
};

const group4Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/triangle@2x.png",
};

const bubble123Data = {
    title: "15 km",
    groupProps: group4Data,
};

const bubble4Data = {
    path6Copy2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-6-copy-2@2x.png",
    bubble12Props: bubble123Data,
};

const group5Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/triangle@2x.png",
};

const bubble124Data = {
    title: "20 km",
    groupProps: group5Data,
};

const bubble5Data = {
    path6Copy: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-6-copy@2x.png",
    bubble12Props: bubble124Data,
};

const group6Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/triangle@2x.png",
};

const bubble222Data = {
    title: "8 km",
    groupProps: group6Data,
};

const group62Data = {
    path6: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-6@2x.png",
    bubble22Props: bubble222Data,
};

const hightWeightData = {
    path1: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-2-1@2x.png",
    inputType: "text",
    inputPlaceholder: "165",
    cm: "cm",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-2-1@2x.png",
    path12: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-2-1@2x.png",
    inputType2: "text",
    inputPlaceholder2: "55",
    kg: "kg",
    path22: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-2-1@2x.png",
};

const trainer1DesktopData = {
    name: "Jonathan Van Ness",
    emptyCheckbox: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/empty-checkbox@3x.png",
    kickboxing: "Kickboxing",
    avatar1: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/avatar-1@2x.png",
};

const trainer1Desktop2Data = {
    name: "Gabrielle Union",
    emptyCheckbox: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/empty-checkbox@3x.png",
    kickboxing: "Strength",
    avatar1: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/avatar-2@2x.png",
};

const fullHeartIconData = {
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-1@2x.png",
};

const emptyHeartIconData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/shape@2x.png",
};

const fullHeartIcon2Data = {
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-1@2x.png",
};

const cTAData = {
    children: "Send Invite",
};

const desktopDashboardData = {
    title: "Daily target",
    number: "1225",
    stepsCopy: "Steps",
    fill1: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/fill-1@2x.png",
    fill4: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/fill-4@2x.png",
    fill3: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/fill-3@2x.png",
    fill2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/fill-2@2x.png",
    title2: "Weekly target",
    text8: "2.5",
    km: "km",
    man2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/man-2@2x.png",
    title3: "Workout Classes",
    text7: "2/4",
    classes: "Classes",
    group15: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/group-15@2x.png",
    fill16: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/fill-16@2x.png",
    fill18: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/fill-18@2x.png",
    fill20: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/fill-20@2x.png",
    x20Km: "20km",
    x15Km: "15km",
    x10Km: "10km",
    x5Km: "5km",
    x0Km: "0km",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/graph-lines@2x.png",
    graphGradient: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/graph-gradient@2x.png",
    graphLine2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/graph-line-2@2x.png",
    graphLine1: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/graph-line-1@2x.png",
    place: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    text5: "Try hovering over the lines",
    title4: "Weekly Activity",
    thisWeek: "This week",
    lastWeek: "Last week",
    title5: "Weight update",
    text6: "Embed Gif? Yes please",
    title6: "My profile",
    profilePicture: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/profile-picture@2x.png",
    title7: "Andrea Baker",
    text4: "Recommended trainers",
    classPicture2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/class-picture-2@2x.png",
    title8: "Burning Abs",
    subtitle: "Class duration - 18:57 min",
    overlapGroup8: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/empty-heart-icon@3x.png",
    fullHeartIcon: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/full-heart-icon@3x.png",
    selectClassHover: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/hover-bg@2x.png",
    selectClass: "Select class",
    classPicture6: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/class-picture-6@2x.png",
    title9: "Hips and thighs Tabata",
    subtitle2: "Class duration - 19:00 min",
    overlapGroup7: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/empty-heart-icon-1@3x.png",
    selectClassHover2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/hover-bg-1@2x.png",
    selectClass2: "Select class",
    classPicture: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/class-picture-1@2x.png",
    title10: "Yoga with Cherry",
    subtitle3: "Class duration -  20:22 min",
    overlapGroup72: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/empty-heart-icon-1@3x.png",
    fullHeartIcon2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/full-heart-icon-1@3x.png",
    selectClassHover3: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/hover-bg-1@2x.png",
    selectClass3: "Select class",
    classPicture4: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/class-picture-4@2x.png",
    title11: "Dance party workout",
    subtitle4: "Class duration - 20:00 min",
    overlapGroup82: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/empty-heart-icon-3@3x.png",
    fullHeartIcon3: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/full-heart-icon-1@3x.png",
    selectClassHover4: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/hover-bg-1@2x.png",
    selectClass4: "Select class",
    bg: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/bg-@1x.png",
    subtitle5: "Class duration -  18:00 min",
    title12: "Skipping jump",
    text1: "<3",
    recentClasses: "Recent Class",
    autoplayingVideos: "Autoplaying videos",
    moreClasses: "More classes →",
    text2: "Click for fullscreen overlay",
    startYourFreeTria: "Invite a Friend",
    name: "Friend’s name",
    inputType: "text",
    inputPlaceholder: "Enter Name",
    emailAddress: "Friend’s email address",
    inputType2: "email",
    inputPlaceholder2: "Enter email address",
    text3: "Real live text field",
    illustration2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/illustration-2@2x.png",
    title13: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/title@2x.png",
    subtitle6: "Let’s work out. Here are your weekly statistics. So far, looking good! One more workout to go!",
    image: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/image@1x.png",
    dashboard: "Dashboard",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-7@2x.png",
    inputType3: "text",
    inputPlaceholder3: "Search",
    text9: "Type here, it's alive!",
    menuThatPops: "Menu that pops",
    overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/avatar@2x.png",
    text10: "Animation triggered by scroll",
    text11: "Type here, it's alive!",
    icon: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/icon-3@2x.svg",
    classesIcon: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/icon-1@2x.svg",
    classesIconHover: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/icon-2@2x.svg",
    icon2: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/icon@2x.svg",
    settingIcons: "https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/setting-icons-1@3x.png",
    hoveringState: "Hovering state",
    bubble1Props: bubble1Data,
    bubble2Props: bubble2Data,
    bubble3Props: bubble3Data,
    bubble4Props: bubble4Data,
    bubble5Props: bubble5Data,
    group6Props: group62Data,
    hightWeightProps: hightWeightData,
    trainer1DesktopProps: trainer1DesktopData,
    trainer1Desktop2Props: trainer1Desktop2Data,
    fullHeartIconProps: fullHeartIconData,
    emptyHeartIconProps: emptyHeartIconData,
    fullHeartIcon2Props: fullHeartIcon2Data,
    cTAProps: cTAData,
};

