import moment from 'moment/moment';

const dateTimeDisplayFormat = "DD/MMM/YY hh:mm A"

export function getDate(date: string): moment.Moment {

  if (!date) return null;
  var newDate = moment(date);

  return newDate;
}

export function getFormatedDate(date: string, formatString?: string) {
  var momentDate = getDate(date);
  return momentDate ? momentDate.format((formatString) ? formatString : dateTimeDisplayFormat) : "";
}

// Should only return true within IE < 11 but not Edge
export function isIe(): boolean {
    var doc = document as any;
    return (/*@cc_on!@*/false || !!doc.documentMode);
}

const pathLambdaRegex = /function\s*\((\w)\)\s*{\s*return\s*\1[\.]?([\w\.\[\]]+);?\s*}/g;

function cerebralPathFromFunction<T, T2>(func: (model: T) => T2, args: any[]): T2 {
    pathLambdaRegex.lastIndex = 0;
    const str = func.toString().replace(/"use strict";/, '');
    let m;

    if ((m = pathLambdaRegex.exec(str)) !== null) {
        let output = m[2];

        if (args.length > 0) {
            for (let i = 0; i < args.length; i++) {
                output = output.replace(`[${i}]`, `.${args[i]}`);
            }
        } else {
            output = output.replace(/\[/g, ".").replace(/\]/g, "");
        }

        if (output && output[0] == ".") {
            output = output.substring(1);
        }

        return output as any as T2;
    }

    return null;
}

export const pathFromModel = function <T>(child: string = "") {
    return function <TProp>(func: (model: T) => TProp, ...args) {
        return (cerebralPathFromFunction<T, TProp>(func, args) + child) as any as TProp
    }
}

export const setState = function<T, TProp>(path: (input: T) => TProp, value: TProp) {
    return ({input, state}) => {
        state.set(path(input), value);
    };
}

export const setStateFrom = function<T, TProp>(path: (input: T) => TProp, value: (input: T) => TProp) {
    return ({input, state}) => {
        state.set(path(input), value(input));
    };
}

export const whenState = function<T>(path: T) {
    return ({input, state, output}) => {
        if (state.get(path) === true) {
            return output.true()
        }
        output.false()
    };
}

import $ from 'jquery';
export const createAlert = (message: string, options: any) => {
  var $alert, css, offsetAmount;

  options = $.extend({}, alert_default_options, options);
  $alert = $("<div>");
  $alert.attr("class", "portal-alert alert");
  $alert.attr("role", "alert");
  if (options.type) {
    $alert.addClass("alert-" + options.type);
  }
  if (options.allow_dismiss) {
    $alert.append("<a class=\"close\" data-dismiss=\"alert\" href=\"#\">&times;</a>");
  }
  $alert.append(message);
  if (options.top_offset) {
    options.offset = {
      from: "top",
      amount: options.top_offset
    };
  }
  offsetAmount = options.offset.amount;
  $(".portal-alert").each(function () {
    return offsetAmount = Math.max(offsetAmount, parseInt($(this).css(options.offset.from)) + $(this).outerHeight() + options.stackup_spacing);
  });
  css = {
    "position": (options.ele === "body" ? "fixed" : "absolute"),
    "margin": 0,
    "z-index": "9999",
    "display": "none"
  };
  css[options.offset.from] = offsetAmount + "px";
  $alert.css(css);
  if (options.width !== "auto") {
    $alert.css("width", options.width + "px");
  }
  $(options.ele).append($alert);
  switch (options.align) {
    case "center":
      $alert.css({
        "left": "50%",
        "margin-left": "-" + ($alert.outerWidth() / 2) + "px"
      });
      break;
    case "left":
      $alert.css("left", "20px");
      break;
    default:
      $alert.css("right", "20px");
  }
  $alert.fadeIn();
  if (options.delay > 0) {
    return $alert.delay(options.delay).fadeOut(function () {
      return $(this).remove();
    });
  }
};

var alert_default_options = {
  ele: "body",
  type: "info",
  offset: {
    from: "top",
    amount: 20
  },
  align: "center",
  width: "auto",
  delay: 4000,
  allow_dismiss: false,
  stackup_spacing: 10
};