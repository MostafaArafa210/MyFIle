/* Freeze FAQ functions */

function toggle(faqQBox) {
  var faqQBoxClasses = faqQBox.classList,
    question;
  if (faqQBoxClasses.contains("open")) {
    faqQBoxClasses.remove("open");
  } else {
    faqQBoxClasses.add("open");
    question = faqQBox.getElementsByClassName("faqQuestion")[0].firstChild.innerText;
	 tagManagerPush(question);
  }
}

//update google tag manager (when question is clicked to open)
function tagManagerPush(question) {
  window.dataLayer.push({
    event: tagManagerEvent,
    gaEvent: {
      category: tagManagerEvent,
      action: question,
      label: question,
      nonInteraction: true
    }
  });
}

function loadCategories() {
  var str = "";

  for (key in allFAQsObj) {
    str +=
      '<div class="catListItem" tabindex="0">'
      + '<svg class="catIcon" data-name="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">'
      + '<title>link</title>'
      + '<path d="M10,19.5A9.51,9.51,0,0,1,.91,12.78h2a7.65,7.65,0,1,0-.46-3.71H10.3L8.49,7.25,9.8,5.94l2.88,2.88a1.67,1.67,0,0,1,0,2.36L9.8,14.06,8.49,12.75l1.81-1.82H.55c0-.3-.05-.61-.05-.92A9.5,9.5,0,1,1,10,19.5Z" transform="translate(-0.5 -0.5)"/>'
      + '</svg>'
      + '<a class="catLink" onclick="filter(\'' + key + '\', this);">'
      + allFAQsObj[key].category + ' (' + allFAQsObj[key].Faqs.length + ')</a>'
      + '</div>';
  }
  document.getElementsByClassName("faqCategoriesList")[0].innerHTML = str;
}

function filter(category, catLink, onload) {
  var str = "";
  var visibility = "";
  var i = 0,
    j = 0,
    numOfResults = 0;
  var nLen;
  var replacePtags

  if (onload) {
    for (key in allFAQsObj) {
      nLen = allFAQsObj[key].Faqs.length;
      for (i = 0; i < nLen; i++) {
        visibility = (j > 9) ? "d-none" : "";

        replacePtags = marked(allFAQsObj[key].Faqs[i].question).replace(/p>/g, 'h2>');

        str +=
          '<button class="faqQuestionBox ' + visibility + '" onclick="toggle(this);">'
          + '<div class="faqIcon"><span></span><span></span></div>'
          + '<div class="faqQuestion">'
          + replacePtags
          + "</div>"
          + '<div class="faqAnswer">'
          + marked(allFAQsObj[key].Faqs[i].answer)
          + "</div>"
          + "</button>";
        ++j;
      }
    }
  } else {
    var nLen = allFAQsObj[category].Faqs.length;
    for (i = 0; i < nLen; i++) {
      replacePtags = marked(allFAQsObj[category].Faqs[i].question).replace(/p>/g, 'h2>');
      str +=
        '<button class="faqQuestionBox" onclick="toggle(this);">'
        + '<div class="faqIcon"><span></span><span></span></div>'
        + '<div class="faqQuestion">'
        + replacePtags
        + "</div>"
        + '<div class="faqAnswer">'
        + marked(allFAQsObj[category].Faqs[i].answer)
        + "</div>"
        + "</button>";
      // if (i > 8) {
      //   ++i;
      //   break;
      // }
    }
  }

  if (onload) {
    str = '<h4 class="results d-none">Results for: '
      + '  <button class="btn" onClick="reset();">Reset x</button></h4>'
      + str;

    numOfResults = (j > 9) ? 10 : j;
  } else {
    str = '<h4 class="results">Results for: Category = "'
      + allFAQsObj[category].category
      + '"  <button class="btn" onClick="reset();">Reset x</button></h4>'
      + str;

    numOfResults = i;
  }


  str += '<p class="faqShowing">Showing ' + numOfResults + resultsCountString + '</p>';
  document.getElementById("faqBoxesContainer").innerHTML = str;
  document.getElementById("faqBoxesContainer").style.marginTop = "20px";

  //when category is clicked and search field has a value, only show results that has the search value 
  if (document.getElementById("faqInput").value != "") search();

  //Show clicked category in bold/tu-blue
  catListItem = document.getElementsByClassName("catListItem");
  nLen = catListItem.length;

  for (i = 0; i < nLen; i++) {
    catListItem[i].classList.remove("active");
  }
  if (catLink != null)
    catLink.parentNode.classList.add("active");
}

function reset() {
  document.getElementById("faqInput").value = "";
  filter(null, null, true);
}

