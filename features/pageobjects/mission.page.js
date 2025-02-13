class Missionpage {
  get btnBack() {
    return $('//android.view.View[@content-desc="btnBack"]');
  }

  get lblTitleHeader() {
    return $('//android.widget.TextView[@content-desc="lblTitleHeader"]');
  }

  get lblBtnLearning() {
    return $('//android.view.View[@content-desc="lblBtnLearning"]');
  }

  get lblTargetMission() {
    return $('//android.widget.TextView[@content-desc="lblTargetMission"]');
  }

  get sectionTimer() {
    return $('//android.widget.ProgressBar[@content-desc="sectionTimer"]');
  }

  get btnMissionCategory() {
    return $$('//android.view.View[@content-desc="btnMissionCategory"]');
  }

  get lblMissionCategory() {
    return $$('//android.widget.TextView[@content-desc="lblMissionCategory"]');
  }

  get btnIconHeader() {
    return $('//android.view.View[@content-desc="btnIconHeader"]');
  }

  get btnMission() {
    return $$('//android.view.View[@content-desc="btnMission"]');
  }

  get lblMissionTitle() {
    return $$('//android.widget.TextView[@content-desc="lblMissionTitle"]');
  }

  get lblMissionEasy() {
    return $('//android.widget.TextView[@content-desc="lblMissionEasy"]');
  }

  get lblTargetMission() {
    return $('//android.widget.TextView[@content-desc="lblTargetMission"]');
  }

  get lblProgressEasy() {
    return $('//android.widget.TextView[@content-desc="lblProgressEasy"]');
  }

  get lblProgressMedium() {
    return $('//android.widget.TextView[@content-desc="lblProgressMedium"]');
  }

  get lblProgressHard() {
    return $('//android.widget.TextView[@content-desc="lblProgressHard"]');
  }

  get sectionTimer() {
    return $('//android.widget.ProgressBar[@content-desc="sectionTimer"]');
  }

  get btnIconHeader() {
    return $('//android.view.View[@content-desc="btnIconHeader"]');
  }

  get btnLeftPopup() {
    return $('//android.view.View[@content-desc="btnLeftPopup"]');
  }

  get btnRightPopup() {
    return $('//android.view.View[@content-desc="btnRightPopup"]');
  }

  get lblPopupError() {
    return $('//android.widget.TextView[@content-desc="lblPopupError"]');
  }

  get lblTitlePopup() {
    return $('//android.widget.TextView[@content-desc="lblTitlePopup"]');
  }

  get lblMsgPopup() {
    return $('//android.widget.TextView[@content-desc="lblMsgPopup"]');
  }

  get btnCenter() {
    return $('//android.view.View[@content-desc="btnCenter"]');
  }
}

export default new Missionpage();
