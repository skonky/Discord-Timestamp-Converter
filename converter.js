var date = new Date();
var style = "f"

TimeAgo.addDefaultLocale({
  "locale": "en",
  "long": {
    "year": {
      "previous": "last year",
      "current": "this year",
      "next": "next year",
      "past": {
        "one": "{0} year ago",
        "other": "{0} years ago"
      },
      "future": {
        "one": "in {0} year",
        "other": "in {0} years"
      }
    },
    "quarter": {
      "previous": "last quarter",
      "current": "this quarter",
      "next": "next quarter",
      "past": {
        "one": "{0} quarter ago",
        "other": "{0} quarters ago"
      },
      "future": {
        "one": "in {0} quarter",
        "other": "in {0} quarters"
      }
    },
    "month": {
      "previous": "last month",
      "current": "this month",
      "next": "next month",
      "past": {
        "one": "{0} month ago",
        "other": "{0} months ago"
      },
      "future": {
        "one": "in {0} month",
        "other": "in {0} months"
      }
    },
    "week": {
      "previous": "last week",
      "current": "this week",
      "next": "next week",
      "past": {
        "one": "{0} week ago",
        "other": "{0} weeks ago"
      },
      "future": {
        "one": "in {0} week",
        "other": "in {0} weeks"
      }
    },
    "day": {
      "previous": "yesterday",
      "current": "today",
      "next": "tomorrow",
      "past": {
        "one": "{0} day ago",
        "other": "{0} days ago"
      },
      "future": {
        "one": "in {0} day",
        "other": "in {0} days"
      }
    },
    "hour": {
      "current": "this hour",
      "past": {
        "one": "{0} hour ago",
        "other": "{0} hours ago"
      },
      "future": {
        "one": "in {0} hour",
        "other": "in {0} hours"
      }
    },
    "minute": {
      "current": "this minute",
      "past": {
        "one": "{0} minute ago",
        "other": "{0} minutes ago"
      },
      "future": {
        "one": "in {0} minute",
        "other": "in {0} minutes"
      }
    },
    "second": {
      "current": "now",
      "past": {
        "one": "{0} second ago",
        "other": "{0} seconds ago"
      },
      "future": {
        "one": "in {0} second",
        "other": "in {0} seconds"
      }
    }
  },
  "short": {
    "year": {
      "previous": "last yr",
      "current": "this yr",
      "next": "next yr",
      "past": "{0} yr ago",
      "future": "in {0} yr"
    },
    "quarter": {
      "previous": "last qtr.",
      "current": "this qtr.",
      "next": "next qtr.",
      "past": "{0} qtr ago",
      "future": "in {0} qtr"
    },
    "month": {
      "previous": "last mo",
      "current": "this mo",
      "next": "next mo",
      "past": "{0} mo ago",
      "future": "in {0} mo"
    },
    "week": {
      "previous": "last wk",
      "current": "this wk",
      "next": "next wk",
      "past": "{0} wk ago",
      "future": "in {0} wk"
    },
    "day": {
      "previous": "yesterday",
      "current": "today",
      "next": "tomorrow",
      "past": {
        "one": "{0} day ago",
        "other": "{0} days ago"
      },
      "future": {
        "one": "in {0} day",
        "other": "in {0} days"
      }
    },
    "hour": {
      "current": "this hour",
      "past": "{0} hr ago",
      "future": "in {0} hr"
    },
    "minute": {
      "current": "this minute",
      "past": "{0} min ago",
      "future": "in {0} min"
    },
    "second": {
      //"current": "now",
      "past": "{0} sec ago",
      "future": "in {0} sec"
    }
  },
  "narrow": {
    "year": {
      "previous": "last yr",
      "current": "this yr",
      "next": "next yr",
      "past": "{0} yr ago",
      "future": "in {0} yr"
    },
    "quarter": {
      "previous": "last qtr.",
      "current": "this qtr.",
      "next": "next qtr.",
      "past": "{0} qtr ago",
      "future": "in {0} qtr"
    },
    "month": {
      "previous": "last mo",
      "current": "this mo",
      "next": "next mo",
      "past": "{0} mo ago",
      "future": "in {0} mo"
    },
    "week": {
      "previous": "last wk",
      "current": "this wk",
      "next": "next wk",
      "past": "{0} wk ago",
      "future": "in {0} wk"
    },
    "day": {
      "previous": "yesterday",
      "current": "today",
      "next": "tomorrow",
      "past": {
        "one": "{0} day ago",
        "other": "{0} days ago"
      },
      "future": {
        "one": "in {0} day",
        "other": "in {0} days"
      }
    },
    "hour": {
      "current": "this hour",
      "past": "{0} hr ago",
      "future": "in {0} hr"
    },
    "minute": {
      "current": "this minute",
      "past": "{0} min ago",
      "future": "in {0} min"
    },
    "second": {
      "current": "now",
      "past": "{0} sec ago",
      "future": "in {0} sec"
    }
  }
});


function generalFormat(the_style) {
  return moment(date).format(the_style);
}

function relativeTime() {
  return new TimeAgo('en-US').format(date);
}

function generateNewTs(style) {
  var formatDict = {
    f: generalFormat('MMMM D YYYY, h:mm A'),
    F: generalFormat('dddd MMMM D YYYY, h:mm A'),
    R: relativeTime(),
    t: generalFormat('h:mm A'),
    T: generalFormat('h:mm:ss A'),
    d: generalFormat('MM/DD/YYYY'),
    D: generalFormat('D MMMM YYYY'),
  };
  return formatDict[style]
}

function changeDate(newDate) {
  var dateControl = document.querySelector('input[type="datetime-local"]');
  dateControl.value = newDate;
}

changeDate(date.toLocaleString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
}).replace(" ", "T"))

function updateDatetime() {
  var Control = document.querySelector('input[type="datetime-local"]');
  var str1 = "";
  date = Date.parse(Control.value);

  var selection = document.getElementById("timestamp-format");
  var style = selection.value;

  var nextDate = str1.concat("&lt;t:", Math.round(date / 1000), ":", style, "&gt;");
  if (document.getElementById("timestamp").innerHTML !== nextDate) {
    document.getElementById("timestamp").innerHTML = nextDate;
    document.getElementById("formatted").innerHTML = generateNewTs(style);
  }
}

function copyTimestamp(text) {
  //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  const el = document.createElement('textarea');
  el.value = text.replace('&lt;', '<').replace('&gt;', '>');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

updateDatetime()
setInterval(updateDatetime, 100);