function search() {
  var input,
    filter,
    faqGroup,
    questionBox,
    question,
    answer,
    i,
    txtValue,
    nLen,
    origFilter,
    str = "",
    numOfResults = 0;

  input = document.getElementById("faqInput");
  origFilter = input.value;
  filter = input.value.toUpperCase();

  faqGroup = document.getElementById("faqBoxesContainer");
  questionBox = faqGroup.getElementsByClassName("faqQuestionBox");
  nLen = questionBox.length;

  results = document.getElementsByClassName("results")[0];
  resultsHeader = results.childNodes[0].textContent;

  if (results.classList.contains("d-none")) results.classList.remove("d-none");
  else if (origFilter == "" && resultsHeader.indexOf('Category') == -1) {
    results.classList.add("d-none");
  }

  if (resultsHeader.indexOf('Category') > -1) {
    str = "Results for: ";
    if (origFilter != "") {
      str += "\"" + origFilter + "\" And ";
    }
    str += resultsHeader.substring(resultsHeader.indexOf('Category'));
    results.childNodes[0].textContent = str;
  } else if (origFilter != "") {
    str = "Results for: \"" + origFilter + "\"";
    results.childNodes[0].textContent = str;
  }

  for (i = 0; i < nLen; i++) {
    question = questionBox[i].getElementsByClassName("faqQuestion")[0];
    answer = questionBox[i].getElementsByClassName("faqAnswer")[0];

    txtValue = question.textContent || question.innerText;
    answerText = answer.textContent || answer.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || answerText.toUpperCase().indexOf(filter) > -1) {
      questionBox[i].classList.remove("d-none");
      questionBox[i].classList.add("show");
      document.getElementsByClassName("faqShowing")[0].innerHTML = "Showing " + ++numOfResults + resultsCountString;

      if (numOfResults > 9) break;
      if (filter == "") {
        question.innerHTML = question.innerText;
        // answer.innerHTML = answer.innerText;
      } else {
        //hightlight search word in tu blue, for question
        var match,
          indexes = [];
        regex = new RegExp(origFilter, 'gi');

        while (match = regex.exec(txtValue)) {
          indexes.push(match.index);
        }
        if (indexes.length > 0) {
          str = "";
          var k = 0;
          for (j = 0; j < indexes.length; ++j) {
            str += txtValue.substr(k, indexes[j] - k) + '<span style="color: #00A6CA">' + txtValue.substr(indexes[j], origFilter.length) + '</span>';
            k = indexes[j] + origFilter.length;
            if (j == indexes.length - 1)
              str += txtValue.substr(indexes[j] + origFilter.length);
          }
          question.innerHTML = str;
        } else {
          question.innerHTML = txtValue;
        }
      }
    } else {
      questionBox[i].classList.remove("show");
      questionBox[i].classList.add("d-none");
    }
  }
}

function removeActive(someClass) {
  document.getElementsByClassName(someClass).classList.remove("active");
}

function cancelEnter(event) {
  if (event.which === 13 /* Enter */ ) {
    event.preventDefault();
  }
}

//load FAQ data on load of page
filter(null, null, true);
loadCategories();

function goBack() {
  window.history.back();
}

function trackTelephoneNumber(telephoneNumber) {
  return window.dataLayer.push({
    "event": "Track: Page Click",
    "gaEvent": {
      "category": "Page Click",
      "action": "Telephone Number",
      "label": telephoneNumber
    }
  })
}

function trackPhoneMailOptions(phoneMailOptionLink) {
  return window.dataLayer.push({
    "event": "Track: Page Click",
    "gaEvent": {
      "category": "Page Click",
      "action": "Phone and Mail Options Popup",
      "label": "Phone and Mail Options Popup"
    }
  })
}

function trackStatePriceOptions(statePriceOptionLink) {
  return window.dataLayer.push({
    "event": "Track: Page Click",
    "gaEvent": {
      "category": "Page Click",
      "action": "State Free or Reduced Price Popup",
      "label": "State Free or Reduced Price Popup"
    }
  })
}

function trackGetStarted(GetStartedLink) {
  return window.dataLayer.push({
    "event": "Track: Page Click",
    "gaEvent": {
      "category": "Page Click",
      "action": GetStartedLink,
      "label": GetStartedLink
    }
  })
}

function trackACR(acrLink) {
  return window.dataLayer.push({
    "event": "Track: Page Click",
    "gaEvent": {
      "category": "Page Click",
      "action": acrLink,
      "label": acrLink
    }
  })
}

//for read more functionality on mobile and desktop
function readMore(readMoreLink) {

  var showMobileClasses = readMoreLink.classList;
  if (showMobileClasses.contains("open")) {
    showMobileClasses.remove("open");
    // Change link text
    $(readMoreLink).html('<div class="moreIcon"><span></span><span></span></div>View Subscription Benefits');
    // Travel up DOM tree to parent, then find any children with CLASS .toggle-text and slide up 
    $(readMoreLink).parent().children(".moreContent").slideUp();
  } else {
    showMobileClasses.add("open");

    $(readMoreLink).html('<div class="moreIcon"><span></span><span></span></div>Hide Subscription Benefits');
    // Travel up DOM tree to parent, then find any children with CLASS .toggle-text and slide down
    $(readMoreLink).parent().children(".moreContent").slideDown();
  }

  return window.dataLayer.push({
    "event": "Track: Page Click",
    "gaEvent": {
      "category": "Page Click",
      "action": "View Subscription Benefits Link",
      "label": "View Subscription Benefits Link"
    }
  })

}


function trackFreezevsLock(tabLink) {
  var tabID = tabLink.id;
  
  return window.dataLayer.push({
    "event": "Track: Page Click",
    "gaEvent": {
      "category": "Page Click",
      "action": tabID,
      "label": tabID
    }
  })
}



function trackGetStarted(GetStartedLink) {
	return window.dataLayer.push({
		"event": "Track: Page Click",
		"gaEvent": {
			"category": "Page Click",
			"action": GetStartedLink,
			"label": GetStartedLink
		}
	})
}

function trackPrivacyRequest(privacyRequestLink) {
	return window.dataLayer.push({
		"event": "Track: Page Click",
		"gaEvent": {
			"category": "Page Click",
			"action": privacyRequestLink,
			"label": privacyRequestLink
		}
	})
}

