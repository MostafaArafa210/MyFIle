+ function($) {
   'use strict';
   var Tooltip = function(element, options) {
      this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null
      this.init('tooltip', element, options)
   }
   Tooltip.VERSION = '3.2.0'
   Tooltip.DEFAULTS = {
      animation: true,
      placement: 'top',
      selector: false,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      container: false,
      viewport: {
         selector: 'body',
         padding: 0
      }
   }
   Tooltip.prototype.init = function(type, element, options) {
      this.enabled = true
      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)
      var triggers = this.options.trigger.split(' ')
      for (var i = triggers.length; i--;) {
         var trigger = triggers[i]
         if (trigger == 'click') {
            this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
         } else if (trigger != 'manual') {
            var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
            var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
            this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
            this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
         }
      }
      this.options.selector ? (this._options = $.extend({}, this.options, {
         trigger: 'manual',
         selector: ''
      })) : this.fixTitle()
   }
   Tooltip.prototype.getDefaults = function() {
      return Tooltip.DEFAULTS
   }
   Tooltip.prototype.getOptions = function(options) {
      options = $.extend({}, this.getDefaults(), this.$element.data(), options)
      if (options.delay && typeof options.delay == 'number') {
         options.delay = {
            show: options.delay,
            hide: options.delay
         }
      }
      return options
   }
   Tooltip.prototype.getDelegateOptions = function() {
      var options = {}
      var defaults = this.getDefaults()
      this._options && $.each(this._options, function(key, value) {
         if (defaults[key] != value) options[key] = value
      })
      return options
   }
   Tooltip.prototype.enter = function(obj) {
      var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type)
      if (!self) {
         self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
         $(obj.currentTarget).data('bs.' + this.type, self)
      }
      clearTimeout(self.timeout)
      self.hoverState = 'in'
      if (!self.options.delay || !self.options.delay.show) return self.show()
      self.timeout = setTimeout(function() {
         if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
   }
   Tooltip.prototype.leave = function(obj) {
      var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type)
      if (!self) {
         self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
         $(obj.currentTarget).data('bs.' + this.type, self)
      }
      clearTimeout(self.timeout)
      self.hoverState = 'out'
      if (!self.options.delay || !self.options.delay.hide) return self.hide()
      self.timeout = setTimeout(function() {
         if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
   }
   Tooltip.prototype.show = function() {
      var e = $.Event('show.bs.' + this.type)
      if (this.hasContent() && this.enabled) {
         this.$element.trigger(e)
         var inDom = $.contains(document.documentElement, this.$element[0])
         if (e.isDefaultPrevented() || !inDom) return
         var that = this
         var $tip = this.tip()
         var tipId = this.getUID(this.type)
         this.setContent()
         $tip.attr('id', tipId)
         this.$element.attr('aria-describedby', tipId)
         if (this.options.animation) $tip.addClass('fade')
         var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement
         var autoToken = /\s?auto?\s?/i
         var autoPlace = autoToken.test(placement)
         if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
         $tip.detach().css({
            top: 0,
            left: 0,
            display: 'block'
         }).addClass(placement).data('bs.' + this.type, this)
         this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
         var pos = this.getPosition()
         var actualWidth = $tip[0].offsetWidth
         var actualHeight = $tip[0].offsetHeight
         if (autoPlace) {
            var orgPlacement = placement
            var $parent = this.$element.parent()
            var parentDim = this.getPosition($parent)
            placement = placement == 'bottom' && pos.top + pos.height + actualHeight - parentDim.scroll > parentDim.height ? 'top' : placement == 'top' && pos.top - parentDim.scroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < parentDim.left ? 'right' : placement
            $tip.removeClass(orgPlacement).addClass(placement)
         }
         var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
         this.applyPlacement(calculatedOffset, placement)
         var complete = function() {
            that.$element.trigger('shown.bs.' + that.type)
            that.hoverState = null
         }
         $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(150) : complete()
      }
   }
   Tooltip.prototype.applyPlacement = function(offset, placement) {
      var $tip = this.tip()
      var width = $tip[0].offsetWidth
      var height = $tip[0].offsetHeight
      var marginTop = parseInt($tip.css('margin-top'), 10)
      var marginLeft = parseInt($tip.css('margin-left'), 10)
      if (isNaN(marginTop)) marginTop = 0
      if (isNaN(marginLeft)) marginLeft = 0
      offset.top = offset.top + marginTop
      offset.left = offset.left + marginLeft
      $.offset.setOffset($tip[0], $.extend({
         using: function(props) {
            $tip.css({
               top: Math.round(props.top),
               left: Math.round(props.left)
            })
         }
      }, offset), 0)
      $tip.addClass('in')
      var actualWidth = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight
      if (placement == 'top' && actualHeight != height) {
         offset.top = offset.top + height - actualHeight
      }
      var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
      if (delta.left) offset.left += delta.left
      else offset.top += delta.top
      var arrowDelta = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
      var arrowPosition = delta.left ? 'left' : 'top'
      var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'
      $tip.offset(offset)
      this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
   }
   Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
      this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
   }
   Tooltip.prototype.setContent = function() {
      var $tip = this.tip()
      var title = this.getTitle()
      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
   }
   Tooltip.prototype.hide = function() {
      var that = this
      var $tip = this.tip()
      var e = $.Event('hide.bs.' + this.type)
      this.$element.removeAttr('aria-describedby')

      function complete() {
         if (that.hoverState != 'in') $tip.detach()
         that.$element.trigger('hidden.bs.' + that.type)
      }
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $tip.removeClass('in')
      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(150) : complete()
      this.hoverState = null
      return this
   }
   Tooltip.prototype.fixTitle = function() {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
         $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
   }
   Tooltip.prototype.hasContent = function() {
      return this.getTitle()
   }
   Tooltip.prototype.getPosition = function($element) {
      $element = $element || this.$element
      var el = $element[0]
      var isBody = el.tagName == 'BODY'
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
         scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
         width: isBody ? $(window).width() : $element.outerWidth(),
         height: isBody ? $(window).height() : $element.outerHeight()
      }, isBody ? {
         top: 0,
         left: 0
      } : $element.offset())
   }
   Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
      return placement == 'bottom' ? {
         top: pos.top + pos.height,
         left: pos.left + pos.width / 2 - actualWidth / 2
      } : placement == 'top' ? {
         top: pos.top - actualHeight,
         left: pos.left + pos.width / 2 - actualWidth / 2
      } : placement == 'left' ? {
         top: pos.top + pos.height / 2 - actualHeight / 2,
         left: pos.left - actualWidth
      } : {
         top: pos.top + pos.height / 2 - actualHeight / 2,
         left: pos.left + pos.width
      }
   }
   Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
      var delta = {
         top: 0,
         left: 0
      }
      if (!this.$viewport) return delta
      var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
      var viewportDimensions = this.getPosition(this.$viewport)
      if (/right|left/.test(placement)) {
         var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
         var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
         if (topEdgeOffset < viewportDimensions.top) {
            delta.top = viewportDimensions.top - topEdgeOffset
         } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
            delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
         }
      } else {
         var leftEdgeOffset = pos.left - viewportPadding
         var rightEdgeOffset = pos.left + viewportPadding + actualWidth
         if (leftEdgeOffset < viewportDimensions.left) {
            delta.left = viewportDimensions.left - leftEdgeOffset
         } else if (rightEdgeOffset > viewportDimensions.width) {
            delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
         }
      }
      return delta
   }
   Tooltip.prototype.getTitle = function() {
      var title
      var $e = this.$element
      var o = this.options
      title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
      return title
   }
   Tooltip.prototype.getUID = function(prefix) {
      do prefix += ~~(Math.random() * 1000000)
      while (document.getElementById(prefix))
      return prefix
   }
   Tooltip.prototype.tip = function() {
      return (this.$tip = this.$tip || $(this.options.template))
   }
   Tooltip.prototype.arrow = function() {
      return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
   }
   Tooltip.prototype.validate = function() {
      if (!this.$element[0].parentNode) {
         this.hide()
         this.$element = null
         this.options = null
      }
   }
   Tooltip.prototype.enable = function() {
      this.enabled = true
   }
   Tooltip.prototype.disable = function() {
      this.enabled = false
   }
   Tooltip.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled
   }
   Tooltip.prototype.toggle = function(e) {
      var self = this
      if (e) {
         self = $(e.currentTarget).data('bs.' + this.type)
         if (!self) {
            self = new this.constructor(e.currentTarget, this.getDelegateOptions())
            $(e.currentTarget).data('bs.' + this.type, self)
         }
      }
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
   }
   Tooltip.prototype.destroy = function() {
      clearTimeout(this.timeout)
      this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
   }

   function Plugin(option) {
      return this.each(function() {
         var $this = $(this)
         var data = $this.data('bs.tooltip')
         var options = typeof option == 'object' && option
         if (!data && option == 'destroy') return
         if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
         if (typeof option == 'string') data[option]()
      })
   }
   var old = $.fn.tooltip
   $.fn.tooltip = Plugin
   $.fn.tooltip.Constructor = Tooltip
   $.fn.tooltip.noConflict = function() {
      $.fn.tooltip = old
      return this
   }
   $('[data-toggle="tooltip"]').tooltip();
}(jQuery);;
(function($, window, undefined) {
   var $allDropdowns = $();
   $.fn.dropdownHover = function(options) {
      if ('ontouchstart' in document) return this;
      $allDropdowns = $allDropdowns.add(this.parent());
      return this.each(function() {
         var $this = $(this),
            $parent = $this.parent(),
            defaults = {
               delay: 0,
               instantlyCloseOthers: true
            },
            data = {
               delay: $(this).data('delay'),
               instantlyCloseOthers: $(this).data('close-others')
            },
            showEvent = 'show.bs.dropdown',
            hideEvent = 'hide.bs.dropdown',
            settings = $.extend(true, {}, defaults, options, data),
            timeout;
         $parent.hover(function(event) {
            if (!$parent.hasClass('open') && !$this.is(event.target)) {
               return true;
            }
            openDropdown(event);
         }, function() {
            timeout = window.setTimeout(function() {
               $parent.removeClass('open');
               $this.trigger(hideEvent);
            }, settings.delay);
         });
         $this.hover(function(event) {
            if (!$parent.hasClass('open') && !$parent.is(event.target)) {
               return true;
            }
            openDropdown(event);
         });
         $parent.find('.dropdown-submenu').each(function() {
            var $this = $(this);
            var subTimeout;
            $this.hover(function() {
               window.clearTimeout(subTimeout);
               $this.children('.dropdown-menu').show();
               $this.siblings().children('.dropdown-menu').hide();
            }, function() {
               var $submenu = $this.children('.dropdown-menu');
               subTimeout = window.setTimeout(function() {
                  $submenu.hide();
               }, settings.delay);
            });
         });

         function openDropdown(event) {
            $allDropdowns.find(':focus').blur();
            if (settings.instantlyCloseOthers === true)
               $allDropdowns.removeClass('open');
            window.clearTimeout(timeout);
            $parent.addClass('open');
            $this.trigger(showEvent);
         }
      });
   };
   $(document).ready(function() {
      $('[data-hover="dropdown"]').dropdownHover();
   });
})(jQuery, this); + function($) {
   'use strict';
   var backdrop = '.dropdown-backdrop'
   var toggle = '[data-toggle="dropdown"]'
   var Dropdown = function(element) {
      $(element).on('click.bs.dropdown', this.toggle)
   }
   Dropdown.VERSION = '3.2.0'
   Dropdown.prototype.toggle = function(e) {
      var $this = $(this)
      if ($this.is('.disabled, :disabled')) return
      var $parent = getParent($this)
      var isActive = $parent.hasClass('open')
      clearMenus()
      if (!isActive) {
         if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
            $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
         }
         var relatedTarget = {
            relatedTarget: this
         }
         $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
         if (e.isDefaultPrevented()) return
         $this.trigger('focus')
         $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget)
      }
      return false
   }
   Dropdown.prototype.keydown = function(e) {
      if (!/(38|40|27)/.test(e.keyCode)) return
      var $this = $(this)
      e.preventDefault()
      e.stopPropagation()
      if ($this.is('.disabled, :disabled')) return
      var $parent = getParent($this)
      var isActive = $parent.hasClass('open')
      if (!isActive || (isActive && e.keyCode == 27)) {
         if (e.which == 27) $parent.find(toggle).trigger('focus')
         return $this.trigger('click')
      }
      var desc = ' li:not(.divider):visible a'
      var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)
      if (!$items.length) return
      var index = $items.index($items.filter(':focus'))
      if (e.keyCode == 38 && index > 0) index--
      if (e.keyCode == 40 && index < $items.length - 1) index++
      if (!~index) index = 0
      $items.eq(index).trigger('focus')
   }

   function clearMenus(e) {
      if (e && e.which === 3) return
      $(backdrop).remove()
      $(toggle).each(function() {
         var $parent = getParent($(this))
         var relatedTarget = {
            relatedTarget: this
         }
         if (!$parent.hasClass('open')) return
         $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
         if (e.isDefaultPrevented()) return
         $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
      })
   }

   function getParent($this) {
      var selector = $this.attr('data-target')
      if (!selector) {
         selector = $this.attr('href')
         selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
      }
      var $parent = selector && $(selector)
      return $parent && $parent.length ? $parent : $this.parent()
   }

   function Plugin(option) {
      return this.each(function() {
         var $this = $(this)
         var data = $this.data('bs.dropdown')
         if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
         if (typeof option == 'string') data[option].call($this)
      })
   }
   var old = $.fn.dropdown
   $.fn.dropdown = Plugin
   $.fn.dropdown.Constructor = Dropdown
   $.fn.dropdown.noConflict = function() {
      $.fn.dropdown = old
      return this
   }
   $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
      e.stopPropagation()
   }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)
}(jQuery);
$(function() {
   $(".bootstrap-tooltip").tooltip();
   if ('ontouchstart' in document) {
      $('.dropdown-toggle').dropdown();
   } else {
      $('.dropdown-toggle').dropdownHover();
   }
});
$.extend(String, {
   interpret: function(value) {
      return value == null ? '' : String(value);
   }
});
$.extend(String.prototype, (function() {
   function gsub(pattern, replacement) {
      var result = '',
         source = this,
         match;
      if (Object.prototype.toString.call(pattern) == "[object Array]") {
         pattern = RegExp.escape(pattern);
      }
      if (!(pattern.length || pattern.source)) {
         replacement = replacement('');
         return replacement + source.split('').join(replacement) + replacement;
      }
      while (source.length > 0) {
         if (match = source.match(pattern)) {
            result += source.slice(0, match.index);
            result += String.interpret(replacement(match));
            source = source.slice(match.index + match[0].length);
         } else {
            result += source, source = '';
         }
      }
      return result;
   };

   function toPlainText() {
      var source = this;
      source = source.replace(/<style[^>]*>([\S\s]*?)<\/style>/igm, '').replace(/<script[^>]*>([\S\s]*?)<\/script>/igm, '');
      source = source.replace(/<br[^\/]*?\/?>(?![\r\n])/ig, '\n');
      source = source.replace(/<a.*?href='(?!#)([^']+)'[^>]*>(.+?)<\/a>/ig, '$2 [{$1}]').replace(/<a.*?href="(?!#)([^"]+)"[^>]*>(.+?)<\/a>/ig, '$2 [{$1}]');
      source = source.replace(/<![^>]*>/g, '').replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
      source = source.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
      source = source.gsub(/&#(\d+);/, function(match) {
         return String.fromCharCode(match[1]);
      });
      source = source.replace(/\[{(.+?)}\]/g, '< $1 >');
      source = source.replace(/^[\xA0\x20\t]+/gm, '');
      source = source.replace(/[\xA0\x20\t]*$/gm, '');
      source = source.replace(/(\r?\n){3,}/gm, '\n\n');
      source = source.replace(/\{\{components\.html/, '{{components.text');
      source = source.replace(/^\s+/, '').replace(/\s+$/, '');
      return source;
   };

   function unformatNumber() {
      return parseInt((this + '').replace(/,/g, ''));
   };

   function stripJs() {
      return this.replace(/<script\b[^>]*>([\s\S]*?)<\/script\s*>/ig, "");
   };
   return {
      gsub: gsub,
      toPlainText: toPlainText,
      unformatNumber: unformatNumber,
      stripJs: stripJs
   };
})());
$.extend(Number.prototype, (function() {
   function format() {
      var number = (this + '').split('').reverse(),
         ret = '';
      for (var i = 0, length = number.length; i < length; i++) {
         if ((i % 3) === 0 && i !== 0) {
            ret = ',' + ret;
         }
         ret = number[i] + ret;
      }
      return ret;
   };
   return {
      format: format
   };
})());
(function($) {
   var hashing = {
      md5: function(serializedArray) {
         if (typeof md5 !== 'function') {
            return false;
         }
         hashing.sortSerializedArray(serializedArray);
         return md5(hashing.makeStandardString(serializedArray));
      },
      sortSerializedArray: function(serializedArray) {
         serializedArray.sort(function(a, b) {
            if (a.name > b.name) {
               return 1;
            }
            if (a.name < b.name) {
               return -1;
            }
            return 0;
         });
      },
      makeStandardString: function(serializedArray) {
         return hashing.urlEncode(hashing.flattenArray(serializedArray));
      },
      flattenArray: function(serializedArray) {
         var flattened = '';
         for (var i = 0, length = serializedArray.length; i < length; i++) {
            flattened += serializedArray[i].value;
         }
         return flattened;
      },
      urlEncode: function(string) {
         return encodeURIComponent(string).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
      }
   };
   var syncEditors = function() {
      if (typeof CKEDITOR !== 'undefined') {
         $.each(CKEDITOR.instances, function(index, editor) {
            editor.updateElement();
         });
      }
   };
   var _serializeArray = $.fn.serializeArray;
   $.fn.serialize = function(additionalValues) {
      return jQuery.param(this.serializeArray(additionalValues));
   }
   $.fn.serializeArray = function(additionalValues) {
      additionalValues = additionalValues || [];
      syncEditors();
      var serialized = _serializeArray.apply(this, arguments),
         $unchecked = $(this).find('input:checkbox:not(:checked):not(.ignore):not(.confirmed)');
      $unchecked.each(function() {
         var $this = $(this),
            name = $this.attr('name');
         if (name !== undefined) {
            serialized.push({
               name: name,
               value: $this.attr('alt') || 'no'
            });
         }
      });
      $.merge(serialized, additionalValues);
      serialized.push({
         name: 'md5',
         value: hashing.md5(serialized)
      });
      return serialized;
   };
   $.fn.serializeObject = function() {
      var object = {},
         array = this.serializeArray();
      $.each(array, function() {
         if (object[this.name] !== undefined) {
            if (!object[this.name].push) {
               object[this.name] = [object[this.name]];
            }
            object[this.name].push(this.value || '');
         } else {
            object[this.name] = this.value || '';
         }
      });
      return object;
   };
   $.fn.disableTextSelect = function() {
      return this.each(function() {
         if ($.browser.mozilla) {
            $(this).css('MozUserSelect', 'none');
         } else if ($.browser.msie) {
            $(this).bind('selectstart', function() {
               return false;
            });
         } else {
            $(this).mousedown(function() {
               return false;
            });
         }
      });
   };
   $.fn.insertAtCaret = function(text) {
      return this.each(function() {
         if (document.selection !== undefined) {
            this.focus();
            document.selection.createRange().text = text;
            this.focus();
         } else if (this.selectionStart !== undefined || this.selectionStart == '0') {
            var start = this.selectionStart,
               end = this.selectionEnd,
               scroll = this.scrollTop,
               value = this.value;
            this.value = value.substring(0, start) + text + value.substring(end);
            start += text.length;
            this.focus();
            this.selectionStart = start;
            this.selectionEnd = start;
            this.scrollTop = scroll;
         } else {
            this.value += text;
            this.focus();
            return;
         }
      });
   };
   $.fn.writeIframe = function(html) {
      return this.each(function() {
         $(this).data('write', html).contents()[0].location.href = "javascript: (" +
            "function() {" +
            "document.open();" +
            "document.write(this.parent.jQuery(this.frameElement).data('write'));" +
            "document.close();" +
            "}" +
            ")();";
      });
   };
   $.fn.disableSelection = function() {
      return this.each(function() {
         if (!jQuery.browser) {
            $(this).keydown(function() {
               return false;
            });
         } else if ($.browser.mozilla) {
            $(this).attr('autocomplete', 'off');
            $(this).keydown(function() {
               return false;
            });
            $(this).css('MozUserModify', 'read-only');
         } else if ($.browser.webkit) {
            $(this).attr('autocomplete', 'off');
            $(this).css('webkitUserModify', 'read');
            $(this).keydown(function() {
               return false;
            });
         } else if ($.browser.msie) {
            $(this).keydown(function() {
               return false;
            });
         } else {
            $(this).keydown(function() {
               return false;
            });
         }
      });
   };
   $.fn.enableSelection = function() {
      return this.each(function() {
         if (!jQuery.browser) {
            $(this).unbind('keydown');
         } else if ($.browser.mozilla) {
            $(this).css('MozUserModify', 'read-write');
            $(this).unbind('keydown');
         } else if ($.browser.webkit) {
            $(this).css('webkitUserModify', 'read-write');
            $(this).css('webkitUserSelect', 'text');
            $(this).unbind('keydown');
         } else if ($.browser.msie) {
            $(this).unbind('keydown');
         } else {
            $(this).unbind('keydown');
         }
      });
   };
})(jQuery);
(function($) {
   $.fn.addError = function(error) {
      return this.each(function() {
         var $this = $(this),
            $parent = $this.parent();
         if ($parent.is('.ui-error') === true) {
            $this.removeError();
         }
         if ($this.is('td') === true) {
            var $td = $this.add($this.siblings()),
               colspan = $td.length;
            if ($parent.hasClass('last-child') === true) {
               $td.css({
                  borderBottom: 'none'
               });
               var trclass = 'ui-error-message last-child';
               $parent.removeClass('last-child');
            } else {
               var trclass = 'ui-error-message';
            }
            var tdclass = (($td.first().hasClass('first-child') === true) ? 'first-child ' : '') + (($td.last().hasClass('last-child') === true) ? 'last-child' : '');
            $parent.addClass('ui-error').after($('<tr />', {
               'class': trclass,
               html: $('<td />', {
                  colspan: colspan,
                  'class': tdclass,
                  css: {
                     borderTop: 'none'
                  },
                  html: error
               })
            }));
         } else {
            $this.wrap($('<span />', {
               'class': 'ui-error',
               'width': $this.outerWidth(true)
            })).after($('<span/>', {
               'class': 'ui-error-message',
               html: error
            }));
         }
      });
   };
   $.fn.addErrors = function(errors) {
      return this.each(function() {
         var $this = $(this);
         $.each(errors, function(field, faults) {
            var message = '';
            if (faults.messages.isEmpty !== undefined) {
               message = faults.messages.isEmpty;
            } else {
               $.each(faults.messages, function(type, error) {
                  if (message !== '') {
                     message += '<br />\n';
                  }
                  message += error;
               });
            }
            $this.find('#' + field).addError(message);
         });
      });
   };
   $.fn.removeError = function() {
      return this.each(function() {
         var $this = $(this),
            $parent = $this.parent();
         if ($parent.hasClass('ui-error') === false) {
            return;
         }
         if ($this.is('td') === true) {
            var lastchild = $parent.next().remove().hasClass('last-child');
            $parent.addClass((lastchild === true) ? 'last-child' : '').removeClass('ui-error');
         } else {
            $this.next('span').remove().end().unwrap();
         }
      });
   };
   $.fn.removeErrors = function() {
      return this.each(function() {
         $(this).find('.ui-error *:first-child').removeError();
      });
   };
   $.fn.selectable = function() {
      return this.each(function() {
         var $this = $(this);
         if ($this.is('table') === false) {
            $.error('The element must be a table');
         }
         if ($this.hasClass('option-group') === true) {
            return;
         }
         $('thead input:checkbox', $this).click(function(event) {
            var checked = $(this).is(':checked');
            $this.find('tbody input:checkbox').each(function() {
               var $checkbox = $(this);
               if (checked === true) {
                  $checkbox.closest('tr').addClass('selected');
               } else {
                  $checkbox.closest('tr').removeClass('selected');
               }
               $checkbox.attr('checked', checked);
            });
         });
         $('tbody tr:not(.app-selectable-unselectable)', $this).live('click', function(event) {
            if ($(event.target).is('label') === true) {
               return;
            }
            if ($(event.target).is('a') === true) {
               return;
            }
            var $target = $(event.currentTarget),
               $checkbox = $target.find('input:checkbox');
            $target.toggleClass('selected');
            if ($(event.target).is($checkbox) === false && $checkbox.is(':disabled') === false) {
               $checkbox.attr('checked', !$checkbox.is(':checked'));
            }
         });
      });
   };
   $.fn.optionGroupSelectable = function() {
      return this.each(function() {
         var $this = $(this);
         if ($this.is('table') === false) {
            $.error('The element must be a table');
         }
         if ($this.hasClass('option-group') === false) {
            $.error('The element must be an option group');
         }
         $('tbody tr', $this).live('click', function(event) {
            if ($(event.target).is('label') === true) {
               return;
            }
            if ($(event.target).is('a') === true) {
               return;
            }
            var $target = $(event.currentTarget),
               $radiobox = $target.find('input:radio');
            $rows = $this.find('tr');
            $.each($rows, function() {
               if ($(this).hasClass('selected') === true) {
                  $(this).removeClass('selected');
               }
            });
            $target.addClass('selected');
            if ($(event.target).is($radiobox) === false && $radiobox.is(':disabled') === false) {
               $radiobox.attr('checked', true);
            }
         });
      });
   };
   $.fn.expandable = function() {
      return this.each(function() {
         var $this = $(this),
            $operations = $this.find('ul.operations'),
            $expandable = $this.next('.ui-expandable-container'),
            $container = $('<div />', {
               'class': 'ui-expandable-container',
               'css': {
                  display: $expandable.css('display')
               }
            });
         $this.after($container.append($expandable));
         $expandable.css({
            display: ''
         }).removeClass('ui-expandable-container');
         $this.click(function(event) {
            var $target = $(event.target),
               $checkbox = $this.find('input:checkbox');
            if ($target.is('label') === true) {
               return;
            }
            if ($target.is('ul.operations li a') === true) {
               return;
            }
            if ($target.is($checkbox) === false) {
               $checkbox.attr('checked', !$checkbox.is(':checked'));
            }
            $operations.fadeToggle(50);
            $container.slideToggle(75);
         });
      });
   };
})(jQuery);
(function($) {
   var methods = {
      init: function() {},
      url: function() {
         return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test('' + this);
      },
      urlWithPersonalisation: function() {
         return /(https?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*\{{2}[a-zA-Z0-9\_]*\}{2})/i.test('' + this);
      },
      notEmpty: function() {
         return !!$.trim("" + this);
      }
   };
   var router = function(method) {
      if (methods[method]) {
         return methods[method].apply((this.val) ? this.val() : this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
         return methods.init.apply(this, arguments);
      } else {
         $.error('Method ' + method + ' does not exist');
      }
   };
   $.fn.validate = router;
   $.extend(String.prototype, {
      validate: router
   });
})(jQuery);
(function($) {
   var Uploader = $.klass({
      options: {
         runtimes: 'html5,flash,silverlight',
         multiple: true,
         maxFileSize: '3mb',
         uploadButton: null,
         multipartParams: {},
         namespace: 'default'
      },
      elements: {},
      uploader: null,
      initialize: function($holder, options) {
         this.elements['$holder'] = $holder;
         options = options || {};
         options = $.extend({}, this.options, options);
         if (options.url === undefined) {
            $.error('Upload URL not set');
         }
         var prefix = this._generatePrefix();
         options.flashSwfUrl = URL + '/js/vendors/plupload/js/plupload.flash.swf';
         options.silverlightXapUrl = URL + '/js/vendors/plupload/js/plupload.silverlight.xap';
         options.container = prefix + '-container';
         options.browseButton = prefix + '-browse';
         this._init($holder, options);
         if (options.multiple === false) {
            this._initSingle(options, prefix);
         } else {
            this._initMultiple(options);
         }
         $holder.html(this.elements['$container']);
         if ($holder.data('dialog')) {
            if ($holder.dialog('isOpen') === false) {
               $holder.bind('dialogopen.' + options.namespace, $.proxy(function() {
                  if (options.multiple === false) {
                     $('#' + prefix + '-file').blur();
                  }
                  this.uploader.init();
                  if ($.browser.webkit === true || ($.browser.mozilla === true && $.browser.version >= 22)) {
                     $holder.find('div.plupload').css('z-index', 9999);
                  }
               }, this));
            }
            $holder.bind('dialogclose.' + options.namespace, function() {
               $(this).uploader('destroy', options.namespace);
            });
         } else {
            this.uploader.init();
         }
         if ($.browser.webkit === true || ($.browser.mozilla === true && $.browser.version >= 22)) {
            this.uploader.bind('PostInit', function(uploader) {
               $('#' + uploader.settings.container + ' > div').click(function() {
                  $(this).css('z-index', 9999);
               });
            });
         }
      },
      _init: function($holder, options) {
         this.elements['$container'] = $('<div />', {
            id: options.container
         });
         var btn_class = options.btn_class || 'ui-button'
         this.elements['$browse'] = $('<button />', {
            id: options.browseButton,
            'class': btn_class
         }).append($('<span />', {
            'class': 'ui-button-text',
            text: $.translate('Browse')
         }));
         this.uploader = new plupload.Uploader({
            url: options.url,
            multipart_params: options.multipartParams,
            runtimes: options.runtimes,
            browse_button: options.browseButton,
            container: options.container,
            multi_selection: options.multiple,
            max_file_size: options.maxFileSize,
            flash_swf_url: options.flashSwfUrl,
            silverlight_xap_url: options.silverlightXapUrl,
            resize: options.resize
         });
         if (options.uploadButton) {
            this.setUpload($('#' + options.uploadButton));
         }
      },
      _initSingle: function(options, prefix) {
         var $file = $('<input />', {
            id: prefix + '-file',
            'class': 'ui-uploader-file',
            readonly: true,
            placeholder: $.translate('Select a file using the browse button')
         });
         var $progress = $('<span />', {
            id: prefix + '-progress',
            'class': 'ui-uploader-bar',
            html: '&nbsp;'
         });
         this.uploader.bind('FilesAdded', function(uploader, files) {
            uploader.splice();
            $file.val(files[0].name + ' (' + plupload.formatSize(files[0].size) + ')');
         });
         this.uploader.bind('FilesRemoved', function(uploader, files) {
            $file.removeError().val('');
            $progress.css('width', 0);
         });
         this.uploader.bind('BeforeUpload', function(uploader, file) {
            $file.addClass('loading');
         });
         this.uploader.bind('UploadProgress', function(uploader, file) {
            $progress.css('width', ($file.outerWidth() * file.percent / 100) + 'px');
         });
         var $holder = this.elements['$holder'];
         this.uploader.bind('FileUploaded', function(uploader, files, response) {
            response = $.parseJSON(response.response);
            $file.removeClass('loading');
            if (response.status !== 'success') {
               $file.addError(response.alert);
               $holder.trigger('uploadererror.' + options.namespace, [response]);
            } else {
               if ($holder.data('dialog')) {
                  $holder.dialog('close');
               }
               $holder.trigger('uploadercomplete.' + options.namespace, [response]);
            }
         });
         var self = this;
         this.uploader.bind('Error', function(uploader, error) {
            if (error.code === -600) {
               $file.addError($.translate('The file may not be larger than') + ' ' +
                  plupload.formatSize(parseInt(options.maxFileSize) * 1024 * 1024));
            } else if (error.code === -601) {
               $file.addError($.translate('Invalid file type. Supported files are ' + options.filters[0].extensions));
            } else {
               $file.addError($.translate(error.message));
            }
         });
         this.elements['$container'].addClass('ui-single-uploader').append($progress).append($file).append(this.elements['$browse']);
      },
      _initMultiple: function(options) {
         var self = this;
         var $add = $('<tr />', {
            id: 'app-add-files',
            'class': 'even last-child'
         }).append($('<td />', {
            colspan: 3,
            'class': 'first-child stretch centered last-child',
            text: $.translate('Add files using the browse button')
         }));
         var $thead = $('<thead />').append($('<tr />').append('<td>' + $.translate('Name') + '</td>').append('<td />').append('<td />'));
         var $tbody = $('<tbody />').append($add);
         var $files = $('<table />', {
            'class': 'app-browse list',
            cellspacing: 0,
            cellpadding: 0
         }).append($thead).append($tbody);
         var refreshListing = function() {
            ($tbody.find('tr:not(#app-add-files)').length > 0) ? $add.hide(): $add.show();
            var even = $add.is(':visible');
            $tbody.children('tr').each(function() {
               $(this).removeClass('last-child').removeClass('even').addClass((even === true) ? 'even' : '');
               even = !even;
            }).last().addClass('last-child');
            self.uploader.refresh();
         };
         this.uploader.bind('FilesAdded', function(uploader, files) {
            $.each(files, function(index, file) {
               $('<tr />', {
                  id: file.id
               }).append($('<td />', {
                  'class': 'first-child stretch',
                  html: file.name + ' (' + plupload.formatSize(file.size) + ')'
               })).append($('<td />', {
                  'class': 'ui-uploader-progress'
               }).append($('<span />', {
                  'class': 'ui-uploader-bar',
                  html: '&nbsp;'
               })).append($('<span />', {
                  'class': 'ui-uploader-percent'
               }).hide())).append($('<td />', {
                  'class': 'last-child'
               }).append($('<a />', {
                  href: '#'
               }).append($('<img />', {
                  src: URL + '/images/icons/bin.png',
                  title: $.translate('Delete'),
                  alt: $.translate('Delete'),
                  'class': 'ui-uploader-delete'
               })).click(function(event) {
                  event.preventDefault();
                  $(this).closest('tr').next('tr.ui-error-message').remove().end().remove();
                  uploader.removeFile(file);
                  refreshListing();
               }))).appendTo($tbody);
            });
         });
         this.uploader.bind('QueueChanged', function(uploader) {
            refreshListing();
         });
         this.uploader.bind('BeforeUpload', function(uploader, file) {
            $('#' + file.id).find('a').unbind('click').end().find('.ui-uploader-percent').text('0%').show();
         });
         this.uploader.bind('UploadProgress', function(uploader, file) {
            $('#' + file.id).find('.ui-uploader-bar').css('width', file.percent + 'px').end().find('.ui-uploader-percent').text(file.percent + '%');
         });
         var errors = false;
         this.uploader.bind('FileUploaded', function(uploader, file, response) {
            response = $.parseJSON(response.response);
            if (response.status !== 'success') {
               $('#' + file.id + ' td.first-child').addError(response.alert);
               $holder.trigger('uploadererror.' + options.namespace, [response]);
               uploader.refresh();
               errors = true;
            } else {
               $holder.trigger('uploaderuploaded.' + options.namespace, [response]);
            }
         });
         var $holder = this.elements['$holder'];
         this.uploader.bind('UploadComplete', function(uploader, files) {
            if (errors === false && $holder.data('dialog')) {
               $holder.dialog('close');
            }
            $holder.trigger('uploadercomplete.' + options.namespace);
            errors = false;
         });
         this.uploader.bind('Error', function(uploader, error) {
            if (error.code === -600) {
               $('#' + error.file.id + ' td.first-child').addError($.translate('The file may not be larger than') + ' ' +
                  plupload.formatSize(parseInt(self.options.maxFileSize) * 1024 * 1024));
               refreshListing();
            }
         });
         this.elements['$container'].addClass('ui-multiple-uploader').append($files).append(this.elements['$browse']);
      },
      destroy: function(namespace) {
         this.elements['$upload'].unbind('click');
         this.elements['$holder'].unbind('dialogopen.' + namespace).unbind('dialogclose.' + namespace);
         this.uploader.destroy();
      },
      refresh: function() {
         var uploader = this.uploader;
         uploader.splice();
         uploader.refresh();
      },
      setUpload: function($upload) {
         $upload.click($.proxy(function(event) {
            event.preventDefault();
            if (this.uploader.total.queued === 0) {
               return;
            }
            this.uploader.start();
         }, this));
         this.elements['$upload'] = $upload;
      },
      setMultipartParams: function($params) {
         this.uploader.settings.multipart_params = $params;
      },
      _generatePrefix: function() {
         var prefix;
         do {
            prefix = 'up-' + (Math.floor((Math.random() * 10000)) + 1);
         }
         while ($('#' + prefix + '-container').length > 0);
         return prefix;
      }
   });
   var methods = {
      init: function(options) {
         return this.each(function() {
            var $this = $(this);
            if (!$this.data('uploader')) {
               $this.data('uploader', new Uploader($this, options));
            }
         });
      },
      destroy: function(namespace) {
         return this.each(function() {
            var $this = $(this),
               uploader = $this.data('uploader');
            if (uploader) {
               uploader.destroy(namespace);
            }
            $(window).unbind('.uploader');
            $this.removeData('uploader').empty();
         });
      },
      get: function() {
         return this.data('uploader').uploader;
      },
      setUpload: function($button) {
         return this.each(function() {
            methods._initialized($(this)).setUpload($button);
         });
      },
      setMultipartParams: function($params) {
         return this.each(function() {
            methods._initialized($(this)).setMultipartParams($params);
         });
      },
      _initialized: function($element) {
         var uploader = $element.data('uploader');
         if (!uploader) {
            $.error('Uploader not initialized');
         }
         return uploader;
      }
   };
   $.fn.uploader = function(method) {
      if (methods[method]) {
         return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
         return methods.init.apply(this, arguments);
      } else {
         $.error('Method ' + method + ' does not exist on jQuery.uploader');
      }
   };
})(jQuery);
var Menu = $.klass({
   settings: {
      menu: '#menu'
   },
   $menu: null,
   $initial: null,
   $current: null,
   locked: false,
   initialize: function(settings) {
      $.extend(this.settings, settings);
      this.$menu = $(this.settings.menu);
      if (this.$menu.is('ul') === false) {
         throw 'The element must be an unordered list';
      }
      var $items = this.$menu.children('li');
      $items.each($.proxy(this.process, this));
      $(document).click($.proxy(this.close, this));
   },
   process: function(index, element) {
      var $element = $(element),
         $link = $element.children('a');
      if ($link.hasClass('selected') === true) {
         this.$initial = $link;
      }
      var $submenu = $element.children('ul');
      if ($submenu.length === 0) {
         return;
      }
      var left = $element.offset().left,
         right = left + $submenu.width(),
         submenuHeight = $submenu.height(),
         max = this.$menu.offset().left + this.$menu.width();
      if (right > max) {
         $submenu.css({
            left: ((left + $element.width()) - right) + 'px'
         });
      }
      if (this.$menu.parent().hasClass('bottom-menu')) {
         $submenu.css({
            top: '-' + submenuHeight + 'px',
            left: '-' + (($element.width() + $element.width() - 25)) + 'px'
         });
      }
      $link.click({
         submenu: $submenu
      }, $.proxy(this.toggle, this));
   },
   toggle: function(event) {
      event.preventDefault();
      if (this.locked === true) {
         return;
      }
      this.locked = true;
      var $submenu = event.data.submenu;
      var show = ($submenu != this.$current) ? true : false;
      if (this.$current !== null) {
         this._hide(this.$current, show);
      }
      if (show === true) {
         this._show($submenu);
      }
   },
   close: function(event) {
      if (this.$current === null || $(event.target).closest('#menu>li>a').length !== 0) {
         return;
      }
      this.locked = true;
      this._hide(this.$current);
   },
   _show: function($submenu) {
      if (this.$current === null && this.$initial !== null) {
         this.$initial.removeClass('selected');
      }
      $submenu.prev('a').addClass('selected');
      $submenu.css('opacity', 0).slideDown(250).animate({
         opacity: 1
      }, {
         queue: false,
         duration: 250,
         complete: $.proxy(function() {
            this.$current = $submenu;
            this._unlock();
         }, this)
      });
   },
   _hide: function($submenu, show) {
      show = show || false;
      $submenu.prev('a').removeClass('selected');
      if (show === false && this.$initial !== null) {
         this.$initial.addClass('selected');
         this.$current = null;
      }
      $submenu.css('opacity', 1).slideUp(250).animate({
         opacity: 0
      }, {
         queue: false,
         duration: 250,
         complete: $.proxy(function() {
            if (show === false) {
               this._unlock();
            }
         }, this)
      });
   },
   _unlock: function() {
      this.locked = false;
   }
});
var Dialog = $.klass({
   $dialog: null,
   defaults: {
      autoOpen: false,
      modal: true,
      hide: 'fade',
      resizable: false,
      draggable: false,
      width: 500,
      height: 'auto',
      buttons: {},
      allowClose: true,
      emptyOnClose: true,
      closeOnEscape: true,
      translated: false
   },
   initialize: function() {
      this.$dialog = $('<div />', {
         id: 'dialog'
      }).dialog(this.defaults).bind('confirm', $.proxy(this.confirm, this)).bind('notice', $.proxy(this.notice, this)).bind('open', $.proxy(this.open, this)).bind('noticeConfirm', $.proxy(this.noticeConfirm, this)).bind('close', function() {
         $(this).dialog('close');
      }).bind('dialogopen', function() {
         var $this = $(this),
            $close = $this.prev('.ui-dialog-titlebar').find('.ui-dialog-titlebar-close');
         if ($this.dialog('option', 'allowClose') === false) {
            $this.dialog('option', 'closeOnEscape', false);
            $close.hide();
         } else {
            $close.show();
         }
      }).bind('dialogclose', function() {
         var $this = $(this);
         if ($this.dialog('option', 'emptyOnClose') === true) {
            $(this).empty();
         }
      });
   },
   confirm: function(event, data) {
      data = data || {};
      var buttons = {};
      buttons[$.translate('Yes')] = data.action || this.close;
      buttons[$.translate('No')] = this.close;
      this.$dialog.html($('<div />', {
         'class': 'ui-dialog-textonly'
      }).text($.translate(data.content || 'Are you sure?'))).trigger('open', {
         options: $.extend({
            title: (data.title || 'Confirm').translate(),
            buttons: buttons
         }, data.options || {})
      });
   },
   notice: function(event, alert) {
      var buttons = {};
      buttons[$.translate('Close')] = this.close;
      this.$dialog.html($('<div />', {
         'class': 'ui-dialog-textonly'
      }).text(alert.translate())).trigger('open', {
         options: {
            title: $('<div />', {
               'class': 'ui-dialog-title-notice'
            }).text($.translate('Notice')),
            buttons: buttons
         }
      });
   },
   noticeConfirm: function(event, data) {
      data = data || {};
      title_text = data.options.title || ('Notice').translate()
      data.options.title = $('<div />', {
         'class': 'ev-dialog-notice'
      }).append('<span class="seve-icon-alert-3 text-warning icon-s-medium"></span>').append($.translate(title_text))
      this._show(data.options);
   },
   open: function(event, data) {
      data = data || {};
      var options = $.extend({
         title: data.title || ('Dialog').translate()
      }, data.options || {});
      if (options.translated !== true && options.title.translate) {
         options.title = options.title.translate()
      }
      this._show(options);
   },
   _show: function(options) {
      options = $.extend({
         title: $.translate('Dialog')
      }, this.defaults, options);
      options.title = $('<div />').html(options.title).html();
      this.$dialog.dialog('option', options).dialog('open');
   },
   close: function(event) {
      $(this).dialog('close');
   }
});
var Browse = $.klass({
   settings: {
      component: 'item',
      url_load_browse: window.location.href + '/get/browse',
      url_load_view: window.location.href + '/get/view',
      view_area: '#content-right'
   },
   $container: null,
   initialize: function($browse, settings) {
      $.extend(this.settings, settings);
      var container = $browse.parent()[0];
      $('table.app-browse input:checkbox.app-select-all', container).live('click', $.proxy(this.selectAll, this));
      $('table.app-browse').selectable();
      $('table.app-browse a.app-view', container).live('click', $.proxy(this.view, this));
      $('table.app-browse', container).live('reload', $.proxy(this.reload, this));
      $('#item-browse').find('tbody tr:last-child').addClass('last-child');
      this.$container = $(container);
   },
   selectAll: function(event) {
      var $checkbox = $(event.target);
      this.$container.find('table.app-browse input:checkbox:not(.select-all)').each(function() {
         $(this).attr('checked', $checkbox.attr('checked'));
      });
   },
   select: function(event) {
      if ($(event.target).is(':checkbox') === true) {
         return;
      }
      var $input = $(event.currentTarget).find('input:checkbox');
      $input.attr('checked', ($input.is(':checked') === false));
   },
   view: function(event) {
      var url = $(event.target).closest('tr').find('a.app-view').attr('href');
      $.ajax({
         url: url,
         success: $.proxy(function(data) {
            try {
               var response = $.parseJSON(data);
               if (response.status === 'error') {
                  $.displayErrorAlert(response)
               }
            } catch (err) {
               $(this.settings.view_area).html(data);
            }
            $('form' + this.settings.form + ' input').filter(':first').focus();
         }, this)
      });
      return false;
   },
   reload: function() {
      var pagination = null,
         url = null;
      if ((pagination = this.$container.data('pagination')) === undefined) {
         url = this.settings.url_load_browse;
      } else {
         url = this.settings.url_load_browse + '/' + pagination.current;
      }
      this.$container.load(url, function() {
         $('table.app-browse').selectable();
      });
   }
});
var Operations = $.klass({
   settings: {
      item_name: 'item',
      item_identifier: 'identifier',
      url_load_add: window.location.href + '/get/add',
      url_load_edit: window.location.href + '/get/edit',
      url_load_search: window.location.href + '/get/search',
      url_delete: window.location.href + '/op/delete',
      browse: '#item-browse',
      load_area: '#content-right',
      form: '#item-form',
      search: '#search-form'
   },
   $buttons: null,
   $load_area: null,
   initialize: function($buttons, settings) {
      $.extend(this.settings, settings);
      $('li.save a', $buttons).click($.proxy(this.save, this));
      $('li.add a', $buttons).click($.proxy(this.loadAdd, this));
      $('li.edit a', $buttons).click($.proxy(this.loadEdit, this));
      $('li.delete a', $buttons).click($.proxy(this.confirmDelete, this));
      $('li.close a', $buttons).click($.proxy(this.close, this));
      $('li.search a', $buttons).click($.proxy(this.loadSearch, this));
      this.$buttons = $buttons;
      this.$load_area = $(this.settings.load_area);
   },
   loadAdd: function(event) {
      this.loadRight(this.settings.url_load_add);
   },
   loadEdit: function(event) {
      try {
         var id = this.getChecked();
      } catch (error) {
         $('#alert').trigger('warning', {
            message: error
         });
         return;
      }
      this.loadRight(this.settings.url_load_edit + '/' + id);
   },
   loadSearch: function(event) {
      var params = '';
      $.ajax({
         url: this.settings.url_load_search,
         data: (params),
         success: $.proxy(function(data) {
            try {
               var response = $.parseJSON(data);
               if (response.status == 'error') {
                  $.displayErrorAlert(response.error)
               }
            } catch (err) {
               this.$load_area.html(data);
               $('li.form-search a').click($.proxy(this.search, this));
               $('li.cancel-search a').click($.proxy(this.reloadBrowse, this));
               $('#search-input').keyup($.proxy(function(event) {
                  if (event.keyCode == '13') {
                     event.preventDefault();
                     this.search(event);
                  }
               }, this));
               $('#content').keyup($.proxy(function(event) {
                  if (event.keyCode == '27') {
                     event.preventDefault();
                     this.reloadBrowse(event);
                  }
               }, this));
            }
            $('form' + this.settings.form + ' input').filter(':first').focus();
         }, this)
      });
   },
   search: function(event) {
      $form = $(this.settings.search);
      var params = $form.serialize();
      $.ajax({
         url: $form.attr('action'),
         data: params,
         success: $.proxy(function(data) {
            $('#item-browse').parent().html(data);
            if ($('.search-results').length > 0) {
               jQuery.data($('.search-results').parent()[0], 'search-params', params);
            }
         }, this)
      });
   },
   loadRight: function(url, params) {
      $.ajax({
         url: url,
         data: (params),
         success: $.proxy(function(data) {
            this.loadRightSuccess(data);
         }, this)
      });
   },
   loadRightSuccess: function(data) {
      try {
         var response = $.parseJSON(data);
         if (response.status == 'error') {
            $.displayErrorAlert(response.error)
         }
      } catch (err) {
         this.$load_area.html(data);
         this.$buttons.find('.save').show();
      }
      $('form' + this.settings.form + ' input').filter(':first').focus();
   },
   save: function(event) {
      var $form = $(this.settings.form);
      $errors = $form.find('span.ui-error>input');
      $.each($errors, function(index, error) {
         $(error).removeError();
      });
      $.post($form.attr('action'), $form.serialize() + '&' + this.getAllUnchecked($form, true), $.proxy(this.saved, this));
   },
   saved: function(data) {
      var response = $.parseJSON(data);
      if (response.status === 'error') {
         this._showErrors(response);
      } else if (response.status === 'success') {
         this._showSuccess(response);
         this._updateForm(response);
         this.reloadBrowse();
      }
   },
   confirmDelete: function(event) {
      try {
         this.getAllChecked($(this.settings.browse));
      } catch (error) {
         $('#alert').trigger('warning', {
            message: error
         });
         return;
      }
      $('#dialog').trigger('confirm', {
         title: 'Confirmation',
         content: 'The ' + this.settings.item_name + 's will be permanently deleted. Are you sure?',
         action: $.proxy(this.deleteItems, this)
      });
   },
   deleteItems: function(event) {
      $('#dialog').trigger('close');
      $.post(this.settings.url_delete, $.param(this.getAllChecked($(this.settings.browse))), $.proxy(this.deleted, this));
   },
   deleted: function(data) {
      var response = $.parseJSON(data);
      if (response.status === 'error') {
         this._showErrors(response);
      } else if (response.status === 'success') {
         this._showSuccess(response);
         this.reloadBrowse();
         if (this.$load_area.length > 0) {
            this.$load_area.html('');
         }
      }
   },
   close: function(event) {
      if (this.$load_area.is(':empty') === true) {
         window.location = URL;
      } else {
         this.$load_area.html('<div id="infodiv">' +
            '<img id="infoimage" src="' + URL + '/images/layout/transparent.gif" alt="info." height="293" width="400" />' +
            '<p class="infotext">' + $.translate('Click on the left panel to view details') + '</p>' +
            '</div>');
         this.$buttons.find('.save').hide();
      }
   },
   reloadBrowse: function(event) {
      if (event != undefined) {
         $cancel_button = $(event.currentTarget).closest('li');
         if ($cancel_button.hasClass('cancel-search')) {
            $('#search-input').val('');
         }
      }
      $(this.settings.browse).trigger('reload');
   },
   getChecked: function(settings) {
      var checked = this.getAllChecked($(this.settings.browse));
      if (checked.length > 1) {
         throw 'You have selected more than one ' + this.settings.item_name;
      }
      return checked.val();
   },
   getAllChecked: function($area) {
      var checked = $area.find('input:checked:not(.select-all)');
      if (checked.length === 0) {
         var n = ($.inArray(this.settings.item_name.charAt(0).toLowerCase(), ['a', 'e', 'i', 'o']) !== -1) ? 'n' : '';
         throw 'You have not selected a' + n + ' ' + this.settings.item_name;
      }
      return checked;
   },
   getAllUnchecked: function($area, serialize) {
      serialize = serialize || false;
      var unchecked = $area.find('input:checkbox:not(:checked):not(.ignore):not(.confirmed)');
      if (serialize === true) {
         var $this = null,
            param = {};
         unchecked.each(function() {
            $this = $(this);
            param[$this.attr('name')] = $this.attr('alt') || 'no';
         });
         return $.param(param);
      }
      return unchecked;
   },
   _updateForm: function(response) {
      var $form = $(this.settings.form),
         $input = $('#' + this.settings.item_identifier);
      $form.attr('action', $form.attr('action').replace(/\/add$/, '/edit'));
      if ($input.length === 0) {
         $input = $('<input type="hidden" name="' + this.settings.item_identifier +
            '" id="' + this.settings.item_identifier + '" />').prependTo($form);
      }
      $input.val(response[this.settings.item_identifier]);
   },
   _showSuccess: function(response) {
      $('#alert').trigger('complete', {
         message: response.message
      });
   },
   _showErrors: function(response) {
      if (response.errors === undefined) {
         $.displayErrorAlert(response.error);
         return;
      };
      var counter = 0;
      $.each(response.errors, function(field, errors) {
         var message = '';
         counter++;
         if (errors.messages.isEmpty !== undefined) {
            message = errors.messages.isEmpty;
         } else {
            $.each(errors.messages, function(type, error) {
               if (message !== '') {
                  message += '<br />\n';
               }
               message += error;
            });
         }
         $('#' + field).addError(message);
      });
      var count = $(response.errors).size();
      $.displayErrorAlert(((counter > 1) ? 'There are ' + counter + ' errors' : 'There is one error'));
   }
});
var OptionList = $.klass({
   settings: {
      button: '#add',
      locked: 'false',
      item: '#item-options-add'
   },
   $button: null,
   initialize: function(settings) {
      $.extend(this.settings, settings);
      this.$button = $(this.settings.context);
      $(this.$button, '#operations').click($.proxy(this.show, this));
      $(document).click($.proxy(this.hide, this));
   },
   show: function(event) {
      $options = $('#operations').find('ul.button-options');
      $options.each(function(index, element) {
         $current = $(event.currentTarget).find('ul.button-options');
         if ($($current).attr('id') != $(element).attr('id')) {
            $(element).hide();
         }
      });
      if (this.settings.locked === true) {
         return;
      }
      this.settings.locked = true;
      $(event.currentTarget).find('ul.button-options').slideDown('fast', $.proxy(this._unlock, this));
   },
   hide: function(event) {
      if (this.settings.locked === true) {
         return;
      }
      this.settings.locked = true;
      $(this.$button).find('ul.button-options').slideUp('fast', $.proxy(this._unlock, this));
   },
   _unlock: function() {
      this.settings.locked = false;
   }
});
var multipleSelect = $.klass({
   settings: {
      noneSelectedText: 'Please select an option',
      checkboxes: true,
      remainOpen: false,
      width: '360',
      height: '175',
      filter: true,
      filterLabel: 'Filter',
      filterPlaceHolder: 'Enter keywords',
   },
   $select: null,
   $checked: null,
   initialize: function($select, settings) {
      this.$select = $select;
      $.extend(this.settings, settings);
      var disabled = this.$select.is(':disabled');
      if (disabled === true) {
         this.$select.removeAttr('disabled');
      }
      this.$select.multiselect({
         noneSelectedText: this.settings.noneSelectedText,
         multiple: this.settings.checkboxes,
         minWidth: this.settings.width,
         height: this.settings.height,
         checkAllText: this.settings.checkAllText,
         uncheckAllText: this.settings.uncheckAllText,
      });
      if (this.settings.filter === true) {
         this.$select.multiselectfilter({
            label: this.settings.filterLabel,
            placeholder: this.settings.filterPlaceHolder,
         });
      }
      this.$select.bind('bindclick', $.proxy(this.bindClickEv, this));
      this.$select.bind('checked', $.proxy(this.getChecked, this));
      this.$select.bind('refresh', $.proxy(this.refresh, this));
      this.$select.parent().find('input:checkbox').click($.proxy(this.checked, this));
      if (this.settings.remainOpen == true) {
         this.$select.multiselect('open');
         this.$select.bind('multiselectbeforeclose', function(event, ui) {
            return false;
         });
         this.$select.parent().find('button').hide();
         if (disabled === true) {
            this.$select.multiselect('disable');
         }
      }
      var checked = this.$select.multiselect('getChecked');
      if (checked.length != 0) {
         $.each(checked, function(key, checkbox) {
            $(checkbox).parent().addClass('multi-selected');
         });
      }
   },
   checked: function(event) {
      var $checkbox = $(event.currentTarget);
      if ($checkbox.is(':checked') === true) {
         $checkbox.parent().addClass('multi-selected');
      } else {
         $checkbox.parent().removeClass('multi-selected');
      }
   },
   selectedText: function(numChecked, numTotal, checkedItems) {
      if (numChecked > 5) {
         return numChecked + ' of ' + numTotal + ' selected';
      } else {
         var display = '';
         $(checkedItems).each(function() {
            $this = $(this);
            display += $.trim($this.next().text()) + ', ';
         });
         return display.substring(0, display.length - 2);
      }
   },
   getChecked: function() {
      return this.$select.multiselect('getChecked').map(function() {
         return this.value;
      }).get();
   },
   refresh: function() {
      this.$select.multiselect('refresh');
   },
   bindClickEv: function(event, func) {
      this.$select.bind('multiselectclick', func);
   }
});
var UsersGlobal = $.klass({
   settings: {},
   initialize: function(settings) {
      $.extend(this.settings, settings);
      $('#logout-remote-user').click($.proxy(this.remoteLogout, this));
   },
   remoteLogout: function() {
      $.ajax({
         url: URL + '/users/op/remote-logout',
         success: function(data) {
            var response = $.parseJSON(data);
            if (response.status === 'error') {
               $('#alert').trigger('warning', {
                  message: response.message
               });
               return;
            }
            if (response.status === 'success') {
               $('#alert').trigger('complete', {
                  message: response.message
               });
               window.location = response.remote_url;
            }
         }
      });
   }
});
var Feedback = $.klass({
   settings: {},
   initialize: function(settings) {
      $.extend(this.settings, settings);
      $('#give-feedback').click($.proxy(this.feedbackConfirm, this));
      $('#close-feedback').click($.proxy(this.feedbackClose, this));
   },
   feedbackClose: function() {
      $('.feedback-tab').hide();
      localStorage['feedback_closed'] = "yes";
   },
   feedbackConfirm: function() {
      var buttons = {};
      buttons[$.translate('Send')] = $.proxy(this.send, this);
      buttons[$.translate('Close')] = function() {
         $('#dialog').trigger('close');
      };
      $.ajax({
         url: URL + '/feedback',
         success: $.proxy(function(html) {
            $('#dialog').html(html).trigger('open', {
               options: {
                  title: 'How can we improve?',
                  buttons: buttons,
                  height: 550
               }
            });
            $('.dropdown-toggle').dropdown({
               selected_input: 'feedback_type'
            });
         }, this)
      });
   },
   send: function() {
      $.ajax({
         url: URL + '/feedback/op/send-feedback',
         type: 'POST',
         data: $('#feedback-form').serializeObject(),
         success: function(data) {
            response = $.parseJSON(data);
            if (response.status === 'success') {
               $('#dialog').trigger('close');
               $('#alert').trigger('complete', {
                  message: 'Feedback sent'
               });
            } else {
               $('#dialog_error').html(response.message).show();
               $('#alert').trigger('warning', {
                  message: response.message
               });
            }
         }
      });
   }
});
(function($) {
   $.fn.multiSelectBox = function(settings) {
      return this.each(function() {
         new multipleSelect($(this), settings);
      });
   };
})(jQuery);
(function($) {
   $.fn.browse = function(settings) {
      return this.each(function() {
         new Browse($(this), settings);
      });
   };
})(jQuery);
(function($) {
   $.fn.operations = function(settings) {
      return this.each(function() {
         new Operations($(this), settings);
      });
   };
})(jQuery);
(function($) {
   $.fn.options = function(settings) {
      return this.each(function() {
         new OptionList($(this), settings);
      });
   };
})(jQuery);
(function($) {
   $.fn.search = function(settings) {
      return this.each(function() {
         new Search(settings);
      });
   };
})(jQuery);

function configureHtmlOutput(ev) {
   var editor = ev.editor,
      dataProcessor = editor.dataProcessor,
      htmlFilter = dataProcessor && dataProcessor.htmlFilter;
   dataProcessor.writer.selfClosingEnd = '>';
   dataProcessor.writer.indentationChars = '    ';
   var dtd = CKEDITOR.dtd;
   for (var e in CKEDITOR.tools.extend({}, dtd.$nonBodyContent, dtd.$block, dtd.$listItem, dtd.$tableContent)) {
      dataProcessor.writer.setRules(e, {
         indent: true,
         breakBeforeOpen: true,
         breakAfterOpen: false,
         breakBeforeClose: !dtd[e]['#'],
         breakAfterClose: true
      });
   }
   htmlFilter.addRules({
      elements: {
         img: function(element) {
            var style = element.attributes.style;
            if (style) {
               var match = null,
                  value = null;
               var patterns = {
                  width: /(?:^|\s)width\s*:\s*(\d+)px;?/i,
                  height: /(?:^|\s)height\s*:\s*(\d+)px;?/i,
                  align: /(?:^|\s)float\s*:\s*(\w*);?/i,
                  border: /(?:^|\s)border-width\s*:\s*(\d+)px;?/i
               };
               $.each(patterns, function(index, pattern) {
                  match = pattern.exec(style);
                  value = match && match[1];
                  if (value) {
                     element.attributes[index] = value;
                  }
               });
               var pattern = /(?:^|\s)margin\s*:\s*(\d+)px(?:\s*(\d+)px)?(?!\s*\d);?/i;
               match = pattern.exec(style);
               var vspace = match && match[1],
                  hspace = match && match[2];
               if (vspace) {
                  element.attributes['vspace'] = vspace;
                  element.attributes['hspace'] = vspace;
               }
               if (hspace) {
                  element.attributes['hspace'] = hspace;
               }
            }
            return element;
         }
      }
   });
}

function displayFeedbackForm() {
   var buttons = {};
   buttons[$.translate('Send')] = $.proxy(this.sendEmail, this);
   buttons[$.translate('Close')] = function() {
      $('#dialog').trigger('close');
   };
   var html = $('<form action="javascript: void(0);" method="post" name="stf_form" id="stf_form">' +
      '<div class="content-middle">' +
      '<table class="fieldset" cellpadding="0" cellspacing="0">' +
      '<tr>' +
      '<td class="nowrap">' + $.translate('Email') + '</td>' +
      '<td class="stretch"><input type="text" name="email" id="email" value=""/></td>' +
      '</tr>' +
      '<tr>' +
      '<td class="nowrap">' + $.translate('Verification Code') + '</td>' +
      '<td class="stretch"><img src="' + URL + '/vendors/captcha/picture.php" alt="Verification Image" title="Verification Image" style="border : 1px solid #B1B1B1;" /><br />' +
      '<input name="captcha" id="captcha" value="" autocomplete="off" />' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '</div>' +
      '</form>');
   $('#dialog').html(html).trigger('open', {
      options: {
         title: 'Send to friend',
         buttons: buttons
      }
   });
}
var Pinger;
var UserActivityMonitoring;
$(document).ready(function() {
   if (typeof LANGUAGE == 'undefined') {
      var LANGUAGE = 'en';
   }
   $('<div id="application"></div>').css('display', 'none').appendTo(document.body);
   $.ajaxSetup({
      type: 'POST'
   });
   new Language();
   if ($('#menu').length !== 0) {
      new Menu();
   }
   new Alert();
   new Dialog();
   new UsersGlobal();
   new Feedback();
   var feedbackClosed = localStorage['feedback_closed'];
   if (feedbackClosed == 'yes') {
      $('.feedback-tab').hide();
   }
   $("#loading").bind('show ajaxSend', function(event) {
      $(this).show();
   }).bind('hide ajaxComplete', function() {
      $(this).hide();
   }).hide();
   if (typeof SESSION_TIMEOUT !== 'undefined') {
      Pinger = new Ping();
   }
   if (typeof window.SESSION_INACTIVITY_SETTINGS !== 'undefined') {
      UserActivityMonitoring = new UserActivityMonitor();
   }
   $.datepicker.regional['es'] = {
      closeText: 'Cerrar',
      prevText: '&#x3c;Ant',
      nextText: 'Sig&#x3e;',
      currentText: 'Hoy',
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mi&#233;', 'Juv', 'Vie', 'S&aacute;b'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;'],
      dateFormat: 'dd/mm/yyyy',
      firstDay: 1,
      weekHeader: 'Sm',
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
   };
   $.datepicker.regional['pt'] = {
      closeText: 'Fechar',
      prevText: '&#x3c;Anterior',
      nextText: 'Seguinte',
      currentText: 'Hoje',
      monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
      weekHeader: 'Sem',
      dateFormat: 'dd/mm/yy',
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
   };
   $.datepicker.setDefaults($.datepicker.regional[LANGUAGE]);
   $('#alert').bind('DOMNodeInserted', function(event) {
      $('html, body').animate({
         scrollTop: 0
      }, 'slow');
   });
});
(function(i, s, o, g, r, a, m) {
   i['GoogleAnalyticsObject'] = r;
   i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
   }, i[r].l = 1 * new Date();
   a = s.createElement(o), m = s.getElementsByTagName(o)[0];
   a.async = 1;
   a.src = g;
   m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-63024924-1', 'auto');
ga('send', 'pageview');