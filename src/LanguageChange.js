import React from "react";
import { withTranslation } from "react-i18next";

class LanguageChange extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div align="center">
        <p>{t("welcome")}</p>
        <p>{t("english")}</p>
        <p> {t("dieties_name")}</p>
        <p>{t("alias")}</p>
        <p>{t("dieties_name")}</p>
        <p>{t("hindi")}</p>
        <p>{t("upload_avatar")}</p>
      </div>
    );
  }
}

export default withTranslation()(LanguageChange);
