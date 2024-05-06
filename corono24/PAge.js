(function($) {
   var ac = function(c, o) {
      this.cache = {
         default: {}
      };
      this.store = {};
      this.pairs = {};
      this.init(c, o);
   };
   ac.prototype = {
      browser: null,
      ac: null,
      ul: null,
      img: null,
      container: null,
      resultContainer: null,
      mobile: false,
      timeout: null,
      chars: 0,
      url: null,
      source: null,
      minchar: 0,
      delay: 100,
      fillin: false,
      type: 'xml',
      width: 200,
      top: false,
      writable: true,
      values: false,
      vals: [],
      userInput: '',
      userInputShowing: true,
      sendEmptyMask: false,
      hardChoose: false,
      watchTypesInput: null,
      callbackConfirm: null,
      tabs: [],
      initialTabs: [],
      tabContainer: null,
      noHitsSuggestText: '',
      noHitsSuggest: null,
      clearSearchStorageText: '',
      clearSearchStorage: null,
      initialFocus: true,
      useMaxAvailableWidth: false,
      overlaySelector: '',
      hiddenFieldId: null,
      submitOnSelect: true,
      mousedownOnInput: false,
      mouseupOnOverlay: false,
      clickOnOverlay: false,
      disabled: false,
      highlighting: null,
      ajaxRequest: null,
      trackSearchSubmit: false,
      onSelect: function() {},
      onSetup: function() {},
      onKeyPress: function() {},
      onSuggest: function() {},
      onError: function() {},
      onSuccess: function() {},
      onDisplay: function() {},
      onAfterDisplay: function() {},
      selectedTab: function() {
         return this.tabs[$('.active', this.tabContainer.find('.tab-wrapper')).index()] || $('');
      },
      getCacheId: function() {
         return this.tabs.length > 0 && this.selectedTab().id ? this.selectedTab().id : 'default';
      },
      getTabElements: function() {
         return this.tabContainer.find('.jq-tab-element');
      },
      updateTabElements: function() {
         const tabElements = this.getTabElements();
         if (!tabElements.length) {
            return;
         }
         const defaultTabs = tabElements.filter('.jq-tab-default');
         const initialTabs = tabElements.filter('.jq-tab-initial');
         if (!String(this.ac.val()).trim().length) {
            defaultTabs.removeClass('visible').hide();
            initialTabs.addClass('visible').show();
         } else {
            defaultTabs.addClass('visible').show();
            initialTabs.removeClass('visible').hide();
         }
         const visibleTabs = this.getTabElements().filter('.visible');
         const visibleActiveTabs = visibleTabs.filter('.active');
         if (!visibleActiveTabs.length) {
            tabElements.removeClass('active');
            if (this._prevInitialTab && this._prevInitialTab.is('.visible')) {
               this._prevInitialTab.click();
            } else if (this._prevDefaultTab && this._prevDefaultTab.is('.visible')) {
               this._prevDefaultTab.click();
            } else {
               visibleTabs.first().click();
            }
         }
      },
      addListeners: function() {
         document.querySelector('.wt-search-input').addEventListener('mousedown', () => {
            this.mousedownOnInput = true;
         });
         document.querySelector('#js-overlay').addEventListener('mouseup', () => {
            this.mouseupOnOverlay = true;
         });
         document.querySelector('#js-overlay').addEventListener('click', () => {
            this.clickOnOverlay = true;
         });
      },
      resetListenerVariables: function() {
         this.mousedownOnInput = false;
         this.mouseupOnOverlay = false;
         this.clickOnOverlay = false;
      },
      init: function(ac, options) {
         var self = $.extend(this, options);
         if (c24.meta.isDesktop) {
            self.addListeners();
         }
         var N = navigator.appName;
         var ua = navigator.userAgent;
         var tem;
         var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
         if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) {
            M[2] = tem[1];
         }
         M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
         self.browser = M;
         if (typeof self.resultContainer == 'string') {
            self.resultContainer = $(self.resultContainer);
         }
         self.container = $('<div/>').addClass('ac_container');
         if (self.resultContainer != null && typeof self.resultContainer == 'object') {
            self.container.appendTo(self.resultContainer);
         } else {
            self.container.insertBefore(ac);
         }
         self.ac = $(ac).attr({
            autocomplete: 'off'
         }).focus(function() {
            $('body').trigger('closeFlyoutNavigation');
            if (c24.meta.isMobile && self.overlaySelector != '') {
               if (!c24.getData('isTest259Variant1')) {
                  c24.overlay.show(self.overlaySelector);
               }
            }
            self.updateTabElements();
            $('body').off('.closeAutocomplete');
            $('body').on('click.closeAutocomplete', function(event) {
               const targetsClosestFormGroup = $(event.target).closest('.form-group');
               if (targetsClosestFormGroup.length == 0 || targetsClosestFormGroup[0] != self.resultContainer.closest('.form-group')[0]) {
                  self.close();
               }
            });
            if (!self.mobile) {
               if (self.useMaxAvailableWidth && ['sm', 'md'].indexOf(c24.tools.responsiveSize()) > -1) {
                  $('.js-user-status').addClass('d-sm-none d-lg-block');
               }
               if (!self.initialTabs.length && (!self.userInput || !self.userInput.trim().length)) {
                  return;
               }
               if (!self.ul.children().length || self.selectedTab().hideAutocomplete) {
                  self.ul.hide();
                  self.noHitsSuggest.show();
               } else {
                  self.ul.show();
                  self.noHitsSuggest.hide();
               }
               self.showTabContainer();
               if (self.initialFocus && self.selectedTab().searchStorage && self.ul.children().length) {
                  self.showClearSearchStorage();
               } else {
                  self.clearSearchStorage.hide();
               }
               if (!self.selectedTab().hideAutocomplete && !self.cache[self.getCacheId()][self.userInput.trim()]) {
                  self.sendAjaxRequest();
               }
               self.initialFocus = false;
            }
            $('#header-search').addClass('active');
            self.container.show();
            if (c24.meta.isMobile && c24.getData('isTest259Variant1')) {
               var scrollable = false;
               document.body.style.paddingRight = scrollable ? 0 : `${window.innerWidth-document.documentElement.clientWidth}px`;
               document.body.classList[scrollable ? 'remove' : 'add']('no-scroll');
            }
         }).addClass('ac_input');
         if (self.resultContainer == null || typeof self.resultContainer != 'object') {
            self.ac.appendTo(self.container);
         }
         self.tabContainer = $('<div></div>').addClass('ac-tab-container text-lg text-center').data('swipe-clue-style', 'light').appendTo(self.container).hide();
         const $tabWrapper = $('<div class="tab-wrapper d-flex"/>').appendTo(self.tabContainer);
         if (self.initialTabs.length) {
            self.initialTabs.sort((a, b) => {
               return a.order > b.order ? 1 : -1;
            }).map(tab => {
               tab.initial = true;
               return tab;
            });
            if (self.tabs.length) {
               self.tabs = self.initialTabs.concat(self.tabs);
            }
         }
         self.tabs.forEach(tab => {
            const tabClasses = ['jq-tab-element', 'tab-element', 'p-x-3', 'pointer', 'flex-grow-1', tab.selected ? 'active' : '', tab.initial ? 'jq-tab-initial' : 'jq-tab-default'].join(' ');
            const tabDiv = $('<div/>').addClass(tabClasses).text(tab.name).appendTo($tabWrapper).click(function() {
               $('.jq-tab-element', self.tabContainer).removeClass('active');
               $(this).addClass('active');
               self.url = tab.endpointUrl;
               if ($.isFunction(tab.sourceData)) {
                  self.source = tab.sourceData();
               }
               if (tab.hideAutocomplete) {
                  self.ul.hide();
                  self.noHitsSuggest.show();
               } else {
                  self.ul.show();
                  self.noHitsSuggest.hide();
                  self.sendAjaxRequest();
               }
               self.ac.focus();
               $.each(tab.parameters, (key, value) => {
                  $(this).parents('form').find('input[name="' + key + '"]').val(value);
               });
               if (tab.onSelect != undefined) {
                  tab.onSelect(tab);
               }
               self[tab.initial ? '_prevInitialTab' : '_prevDefaultTab'] = $(this);
            });
            if (tab.selected) {
               self.url = tab.endpointUrl;
               if ($.isFunction(tab.sourceData)) {
                  self.source = tab.sourceData();
               }
               self[tab.initial ? '_prevInitialTab' : '_prevDefaultTab'] = tabDiv;
            }
            self.cache[tab.id] = {};
         });
         if ($('.active', $tabWrapper).length === 0) {
            $tabWrapper.children().first().addClass('active');
         }
         self.ul = $('<div/>').addClass('ac_results').appendTo(self.container).click(function(e) {
            if (self.select(e) && self.submitOnSelect) {
               $(self.ac).parents('form').trigger('submit');
            }
         }).hide();
         if (self.noHitsSuggestText && self.noHitsSuggestText.length) {
            self.noHitsSuggest = $('<button/>').addClass('text-lg p-y-2 p-x-4').attr('type', 'button').text(self.noHitsSuggestText).appendTo(self.container).click(function() {
               $(self.ac).parents('form').trigger('submit');
            }).hide();
         } else {
            self.noHitsSuggest = $('');
         }
         if (self.clearSearchStorageText && self.clearSearchStorageText.length) {
            self.clearSearchStorage = $('<button/>').addClass('link text-lg p-y-2 p-x-4').attr('type', 'button').text(self.clearSearchStorageText).appendTo(self.container).click(function(e) {
               try {
                  if (localStorage.getItem('searchStorage') !== null) {
                     localStorage.removeItem('searchStorage');
                     self.cache[self.getCacheId()] = {};
                     self.clearSearchStorage.hide();
                     self.ul.empty();
                     self.getTabElements().filter('.active').click();
                  }
               } catch (err) {
                  c24.errors.logWarning('Error in search', 'jquery.google.autocomplete.js', err);
               }
            }).hide();
         } else {
            self.clearSearchStorage = $('');
         }
         self.ac.attr('autocomplete', 'off');
         self.ac.keydown(self, self.processKeyDown);
         self.ac.keypress(self, self.processKeyPress);
         self.ac.keyup(self, self.processKeyUp);
         self.onSetup.apply(self, arguments);
         if (self.fillin) {
            self.suggest('hide');
         }
         if (self.ac.is(':focus')) {
            self.ac.trigger('focus');
         }
      },
      clearCache: function() {
         var self = this;
         $.each(self.cache, function(key) {
            self.cache[key] = {};
         });
         self.store = {};
         self.pairs = {};
      },
      processKeyDown: function(e) {
         var self = e.data;
         if (/^(27|38|40)$/.test(e.keyCode) && self.ul.is(':visible')) {
            switch (e.keyCode) {
               case 27:
                  self.close();
                  break;
               case 38:
                  self.addGoal();
                  self.prev();
                  break;
               case 40:
                  self.addGoal();
                  self.next();
                  break;
            }
            self.chars = self.ac.val().length;
         } else if (/^(38|40)$/.test(e.keyCode) && !self.ul.is(':visible') && self.ul.children().size() > 0) {
            if (self.selectedTab().hideAutocomplete) {
               self.ul.show();
               self.showTabContainer();
               self.noHitsSuggest.hide();
            }
         } else if (e.keyCode == 9 || !self.ul.is(':visible') && e.keyCode == 27) {
            self.close();
         }
      },
      processKeyPress: function(e) {
         var self = e.data;
         self.onKeyPress.apply(self, arguments);
         if (/^(9|13)$/.test(e.keyCode) && self.ul.is(':visible')) {
            if (e.keyCode == 9) {
               self.select();
            } else if (e.keyCode == 13) {
               var selectedElement = self.get();
               if (selectedElement && selectedElement.length > 0) {
                  if (self.hardChoose) {
                     e.preventDefault();
                     self.select();
                     self.ul.hide();
                     self.tabContainer.hide();
                     self.noHitsSuggest.hide();
                     self.close();
                     self.val(self.ac.val());
                  } else {
                     e.preventDefault();
                     if (self.select() && self.submitOnSelect) {
                        $(self.ac).parents('form').trigger('submit');
                     }
                  }
               }
            }
            self.chars = self.ac.val().length;
         }
      },
      processKeyUp: function(e) {
         var self = e.data;
         var len = self.ac.val().length;
         if (!len && !self.initialTabs.length) {
            self.ul.empty();
            self.ul.hide();
            self.tabContainer.hide();
            self.noHitsSuggest.hide();
            return;
         }
         if ((len != self.chars || !len) && !self.disabled) {
            self.chars = len;
            self.userInput = self.ac.val();
            self.userInputShowing = true;
            self.sendAjaxRequest();
         }
      },
      sendAjaxRequest: function() {
         var self = this;
         var additionalDelay = Math.max(0, 3 - self.chars) * 100;
         self.updateTabElements();
         if (self.timeout) {
            clearTimeout(self.timeout);
         }
         self.timeout = setTimeout(function() {
            if (self.ac.is(':focus')) {
               self.suggest(self.selectedTab().hideAutocomplete ? 'hide' : 'show');
            }
         }, self.delay + additionalDelay);
      },
      get: function() {
         var self = this;
         return self.ul.children('#ac_over');
      },
      prev: function() {
         var self = this;
         var current = self.get();
         var prev = current.prev();
         if (prev.prop('tagName') == 'HR') {
            prev = prev.prev();
         }
         if (current.length) {
            current.removeAttr('id');
            if (prev.length) {
               self.userInputShowing = false;
               prev.attr('id', 'ac_over');
               self.ac.val(self.getSuggestionTextFromDiv(prev));
            }
         }
         if (!current.length || !prev.length) {
            if (self.userInputShowing) {
               self.userInputShowing = false;
               self.ul.children('div:last').attr('id', 'ac_over');
               self.ac.val(self.getSuggestionTextFromDiv(self.ul.children('div:last')));
            } else {
               self.ac.val(self.userInput);
               self.userInputShowing = true;
            }
         }
         self.scroll();
      },
      next: function() {
         var self = this;
         var current = self.get();
         var next = current.next();
         if (next.prop('tagName') == 'HR') {
            next = next.next();
         }
         if (current.length) {
            current.removeAttr('id');
            if (next.length) {
               self.userInputShowing = false;
               next.attr('id', 'ac_over');
               self.ac.val(self.getSuggestionTextFromDiv(next));
            }
         }
         if (!current.length || !next.length) {
            if (self.userInputShowing) {
               self.userInputShowing = false;
               self.ul.children('div:first').attr('id', 'ac_over');
               self.ac.val(self.getSuggestionTextFromDiv(self.ul.children('div:first')));
            } else {
               self.ac.val(self.userInput);
               self.userInputShowing = true;
            }
         }
         self.scroll();
      },
      scroll: function() {
         var self = this;
         var current = self.get();
         if (!current.length) {
            return;
         }
         var el = current.get(0);
         var list = self.ul.get(0);
         if (el.offsetTop + el.offsetHeight > list.scrollTop + list.clientHeight) {
            list.scrollTop = el.offsetTop + el.offsetHeight - list.clientHeight;
         } else if (el.offsetTop < list.scrollTop) {
            list.scrollTop = el.offsetTop;
         }
      },
      select: function() {
         var self = this;
         var current = self.get();
         if (self.callbackConfirm) {
            var confirm = self.callbackConfirm(current);
            if (!confirm) {
               return false;
            }
         }
         if (current) {
            var index = self.ul.children().index(current);
            if (self.hiddenFieldId) {
               $('#' + self.hiddenFieldId).val(self.vals[index]).trigger('change');
            }
            if (self.trackSearchSubmit) {
               let trackingAction = 'search-submit';
               if (self.getCacheId() !== 'recentSearches' && self.getCacheId() !== 'topSearches') {
                  trackingAction += '-suggested';
               }
               tce(self.getCacheId(), trackingAction);
            }
            self.addGoal();
            self.ac.val(self.getSuggestionTextFromDiv(current));
            self.ul.hide();
            self.tabContainer.hide();
            self.clearSearchStorage.hide();
            self.close();
            var url = current.attr('data-url');
            if (url) {
               url += (url.indexOf('?') == -1 ? '?' : '&') + 'goal_suggest=1';
               if (self.watchTypesInput != null && self.watchTypesInput.val() != '' && self.watchTypesInput.val() != 'U') {
                  url += '&' + self.watchTypesInput.attr('name') + '=' + self.watchTypesInput.val();
                  var bracelets = self.watchTypesInput.find('option:selected').data('bracelets');
                  if (bracelets) {
                     url += '&accessoryTypes=2000';
                  }
               }
               www.exam.com/endpont?goal_suggest=1&accessoryTypes=2000
               if (self.selectedTab()) {
                  $.each(self.selectedTab().parameters, (key, value) => {
                     if (value != '') {
                        url += '&' + key + '=' + value;
                     }
                  });
                  if (self.selectedTab().doSearch) {
                     url += (url.indexOf('?') == -1 ? '?' : '&') + (url.indexOf('dosearch=true') == -1 ? 'dosearch=true' : '');
                  }
               }
               window.location.href = url;
               return false;
            }
            self.onSelect.apply(self, arguments);
            return self.submitOnSelect;
         }
         return false;
      },
      suggest: function(show) {
         var self = this;
         var mask = $.trim(self.userInput);
         self.updateTabElements();
         if (self.ajaxRequest != null) {
            self.ajaxRequest.abort();
         }
         if (mask.length >= self.minchar) {
            self.onSuggest.apply(self, arguments);
            if (self.cache[self.getCacheId()][mask] && !$.isFunction(self.cache[self.getCacheId()][mask]) && !$.isFunction(self.url) && !$.isFunction(self.selectedTab().sourceData)) {
               const cache = self.cache[self.getCacheId()][mask];
               self.prepare(cache, mask)[show]();
               if (show === 'show') {
                  self.showTabContainer();
                  if (!cache.children[0].children.length || self.selectedTab().hideAutocomplete) {
                     self.ul.hide();
                     self.noHitsSuggest.show();
                  } else {
                     self.ul.show();
                     self.noHitsSuggest.hide();
                  }
               } else {
                  self.ul.hide();
                  self.tabContainer.hide();
               }
            } else if (self.url && (mask != '' || self.sendEmptyMask)) {
               self.ajaxRequest = $.ajax({
                  type: 'GET',
                  data: {
                     mask: mask
                  },
                  url: $.isFunction(self.url) ? self.url(self) : self.url,
                  success: function(xml) {
                     if (!self.ac.is(':focus')) {
                        return;
                     }
                     self.onSuccess.apply(self, arguments);
                     self.prepare(xml, mask)[show]();
                     self.resize();
                     if (show === 'show') {
                        self.showTabContainer();
                        if (!xml || !xml.children[0].children.length || self.selectedTab().hideAutocomplete) {
                           self.ul.hide();
                           self.noHitsSuggest.show();
                        } else {
                           self.ul.show();
                           self.noHitsSuggest.hide();
                        }
                     } else {
                        self.ul.hide();
                        self.tabContainer.hide();
                     }
                  },
                  error: function(a, b, c) {
                     self.onError.apply(self, arguments);
                  },
                  dataType: self.type
               });
            } else if (self.source) {
               self.prepare(self.source, mask)[show]();
               if (show) {
                  self.ul.show();
                  self.showTabContainer();
               } else {
                  self.ul.hide();
                  self.tabContainer.hide();
               }
               if (!self.ul.children().length) {
                  self.ul.hide();
               }
            }
            self.resize();
         } else {
            self.ul.empty();
            self.ul.hide();
            self.tabContainer.hide();
         }
      },
      resize: function() {
         var self = this;
         var parentContainer = self.resultContainer.parent().parent();
         if (parentContainer.hasClass('input-group')) {
            var newWidth = parentContainer.width();
            self.ul.outerWidth(newWidth);
            $(window).resize(function() {
               var newWidth = parentContainer.width();
               self.ul.outerWidth(newWidth);
            });
         }
      },
      prepare: function(xml, mask) {
         var self = this;
         var select = $(xml);
         var maxLength = 0;
         self.store[mask] = '';
         self.cache[self.getCacheId()][mask] = xml;
         self.vals = [];
         if (!self.store[mask]) {
            var selectObj = select.find('option');
            var noResultSwitch = select.find('no-results');
            const data = {};
            if (selectObj.length) {
               selectObj.each(function(i, n) {
                  var $n = $(n);
                  var t = $n.text();
                  var entryText = $n.html() || t;
                  $.each($n.get(0).attributes, (index, dataAttribute) => {
                     if (dataAttribute.name.indexOf('data') === 0) {
                        data[dataAttribute.name] = dataAttribute.value;
                     }
                  });
                  self.noResults = false;
                  const hasBorderBottom = i > 0 && $n.attr('add-on-text') && $(selectObj[i + 1]).attr('add-on-text') == undefined;
                  const hasNoBorder = i > 0 && !$n.attr('add-on-text') && $(selectObj[i - 1]).attr('add-on-text') && $(selectObj[i - 1]).attr('add-on-text').length > 0;
                  self.store[mask] += self.mark(entryText, mask, data, $n.attr('add-on-text'), $n.attr('url'), $n.attr('hr-after-this'), $n.attr('imageUrl'), $n.attr('title'), hasNoBorder, $n.attr('filter-text'), hasBorderBottom);
                  maxLength = Math.max(maxLength, t.length);
                  self.vals.push($n.attr('value'));
                  if (self.values && !self.pairs[t]) {
                     self.pairs[t] = $n.attr('value');
                  }
               });
               self.noResults = false;
            } else if (noResultSwitch.length) {
               noResultSwitch.each(function(i, n) {
                  var $n = $(n);
                  var t = $n.text().trim();
                  var entryText = $n.html() || t;
                  $.each($n.get(0).attributes, (index, dataAttribute) => {
                     if (dataAttribute.name.indexOf('data') === 0) {
                        data[dataAttribute.name] = dataAttribute.value;
                     }
                  });
                  self.noResults = true;
                  self.store[mask] += self.mark(entryText, mask, data, $n.attr('add-on-text'), $n.attr('url'), $n.attr('hr-after-this'), $n.attr('imageUrl'), $n.attr('title'), false, $n.attr('filter-text'), false);
                  maxLength = Math.max(maxLength, t.length);
                  self.vals.push($n.attr('value'));
                  if (self.values && !self.pairs[t]) {
                     self.pairs[t] = $n.attr('value');
                  }
               });
            }
         }
         if (!self.writable && !self.cache[self.getCacheId()][mask].length) {
            setTimeout(function() {
               var val = self.ac.val();
               self.ac.val(val.substring(0, val.length - 1));
               self.chars--;
            }, 50);
            return self.ul;
         }
         if (!maxLength) {
            self.noHitsSuggest.show();
         } else {
            self.noHitsSuggest.hide();
         }
         return self.display(self.store[mask], maxLength);
      },
      mark: function(text, mask, data, addOnText, url, hr, imageUrl, title, noBorder, filterText, hasBorderBottom) {
         url = url ? ' data-url="' + url + '"' : '';
         title = title ? ' title="' + title + '"' : '';
         var dataString = '';
         Object.keys(data).forEach(dataElem => {
            dataString += `${dataElem}="${data[dataElem]}" `;
         });
         if (this.noResults) {
            var $elem = '<div class="ac_unmatched pointer no-result" ' + url + dataString + title + '><i class="i-watch p-y-2 p-r-2 p-l-1 m-r-2"></i><span class="ac_suggestion text-lg">' + text + '</span></div>';
            return $elem;
         }
         mask = this.escapeForRegexp(mask);
         mask = mask.replace(/ /g, '|');
         var regExpString = '(\\s+|^)(' + mask + ')';
         var regExpReplacementString = '$1$2';
         if (this.highlighting == 'everywhere') {
            regExpString = '(' + mask + ')';
            regExpReplacementString = '$1';
         }
         var regexp = new RegExp(regExpString, 'gi');
         if (regexp.test(text)) {
            text = text.split('<br/>').map(html => {
               return html.replace(/<[/]?span>/g, '').replace(/(&amp;)/g, '&').replace(regexp, '<span class="ac_matched">' + regExpReplacementString + '</span>');
            }).join('<br/>');
         }
         addOnText = addOnText ? '<span class="ac_addon">' + addOnText + '</span>' : '';
         filterText = filterText ? '<span class="ac_addon d-block text-ellipsis">' + filterText + '</span>' : '';
         hr = hr ? '<hr/>' : '';
         var img = '';
         if (imageUrl !== undefined && imageUrl !== '') {
            img = '<img src="' + imageUrl + '" alt=""/>';
         }
         return '<div class="ac_unmatched pointer ' + (addOnText.length ? 'has-addon-text ' : '') + (noBorder && !filterText ? 'no-border ' : '') + (hasBorderBottom ? 'last-addon-text-suggest ' : '') + (this.noResults ? 'no-result' : '') + '" ' + url + dataString + title + '>' + img + '<span class="ac_suggestion text-lg ' + (filterText ? 'text-ellipsis' : '') + '">' + text + '</span>' + addOnText + filterText + '</div>' + hr;
      },
      escapeForRegexp: function(str) {
         return str.replace(/[-[\]{}()<>*+?.,\\^$|#]/g, '\\$&');
      },
      display: function(list, maxLength) {
         const self = this;
         self.onDisplay.apply(self, arguments);
         if (!list || !list.length) {
            self.ul.empty();
         } else {
            self.ul.html(list);
            const listItems = self.ul.children('div');
            if (self.noResults && !self.ul.find('.ac_unmatched').data('url')) {
               listItems.mouseenter(function() {
                  $(this).siblings('div').removeAttr('id').end().attr('id', 'ac_over');
               }).mouseleave(function() {
                  $(this).removeAttr('id');
               }).click(function(event) {
                  $(this).siblings('div').removeAttr('id').end().attr('id', 'ac_over');
                  self.select(event);
                  event.stopPropagation();
                  event.preventDefault();
                  return false;
               });
            }
            if (self.mobile) {
               listItems.click(function(event) {
                  $(this).siblings('div').removeAttr('id').end().attr('id', 'ac_over');
                  self.select(event);
                  if (self.submitOnSelect) {
                     $(self.ac).parents('form').trigger('submit');
                  }
               });
            } else {
               listItems.mouseenter(function() {
                  $(this).siblings('div').removeAttr('id').end().attr('id', 'ac_over');
               }).mouseleave(function() {
                  $(this).removeAttr('id');
               });
            }
         }
         if (self.selectedTab().searchStorage && self.ul.children().length) {
            self.ul.addClass('condense');
            self.showClearSearchStorage();
         } else {
            self.ul.removeClass('condense');
            self.clearSearchStorage.hide();
         }
         return self.ul;
      },
      showClearSearchStorage: function() {
         var self = this;
         self.clearSearchStorage.show();
      },
      addGoal: function() {
         var self = this;
         var form = $(self.ac).parents('form');
         if ($('input[name=goal_suggest]', form).length == 0) {
            form.append('<input type=\'hidden\' name=\'goal_suggest\' value=\'1\'/>');
         }
      },
      getSuggestionTextFromDiv: function(element) {
         return element.children('.ac_suggestion').text().trim();
      },
      close: function() {
         var self = this;
         if (c24.meta.isDesktop) {
            if (self.mouseupOnOverlay && self.mousedownOnInput && !self.clickOnOverlay) {
               self.resetListenerVariables();
               return;
            } else {
               self.resetListenerVariables();
            }
         }
         self.initialFocus = true;
         if (!self.mobile) {
            $('#header-search').removeClass('active');
            self.container.hide();
            self.ul.hide();
            self.noHitsSuggest.hide();
            self.tabContainer.hide();
            self.clearSearchStorage.hide();
         }
         $('.js-user-status').removeClass('d-sm-none d-lg-block');
         if (c24.meta.isMobile && self.overlaySelector != '') {
            c24.overlay.hide(self.overlaySelector);
         }
         if (c24.meta.isMobile && c24.getData('isTest259Variant1')) {
            var scrollable = true;
            document.body.style.paddingRight = scrollable ? 0 : `${window.innerWidth-document.documentElement.clientWidth}px`;
            document.body.classList[scrollable ? 'remove' : 'add']('no-scroll');
         }
         $('body').off('.closeAutocomplete');
      },
      showTabContainer: function() {
         const self = this;
         if (self.tabs.length) {
            self.updateTabElements();
            self.tabContainer.show();
         }
      }
   };
   $.fn.c24Autocomplete = function(options) {
      this.each(function() {
         if (this.tagName == 'SELECT' && !this.multiple) {
            var select = $(this);
            var input = $('<input type=\'text\'/>').addClass(select.attr('class')).attr('tabindex', select.attr('tabindex')).attr('title', select.attr('title')).attr('id', 'ac_' + select.attr('id'));
            select.after(input).hide();
            $('label[for=\'' + select.attr('id') + '\']').attr('for', 'ac_' + select.attr('id'));
            this.ac = new ac(input, $.extend({
               source: this,
               values: true,
               fillin: true,
               writable: false,
               onSelect: function() {
                  select.val(this.pairs[this.ac.val()]);
               }
            }, options));
         } else if (this.tagName == 'INPUT') {
            this.ac = new ac(this, options);
         }
      });
      return this;
   };
})(jQuery);