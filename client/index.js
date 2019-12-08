import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { registerOperatorRoute } from "../../../../client/ui";
import Importer from "./components/importer";

registerOperatorRoute({
    isNavigationLink: true,
    isSetting: false,
    path: "/acc-text-import",
    mainComponent: Importer,
    SidebarIconComponent: (props) => <FontAwesomeIcon icon={faFont} {...props} />,
    sidebarI18nLabel: "acc-text-import.admin.accTextImportLabel"
});
