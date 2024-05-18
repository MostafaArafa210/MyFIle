var agentName = "";
function autoClose(data, eventInfo) {
  if (window.console && window.JSON) {
    if(data.agentName) {
        agentName = data.agentName;
    }
    if (
      data.state == "ended" &&
      (agentName.indexOf("Survey") != -1 || agentName.indexOf("Auto Close") != -1)
    ) {
      $(".lpc_maximized-header__close-button").click();
    
  }
}
}

lpTag.events.bind("lpUnifiedWindow", "conversationInfo", autoClose);

lpTag.events.bind("lpUnifiedWindow", "state", autoClose);
