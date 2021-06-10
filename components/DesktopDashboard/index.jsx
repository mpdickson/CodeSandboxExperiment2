import React from "react";
import Bubble1 from "../Bubble1";
import Bubble2 from "../Bubble2";
import Bubble3 from "../Bubble3";
import Bubble4 from "../Bubble4";
import Bubble5 from "../Bubble5";
import Group6 from "../Group6";
import FeatureDot from "../FeatureDot";
import HightWeight from "../HightWeight";
import Trainer1Desktop from "../Trainer1Desktop";
import Menu from "../Menu";
import FullHeartIcon from "../FullHeartIcon";
import EmptyHeartIcon from "../EmptyHeartIcon";
import CTA from "../CTA";
import "./DesktopDashboard.css";

function DesktopDashboard(props) {
  const {
    title,
    number,
    stepsCopy,
    fill1,
    fill4,
    fill3,
    fill2,
    title2,
    text8,
    km,
    man2,
    title3,
    text7,
    classes,
    group15,
    fill16,
    fill18,
    fill20,
    x20Km,
    x15Km,
    x10Km,
    x5Km,
    x0Km,
    overlapGroup4,
    graphGradient,
    graphLine2,
    graphLine1,
    place,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    text5,
    title4,
    thisWeek,
    lastWeek,
    title5,
    text6,
    title6,
    profilePicture,
    title7,
    text4,
    classPicture2,
    title8,
    subtitle,
    overlapGroup8,
    fullHeartIcon,
    selectClassHover,
    selectClass,
    classPicture6,
    title9,
    subtitle2,
    overlapGroup7,
    selectClassHover2,
    selectClass2,
    classPicture,
    title10,
    subtitle3,
    overlapGroup72,
    fullHeartIcon2,
    selectClassHover3,
    selectClass3,
    classPicture4,
    title11,
    subtitle4,
    overlapGroup82,
    fullHeartIcon3,
    selectClassHover4,
    selectClass4,
    bg,
    subtitle5,
    title12,
    text1,
    recentClasses,
    autoplayingVideos,
    moreClasses,
    text2,
    startYourFreeTria,
    name,
    inputType,
    inputPlaceholder,
    emailAddress,
    inputType2,
    inputPlaceholder2,
    text3,
    illustration2,
    title13,
    subtitle6,
    image,
    dashboard,
    path2,
    inputType3,
    inputPlaceholder3,
    text9,
    menuThatPops,
    overlapGroup5,
    text10,
    text11,
    icon,
    classesIcon,
    classesIconHover,
    icon2,
    settingIcons,
    hoveringState,
    bubble1Props,
    bubble2Props,
    bubble3Props,
    bubble4Props,
    bubble5Props,
    group6Props,
    hightWeightProps,
    trainer1DesktopProps,
    trainer1Desktop2Props,
    fullHeartIconProps,
    emptyHeartIconProps,
    fullHeartIcon2Props,
    cTAProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="desktop-dashboard screen">
        <div className="flex-col-4">
          <div className="flex-row-10">
            <div className="flex-col-1">
              <div className="targets">
                <div className="daily-target-tab">
                  <div className="overlap-group-1">
                    <div className="title-1 lato-normal-black-16px">{title}</div>
                    <div className="flex-row-5">
                      <div className="steps">
                        <h1 className="number mulish-normal-black-26px">{number}</h1>
                        <div className="steps-copy lato-normal-black-14px">{stepsCopy}</div>
                      </div>
                      <div className="man-1">
                        <img className="fill-1" src={fill1} />
                        <div className="overlap-group-5">
                          <img className="fill-4" src={fill4} />
                          <div className="overlap-group3-1">
                            <img className="fill-3" src={fill3} />
                            <img className="fill-2" src={fill2} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-17 animate-enter2">
                      <div className="overlap-group-2">
                        <div className="progress-bar"></div>
                        <div className="progress-bar-full-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="x-tab">
                  <div className="overlap-group6">
                    <div className="title-1 lato-normal-black-16px">{title2}</div>
                    <div className="flex-row-3">
                      <div className="km">
                        <div className="text-8 mulish-normal-black-26px">{text8}</div>
                        <div className="km-1 lato-normal-black-14px">{km}</div>
                      </div>
                      <img className="man-2" src={man2} />
                    </div>
                    <div className="group-18 animate-enter1">
                      <div className="overlap-group-2">
                        <div className="progress-bar"></div>
                        <div className="progress-bar-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="x-tab">
                  <div className="overlap-group-1">
                    <div className="title-1 lato-normal-black-16px">{title3}</div>
                    <div className="flex-row-8">
                      <div className="classes-1">
                        <div className="text-7 mulish-normal-black-26px">{text7}</div>
                        <div className="classes lato-normal-black-14px">{classes}</div>
                      </div>
                      <div className="man-3">
                        <div className="overlap-group4-5">
                          <img className="group-15" src={group15} />
                          <img className="fill-16" src={fill16} />
                          <img className="fill-18" src={fill18} />
                          <img className="fill-20" src={fill20} />
                        </div>
                      </div>
                    </div>
                    <div className="group-19 animate-enter">
                      <div className="overlap-group-2">
                        <div className="progress-bar"></div>
                        <div className="progress-bar-full-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-row-6">
                <div className="frame-1">
                  <div className="overlap-group13">
                    <div className="overlap-group1-1">
                      <div className="overlap-group3-4">
                        <div className="graph-parameters-1">
                          <div className="flex-row">
                            <div className="graph-km">
                              <div className="x20km mulish-normal-black-8px">{x20Km}</div>
                              <div className="graph-km-item mulish-normal-black-8px">{x15Km}</div>
                              <div className="graph-km-item mulish-normal-black-8px">{x10Km}</div>
                              <div className="graph-km-item mulish-normal-black-8px">{x5Km}</div>
                              <div className="graph-km-item mulish-normal-black-8px">{x0Km}</div>
                            </div>
                            <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                              <img className="graph-gradient" src={graphGradient} />
                              <img className="graph-line-2" src={graphLine2} />
                              <img className="graph-line-1" src={graphLine1} />
                              <div className="graph-point-2"></div>
                              <div className="graph-point-1"></div>
                            </div>
                          </div>
                          <div className="graph-days">
                            <div className="place mulish-normal-black-12px">{place}</div>
                            <div className="graph-days-item mulish-normal-black-12px">{mon}</div>
                            <div className="graph-days-item mulish-normal-black-12px">{tue}</div>
                            <div className="graph-days-item mulish-normal-black-12px">{wed}</div>
                            <div className="graph-days-item mulish-normal-black-12px">{thu}</div>
                            <div className="graph-days-item mulish-normal-black-12px">{fri}</div>
                            <div className="graph-days-item mulish-normal-black-12px">{sat}</div>
                          </div>
                        </div>
                        <Bubble1 path6Copy5={bubble1Props.path6Copy5} bubble12Props={bubble1Props.bubble12Props} />
                        <Bubble2 path6Copy4={bubble2Props.path6Copy4} bubble22Props={bubble2Props.bubble22Props} />
                        <Bubble3 path6Copy3={bubble3Props.path6Copy3} bubble12Props={bubble3Props.bubble12Props} />
                        <Bubble4 path6Copy2={bubble4Props.path6Copy2} bubble12Props={bubble4Props.bubble12Props} />
                        <Bubble5 path6Copy={bubble5Props.path6Copy} bubble12Props={bubble5Props.bubble12Props} />
                        <Group6 path6={group6Props.path6} bubble22Props={group6Props.bubble22Props} />
                        <div className="frame-5">
                          <div className="overlap-group12">
                            <FeatureDot />
                            <div className="text-5 smart-layers-pointers feature-caveat hidden">{text5}</div>
                          </div>
                        </div>
                      </div>
                      <div className="title-6 lato-normal-black-16px">{title4}</div>
                    </div>
                    <div className="graph-parameters-2">
                      <div className="rectangle-1"></div>
                      <div className="this-week mulish-normal-black-8px">{thisWeek}</div>
                      <div className="rectangle-2"></div>
                      <div className="last-week mulish-normal-black-8px">{lastWeek}</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group">
                  <div className="weight-update-tab">
                    <img
                      width="100%"
                      height="100%"
                      src="https://anima-uploads.s3.amazonaws.com/projects/602bd72d5ab477d8e2c77aae/files/weight-update-gif.gif"
                    />
                  </div>
                  <div className="frame-5-1">
                    <div className="overlap-group4-4">
                      <FeatureDot />
                      <div className="text-6 smart-layers-pointers feature-caveat hidden">{text6}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-profile-card-desktop">
              <div className="overlap-group12-1">
                <div className="title-8 castoro-normal-black-16px">{title6}</div>
                <div className="my-profile">
                  <img className="profile-picture" src={profilePicture} />
                  <div className="title">{title7}</div>
                  <HightWeight {...hightWeightProps} />
                </div>
                <div className="recommended-trainers">
                  <div className="flex-row-2">
                    <div className="text-4 castoro-normal-black-16px">{text4}</div>
                    <div className="search-icon-1">
                      <div className="overlap-group5-4">
                        <div className="oval border-1px-te-papa-green"></div>
                        <img
                          className="path"
                          src="https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path-5@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <Trainer1Desktop
                    name={trainer1DesktopProps.name}
                    emptyCheckbox={trainer1DesktopProps.emptyCheckbox}
                    kickboxing={trainer1DesktopProps.kickboxing}
                    avatar1={trainer1DesktopProps.avatar1}
                  />
                  <Trainer1Desktop
                    name={trainer1Desktop2Props.name}
                    emptyCheckbox={trainer1Desktop2Props.emptyCheckbox}
                    kickboxing={trainer1Desktop2Props.kickboxing}
                    avatar1={trainer1Desktop2Props.avatar1}
                    className="trainer-2-desktop"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col-2">
            <div className="recent-classes">
              <div className="overlap-group6-2">
                <div className="flex-col-3">
                  <div className="class-card-3">
                    <div className="overlap-group5-1">
                      <div className="class-card">
                        <div className="overlap-group7-2">
                          <div className="class-picture-2" style={{ backgroundImage: `url(${classPicture2})` }}></div>
                          <div className="title-7 lato-normal-black-16px">{title8}</div>
                          <div className="flex-row-1">
                            <p className="subtitle-4 lato-normal-black-12px">{subtitle}</p>
                            <div className="overlap-group8-2" style={{ backgroundImage: `url(${overlapGroup8})` }}>
                              <img className="full-heart-icon smart-layers-pointers" src={fullHeartIcon} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="select-class-hover smart-layers-pointers"
                        style={{ backgroundImage: `url(${selectClassHover})` }}
                      >
                        <div className="select-class lato-normal-white-16px">{selectClass}</div>
                        <Menu />
                      </div>
                    </div>
                  </div>
                  <div className="class-card-7">
                    <div className="overlap-group-3">
                      <div className="class-card-1">
                        <div className="overlap-group-4">
                          <div className="class-picture-" style={{ backgroundImage: `url(${classPicture6})` }}></div>
                          <div className="title-2 lato-normal-black-16px">{title9}</div>
                          <div className="flex-row-4">
                            <p className="subtitle-3 lato-normal-black-12px">{subtitle2}</p>
                            <div className="overlap-group7" style={{ backgroundImage: `url(${overlapGroup7})` }}>
                              <FullHeartIcon path2={fullHeartIconProps.path2} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="select-class-hover-1 smart-layers-pointers"
                        style={{ backgroundImage: `url(${selectClassHover2})` }}
                      >
                        <div className="select-class lato-normal-white-16px">{selectClass2}</div>
                        <Menu />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="class-card-2">
                  <div className="overlap-group-3">
                    <div className="class-card-1">
                      <div className="overlap-group-4">
                        <div className="class-picture" style={{ backgroundImage: `url(${classPicture})` }}></div>
                        <div className="title-9 lato-normal-black-16px">{title10}</div>
                        <div className="flex-row-9">
                          <p className="subtitle lato-normal-black-12px">{subtitle3}</p>
                          <div className="overlap-group7-1" style={{ backgroundImage: `url(${overlapGroup72})` }}>
                            <img className="full-heart-icon smart-layers-pointers" src={fullHeartIcon2} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="select-class-hover-1 smart-layers-pointers"
                      style={{ backgroundImage: `url(${selectClassHover3})` }}
                    >
                      <div className="select-class lato-normal-white-16px">{selectClass3}</div>
                      <Menu />
                    </div>
                  </div>
                </div>
                <div className="overlap-group3-3">
                  <div className="class-card-5">
                    <div className="overlap-group-3">
                      <div className="class-card-1">
                        <div className="overlap-group-4">
                          <div className="class-picture-" style={{ backgroundImage: `url(${classPicture4})` }}></div>
                          <div className="title-2 lato-normal-black-16px">{title11}</div>
                          <div className="flex-row-7">
                            <p className="subtitle-2 lato-normal-black-12px">{subtitle4}</p>
                            <div className="overlap-group8-1" style={{ backgroundImage: `url(${overlapGroup82})` }}>
                              <img className="full-heart-icon smart-layers-pointers" src={fullHeartIcon3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="select-class-hover-1 smart-layers-pointers"
                        style={{ backgroundImage: `url(${selectClassHover4})` }}
                      >
                        <div className="select-class lato-normal-white-16px">{selectClass4}</div>
                        <Menu />
                      </div>
                    </div>
                  </div>
                  <div className="video-card-desktop">
                    <div className="overlap-group9-1">
                      <img className="bg" src={bg} />
                      <EmptyHeartIcon src={emptyHeartIconProps.src} />
                      <p className="subtitle-1 lato-normal-black-14px">{subtitle5}</p>
                      <div className="title-5 lato-normal-black-16px">{title12}</div>
                      <FullHeartIcon path2={fullHeartIcon2Props.path2} className="full-heart-icon-1" />
                      <div className="video">
                        <video
                          src="https://anima-uploads.s3.amazonaws.com/projects/602bd72d5ab477d8e2c77aae/files/trainez-video-3-1-mb.mp4"
                          loop
                          controls
                          autoplay="autoplay"
                          playsinline
                        ></video>
                      </div>
                    </div>
                  </div>
                  <div className="frame-6-1">
                    <div className="overlap-group10">
                      <FeatureDot />
                      <div className="text-1 smart-layers-pointers feature-caveat hidden">{text1}</div>
                    </div>
                  </div>
                  <div className="recent-classes-1 castoro-normal-black-16px">{recentClasses}</div>
                  <div className="frame-5-2">
                    <div className="overlap-group11">
                      <FeatureDot />
                      <div className="autoplaying-videos smart-layers-pointers feature-caveat hidden">
                        {autoplayingVideos}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group4-3">
                  <div className="more-classes castoro-normal-black-16px">{moreClasses}</div>
                  <div className="frame-6">
                    <div className="overlap-group5-2">
                      <FeatureDot />
                      <div className="text-2 smart-layers-pointers feature-caveat hidden">{text2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group1">
              <div className="invite-a-friend">
                <div className="overlap-group3-5">
                  <div className="start-your-free-tria castoro-normal-black-24px">{startYourFreeTria}</div>
                  <div className="invite-form">
                    <div className="name-1 castoro-normal-black-16px">{name}</div>
                    <div className="text-form-name-desktop border-1px-heavy-metal">
                      <input
                        className="name lato-light-black-16px"
                        name="name"
                        placeholder={inputPlaceholder}
                        type={inputType}
                      />
                    </div>
                    <div className="email-address castoro-normal-black-16px">{emailAddress}</div>
                    <div className="text-form-email-desktop border-1px-heavy-metal">
                      <input
                        className="email lato-light-black-16px"
                        name="email"
                        placeholder={inputPlaceholder2}
                        type={inputType2}
                      />
                    </div>
                    <CTA>{cTAProps.children}</CTA>
                  </div>
                </div>
              </div>
              <div className="frame-6-2">
                <div className="overlap-group5-5">
                  <FeatureDot />
                  <div className="text-3 smart-layers-pointers feature-caveat hidden">{text3}</div>
                </div>
              </div>
              <img className="illustration-2" src={illustration2} />
            </div>
          </div>
        </div>
        <div className="welcome-tab-desktop">
          <div className="overlap-group14">
            <div className="flex-col">
              <img className="title-4" src={title13} />
              <div className="subtitle-5">{subtitle6}</div>
            </div>
            <img className="image" src={image} />
          </div>
        </div>
        <div className="dashboard">{dashboard}</div>
        <div className="overlap-group2">
          <div className="top-bar-desktop">
            <div className="overlap-group3">
              <div className="overlap-group4-2">
                <div className="search-tab">
                  <div className="overlap-group5-3">
                    <div className="search-1">
                      <div className="search-icon">
                        <div className="overlap-group6-1">
                          <div className="oval-1"></div>
                          <img className="path-1" src={path2} />
                        </div>
                      </div>
                      <input
                        className="search lato-normal-black-16px"
                        name="search"
                        placeholder={inputPlaceholder3}
                        type={inputType3}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-9 smart-layers-pointers feature-caveat hidden">{text9}</div>
              </div>
              <div className="frame-4">
                <div className="overlap-group7-3">
                  <FeatureDot className="feature-dot-3" />
                  <div className="menu-that-pops smart-layers-pointers feature-caveat hidden">{menuThatPops}</div>
                </div>
              </div>
              <div className="avatar">
                <div className="overlap-group5" style={{ backgroundImage: `url(${overlapGroup5})` }}>
                  <div className="avatars-notifications"></div>
                </div>
              </div>
            </div>
            <div className="frame-3">
              <div className="overlap-group8">
                <FeatureDot />
                <div className="text-10 smart-layers-pointers feature-caveat hidden">{text10}</div>
              </div>
            </div>
          </div>
          <div className="frame-2">
            <div className="overlap-group9">
              <FeatureDot className="feature-dot-2" />
              <div className="text-11 smart-layers-pointers feature-caveat hidden">{text11}</div>
            </div>
          </div>
        </div>
        <div className="side-bar-desktop">
          <div className="overlap-group15">
            <div className="icons">
              <div className="overlap-group4">
                <div className="active-bg"></div>
                <img className="icon-1" src={icon} />
              </div>
              <div className="overlap-group3-6">
                <div className="classes-icon" style={{ backgroundImage: `url(${classesIcon})` }}></div>
                <div
                  className="classes-icon-hover smart-layers-pointers"
                  style={{ backgroundImage: `url(${classesIconHover})` }}
                ></div>
              </div>
              <img className="icon" src={icon2} />
              <div className="setting-icons" style={{ backgroundImage: `url(${settingIcons})` }}></div>
            </div>
          </div>
        </div>
        <div className="frame-2-1">
          <div className="overlap-group16">
            <FeatureDot />
            <div className="hovering-state smart-layers-pointers feature-caveat hidden">{hoveringState}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopDashboard;
