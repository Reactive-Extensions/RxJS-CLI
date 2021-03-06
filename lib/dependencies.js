module.exports = {
  "operators": {
    "dictionary": {
      "source": ["node_modules/rx/src/core/internal/dictionary.js"],
      "dependsOn": []
    },
    "nativemap": {
      "source": ["node_modules/rx/src/core/internal/map.js"],
      "dependsOn": []
    },
    "connectableobservable": {
      "source": ["node_modules/rx/src/core/linq/connectableobservable.js"],
      "dependsOn": []
    },
    "groupedobservable": {
      "source": ["node_modules/rx/src/core/linq/groupedobservable.js"],
      "dependsOn": []
    },
    "observeonobserver": {
      "source": ["node_modules/rx/src/core/observeonobserver.js"],
      "dependsOn": ["scheduledobserver"]
    },
    "scheduledobserver": {
      "source": ["node_modules/rx/src/core/scheduledobserver.js"],
      "dependsOn": []
    },
    "_elementatordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/_elementatordefault.js"],
      "dependsOn": []
    },
    "_extremaby": {
      "source": ["node_modules/rx/src/core/linq/observable/_extremaby.js"],
      "dependsOn": []
    },
    "_findvalue": {
      "source": ["node_modules/rx/src/core/linq/observable/_findvalue.js"],
      "dependsOn": []
    },
    "_firstonly": {
      "source": ["node_modules/rx/src/core/linq/observable/_firstonly.js"],
      "dependsOn": []
    },
    "_firstordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/_firstordefault.js"],
      "dependsOn": []
    },
    "_lastordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/_lastordefault.js"],
      "dependsOn": []
    },
    "_observabletimerdate": {
      "source": ["node_modules/rx/src/core/linq/observable/_observabletimerdate.js"],
      "dependsOn": []
    },
    "_observabletimerdateandperiod": {
      "source": ["node_modules/rx/src/core/linq/observable/_observabletimerdateandperiod.js"],
      "dependsOn": []
    },
    "_observabletimertimespan": {
      "source": ["node_modules/rx/src/core/linq/observable/_observabletimertimespan.js"],
      "dependsOn": []
    },
    "_observabletimertimespanandperiod": {
      "source": ["node_modules/rx/src/core/linq/observable/_observabletimertimespanandperiod.js"],
      "dependsOn": ["defer","_observabletimerdateandperiod"]
    },
    "_singleordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/_singleordefault.js"],
      "dependsOn": []
    },
    "aggregate": {
      "source": ["node_modules/rx/src/core/linq/observable/aggregate.js"],
      "dependsOn": [ "scan", "startwith", "finalvalue" ]
    },
    "all": {
      "source": ["node_modules/rx/src/core/linq/observable/all.js"],
      "dependsOn": [
        "where",
        "any"
      ]
    },
    "amb": {
      "source": [
        "node_modules/rx/src/core/linq/observable/amb.js",
        "node_modules/rx/src/core/linq/observable/ambproto.js"
      ],
      "dependsOn": [
        "frompromise"
      ]
    },
    "and": {
      "source": ["node_modules/rx/src/core/linq/observable/and.js"],
      "dependsOn": [
        "nativemap",
        "activeplan",
        "joinobserver",
        "pattern",
        "plan"
      ]
    },
    "any": {
      "source": ["node_modules/rx/src/core/linq/observable/any.js"],
      "dependsOn": [
        "where"
      ]
    },
    "asobservable": {
      "source": ["node_modules/rx/src/core/linq/observable/asobservable.js"],
      "dependsOn": []
    },
    "average": {
      "source": ["node_modules/rx/src/core/linq/observable/average.js"],
      "dependsOn": [
        "select",
        "scan",
        "finalvalue"
      ]
    },
    "buffer": {
      "source": ["node_modules/rx/src/core/linq/observable/buffer.js"],
      "dependsOn": [
        "window",
        "selectmany",
        "toarray"
      ]
    },
    "bufferwithcount": {
      "source": ["node_modules/rx/src/core/linq/observable/bufferwithcount.js"],
      "dependsOn": [
        "windowwithcount",
        "selectmany",
        "toarray",
        "where"
      ]
    },
    "bufferwithtime": {
      "source": ["node_modules/rx/src/core/linq/observable/bufferwithtime.js"],
      "dependsOn": [
        "windowwithtime",
        "selectmany",
        "toarray",
      ]
    },
    "bufferwithtimeorcount": {
      "source": ["node_modules/rx/src/core/linq/observable/bufferwithtimeorcount.js"],
      "dependsOn": [
        "windowwithtimeorcount",
        "selectmany",
        "toarray",
      ]
    },
    "case": {
      "source": ["node_modules/rx/src/core/linq/observable/case.js"],
      "dependsOn": [
        "empty",
        "frompromise"
      ]
    },
    "catch": {
      "source": [
        "node_modules/rx/src/core/linq/observable/catch.js",
        "node_modules/rx/src/core/linq/observable/catchproto.js"],
      "dependsOn": [
        "frompromise"
      ]
    },
    "combinelatest": {
      "source": [
        "node_modules/rx/src/core/linq/observable/combinelatest.js",
        "node_modules/rx/src/core/linq/observable/combinelatestproto.js"],
      "dependsOn": [
        "frompromise"
      ]
    },
    "concat": {
      "source": [
        "node_modules/rx/src/core/linq/observable/concat.js",
        "node_modules/rx/src/core/linq/observable/concatproto.js"],
      "dependsOn": [
        "frompromise"
      ]
    },
    "concatmap": {
      "source": ["node_modules/rx/src/core/linq/observable/concatmap.js"],
      "dependsOn": [
        "frompromise",
        "concatobservable"
      ]
    },
    "concatmapobserver": {
      "source": ["node_modules/rx/src/core/linq/observable/concatmapobserver.js"],
      "dependsOn": [
        "frompromise",
        "concatobservable"
      ]
    },
    "concatobservable": {
      "source": ["node_modules/rx/src/core/linq/observable/concatobservable.js"],
      "dependsOn": [
        "merge"
      ]
    },
    "contains": {
      "source": ["node_modules/rx/src/core/linq/observable/contains.js"],
      "dependsOn": [
        "where",
        "any"
      ]
    },
    "count": {
      "source": ["node_modules/rx/src/core/linq/observable/count.js"],
      "dependsOn": [
        "where",
        "aggregate"
      ]
    },
    "create": {
      "source": ["node_modules/rx/src/core/linq/observable/create.js"],
      "dependsOn": []
    },
    "defaultifempty": {
      "source": ["node_modules/rx/src/core/linq/observable/defaultifempty.js"],
      "dependsOn": []
    },
    "defer": {
      "source": ["node_modules/rx/src/core/linq/observable/defer.js"],
      "dependsOn": [
        "frompromise"
      ]
    },
    "delay": {
      "source": ["node_modules/rx/src/core/linq/observable/defer.js"],
      "dependsOn": [
        "defer",
        "materialize",
        "timestamp"
      ]
    },
    "delaysubscription": {
      "source": ["node_modules/rx/src/core/linq/observable/delaysubscription.js"],
      "dependsOn": [
        "timer",
        "empty"
      ]
    },
    "delaywithselector": {
      "source": ["node_modules/rx/src/core/linq/observable/delaywithselector.js"],
      "dependsOn": []
    },
    "dematerialize": {
      "source": ["node_modules/rx/src/core/linq/observable/dematerialize.js"],
      "dependsOn": []
    },
    "distinct": {
      "source": ["node_modules/rx/src/core/linq/observable/distinct.js"],
      "dependsOn": []
    },
    "distinctuntilchanged": {
      "source": ["node_modules/rx/src/core/linq/observable/distinctuntilchanged.js"],
      "dependsOn": []
    },
    "do": {
      "source": ["node_modules/rx/src/core/linq/observable/do.js"],
      "dependsOn": []
    },
    "dowhile": {
      "source": ["node_modules/rx/src/core/linq/observable/dowhile.js"],
      "dependsOn": [
        "concat",
        "while"
      ]
    },
    "elementat": {
      "source": ["node_modules/rx/src/core/linq/observable/elementat.js"],
      "dependsOn": [
        "_elementatordefault"
      ]
    },
    "elementatordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/elementatordefault.js"],
      "dependsOn": [
        "_elementatordefault"
      ]
    },
    "empty": {
      "source": ["node_modules/rx/src/core/linq/observable/empty.js"],
      "dependsOn": []
    },
    "expand": {
      "source": ["node_modules/rx/src/core/linq/observable/expand.js"],
      "dependsOn": []
    },
    "finally": {
      "source": ["node_modules/rx/src/core/linq/observable/finally.js"],
      "dependsOn": []
    },
    "finalvalue": {
      "source": ["node_modules/rx/src/core/linq/observable/finalvalue.js"],
      "dependsOn": []
    },
    "find": {
      "source": ["node_modules/rx/src/core/linq/observable/find.js"],
      "dependsOn": ["_findvalue"]
    },
    "findindex": {
      "source": ["node_modules/rx/src/core/linq/observable/findindex.js"],
      "dependsOn": ["_findvalue"]
    },
    "first": {
      "source": ["node_modules/rx/src/core/linq/observable/first.js"],
      "dependsOn": ["where", "_firstordefault"]
    },
    "firstordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/firstordefault.js"],
      "dependsOn": ["where", "_firstordefault"]
    },
    "for": {
      "source": ["node_modules/rx/src/core/linq/observable/for.js"],
      "dependsOn": ["concat"]
    },
    "forkjoin": {
      "source": [
        "node_modules/rx/src/core/linq/observable/forkjoin.js",
        "node_modules/rx/src/core/linq/observable/forkjoinproto.js"
        ],
      "dependsOn": ["frompromise"]
    },
    "from": {
      "source": ["node_modules/rx/src/core/linq/observable/from.js"],
      "dependsOn": []
    },
    "fromarray": {
      "source": ["node_modules/rx/src/core/linq/observable/fromarray.js"],
      "dependsOn": []
    },
    "fromcallback": {
      "source": ["node_modules/rx/src/core/linq/observable/fromcallback.js"],
      "dependsOn": []
    },
    "fromnodecallback": {
      "source": ["node_modules/rx/src/core/linq/observable/fromnodecallback.js"],
      "dependsOn": []
    },
    "fromevent-compat": {
      "source": ["node_modules/rx/src/core/linq/observable/fromevent.js"],
      "dependsOn": ["fromeventpattern", "publish","connectableobservable"]
    },
    "fromevent": {
      "source": ["node_modules/rx/src/core/linq/observable/fromevent-modern.js"],
      "dependsOn": ["fromeventpattern", "publish","connectableobservable"]
    },
    "fromeventpattern": {
      "source": ["node_modules/rx/src/core/linq/observable/fromeventpattern.js"],
      "dependsOn": ["publish"]
    },
    "frompromise": {
      "source": ["node_modules/rx/src/core/linq/observable/frompromise.js"],
      "dependsOn": []
    },
    "generate": {
      "source": ["node_modules/rx/src/core/linq/observable/generate.js"],
      "dependsOn": []
    },
    "generatewithabsolutetime": {
      "source": ["node_modules/rx/src/core/linq/observable/generatewithabsolutetime.js"],
      "dependsOn": []
    },
    "generatewithrelativetime": {
      "source": ["node_modules/rx/src/core/linq/observable/generatewithrelativetime.js"],
      "dependsOn": []
    },
    "groupby": {
      "source": ["node_modules/rx/src/core/linq/observable/groupby.js"],
      "dependsOn": ["groupbyuntil"]
    },
    "groupbyuntil": {
      "source": ["node_modules/rx/src/core/linq/observable/groupbyuntil.js"],
      "dependsOn": ["dictionary","groupedobservable"]
    },
    "groupjoin": {
      "source": ["node_modules/rx/src/core/linq/observable/groupjoin.js"],
      "dependsOn": ["dictionary"]
    },
    "if": {
      "source": ["node_modules/rx/src/core/linq/observable/if.js"],
      "dependsOn": ["frompromise", "empty"]
    },
    "ignoreelements": {
      "source": ["node_modules/rx/src/core/linq/observable/ignoreelements.js"],
      "dependsOn": []
    },
    "indexof": {
      "source": ["node_modules/rx/src/core/linq/observable/indexof.js"],
      "dependsOn": []
    },
    "interval": {
      "source": ["node_modules/rx/src/core/linq/observable/interval.js"],
      "dependsOn": ["_observabletimertimespanandperiod"]
    },
    "isempty": {
      "source": ["node_modules/rx/src/core/linq/observable/isempty.js"],
      "dependsOn": ["_observabletimertimespanandperiod"]
    },
    "join": {
      "source": ["node_modules/rx/src/core/linq/observable/join.js"],
      "dependsOn": ["dictionary"]
    },
    "jortsort": {
      "source": ["node_modules/rx/src/core/linq/observable/jortsort.js"],
      "dependsOn": ["jortsortuntil","never"]
    },
    "jortsortuntil": {
      "source": ["node_modules/rx/src/core/linq/observable/jortsortuntil.js"],
      "dependsOn": ["takeuntil"]
    },
    "last": {
      "source": ["node_modules/rx/src/core/linq/observable/last.js"],
      "dependsOn": ["_lastordefault","where"]
    },
    "lastordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/lastordefault.js"],
      "dependsOn": ["_lastordefault","where"]
    },
    "let": {
      "source": ["node_modules/rx/src/core/linq/observable/let.js"],
      "dependsOn": []
    },
    "manyselect": {
      "source": ["node_modules/rx/src/core/linq/observable/manyselect.js"],
      "dependsOn": ["defer","observeon","do"]
    },
    "materialize": {
      "source": ["node_modules/rx/src/core/linq/observable/materialize.js"],
      "dependsOn": []
    },
    "max": {
      "source": ["node_modules/rx/src/core/linq/observable/max.js"],
      "dependsOn": ["maxby","select","_firstonly"]
    },
    "maxby": {
      "source": ["node_modules/rx/src/core/linq/observable/maxby.js"],
      "dependsOn": ["_extremaby"]
    },
    "merge": {
      "source": ["node_modules/rx/src/core/linq/observable/merge.js","node_modules/rx/src/core/linq/observable/mergeproto.js"],
      "dependsOn": ["fromarray", "frompromise", "mergeobservable"]
    },
    "mergeobservable": {
      "source": ["node_modules/rx/src/core/linq/observable/mergeobservable.js"],
      "dependsOn": ["frompromise"]
    },
    "min": {
      "source": ["node_modules/rx/src/core/linq/observable/min.js"],
      "dependsOn": ["minby","select","_firstonly"]
    },
    "minby": {
      "source": ["node_modules/rx/src/core/linq/observable/minby.js"],
      "dependsOn": ["_extremaby"]
    },
    "multicast": {
      "source": ["node_modules/rx/src/core/linq/observable/multicast.js"],
      "dependsOn": ["connectableobservable"]
    },
    "never": {
      "source": ["node_modules/rx/src/core/linq/observable/never.js"],
      "dependsOn": []
    },
    "never": {
      "source": ["node_modules/rx/src/core/linq/observable/never.js"],
      "dependsOn": []
    },
    "observeon": {
      "source": ["node_modules/rx/src/core/linq/observable/observeon.js"],
      "dependsOn": ["observeonobserver"]
    },
    "of": {
      "source": ["node_modules/rx/src/core/linq/observable/of.js", "node_modules/rx/src/core/linq/observable/ofwithscheduler.js"],
      "dependsOn": ["fromarray"]
    },
    "onerrorresumenext": {
      "source": ["node_modules/rx/src/core/linq/observable/onerrorresumenext.js", "node_modules/rx/src/core/linq/observable/onerrorresumenextproto.js"],
      "dependsOn": ["frompromise"]
    },
    "pairwise": {
      "source": ["node_modules/rx/src/core/linq/observable/pairwise.js"],
      "dependsOn": []
    },
    "partition": {
      "source": ["node_modules/rx/src/core/linq/observable/partition.js"],
      "dependsOn": ["publish","connectableobservable","where"]
    },
    "pluck": {
      "source": ["node_modules/rx/src/core/linq/observable/pluck.js"],
      "dependsOn": ["select"]
    },
    "publish": {
      "source": ["node_modules/rx/src/core/linq/observable/publish.js"],
      "dependsOn": ["multicast"]
    },
    "publishlast": {
      "source": ["node_modules/rx/src/core/linq/observable/publishlast.js"],
      "dependsOn": ["multicast"]
    },
    "publishvalue": {
      "source": ["node_modules/rx/src/core/linq/observable/publishlast.js"],
      "dependsOn": ["multicast","behaviorsubject"]
    },
    "range": {
      "source": ["node_modules/rx/src/core/linq/observable/range.js"],
      "dependsOn": []
    },
    "reduce": {
      "source": ["node_modules/rx/src/core/linq/observable/reduce.js"],
      "dependsOn": [ "scan", "startwith", "finalvalue" ]
    },
    "repeat": {
      "source": ["node_modules/rx/src/core/linq/observable/repeat.js","node_modules/rx/src/core/linq/observable/repeatproto.js"],
      "dependsOn": [ "return", "concat" ]
    },
    "replay": {
      "source": ["node_modules/rx/src/core/linq/observable/replay.js"],
      "dependsOn": ["multicast","replaysubject"]
    },
    "retry": {
      "source": ["node_modules/rx/src/core/linq/observable/retry.js"],
      "dependsOn": []
    },
    "return": {
      "source": ["node_modules/rx/src/core/linq/observable/return.js"],
      "dependsOn": []
    },
    "sample": {
      "source": ["node_modules/rx/src/core/linq/observable/sample.js"],
      "dependsOn": []
    },
    "scan": {
      "source": ["node_modules/rx/src/core/linq/observable/scan.js"],
      "dependsOn": []
    },
    "select": {
      "source": ["node_modules/rx/src/core/linq/observable/select.js"],
      "dependsOn": []
    },
    "selectmany": {
      "source": ["node_modules/rx/src/core/linq/observable/selectmany.js"],
      "dependsOn": ["select", "mergeobservable"]
    },
    "selectmanyobserver": {
      "source": ["node_modules/rx/src/core/linq/observable/selectmanyobserver.js"],
      "dependsOn": ["frompromise"]
    },
    "selectswitch": {
      "source": ["node_modules/rx/src/core/linq/observable/selectswitch.js"],
      "dependsOn": ["switch"]
    },
    "sequenceequal": {
      "source": ["node_modules/rx/src/core/linq/observable/sequenceequal.js"],
      "dependsOn": ["frompromise"]
    },
    "share": {
      "source": ["node_modules/rx/src/core/linq/observable/share.js"],
      "dependsOn": ["publish","connectableobservable"]
    },
    "sharereplay": {
      "source": ["node_modules/rx/src/core/linq/observable/sharereplay.js"],
      "dependsOn": ["replay","connectableobservable"]
    },
    "sharevalue": {
      "source": ["node_modules/rx/src/core/linq/observable/sharevalue.js"],
      "dependsOn": ["publishvalue","connectableobservable"]
    },
    "single": {
      "source": ["node_modules/rx/src/core/linq/observable/single.js"],
      "dependsOn": ["where","_singleordefault"]
    },
    "singleordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/singleordefault.js"],
      "dependsOn": ["where","_singleordefault"]
    },
    "skip": {
      "source": ["node_modules/rx/src/core/linq/observable/skip.js"],
      "dependsOn": []
    },
    "skiplast": {
      "source": ["node_modules/rx/src/core/linq/observable/skiplast.js"],
      "dependsOn": []
    },
    "skiplastwithtime": {
      "source": ["node_modules/rx/src/core/linq/observable/skiplastwithtime.js"],
      "dependsOn": []
    },
    "skipuntil": {
      "source": ["node_modules/rx/src/core/linq/observable/skipuntil.js"],
      "dependsOn": ["frompromise"]
    },
    "skipuntilwithtime": {
      "source": ["node_modules/rx/src/core/linq/observable/skipuntilwithtime.js"],
      "dependsOn": []
    },
    "skipwhile": {
      "source": ["node_modules/rx/src/core/linq/observable/skipwhile.js"],
      "dependsOn": []
    },
    "skipwithtime": {
      "source": ["node_modules/rx/src/core/linq/observable/skipwithtime.js"],
      "dependsOn": []
    },
    "spawn": {
      "source": ["node_modules/rx/src/core/linq/observable/spawn.js"],
      "dependsOn": []
    },
    "start": {
      "source": ["node_modules/rx/src/core/linq/observable/start.js"],
      "dependsOn": ["toasync"]
    },
    "startasync": {
      "source": ["node_modules/rx/src/core/linq/observable/start.js"],
      "dependsOn": ["throw", "frompromise"]
    },
    "startwith": {
      "source": ["node_modules/rx/src/core/linq/observable/startwith.js"],
      "dependsOn": ["fromarray"]
    },
    "susbcribeon": {
      "source": ["node_modules/rx/src/core/linq/observable/susbcribeon.js"],
      "dependsOn": [/* TODO: scheduleddisposable */]
    },
    "sum": {
      "source": ["node_modules/rx/src/core/linq/observable/sum.js"],
      "dependsOn": ["aggregate","select"]
    },
    "switch": {
      "source": ["node_modules/rx/src/core/linq/observable/switch.js"],
      "dependsOn": ["frompromise"]
    },
    "take": {
      "source": ["node_modules/rx/src/core/linq/observable/take.js"],
      "dependsOn": []
    },
    "takelast": {
      "source": ["node_modules/rx/src/core/linq/observable/takelast.js"],
      "dependsOn": []
    },
    "takelastbuffer": {
      "source": ["node_modules/rx/src/core/linq/observable/takelastbuffer.js"],
      "dependsOn": []
    },
    "takelastbufferwithtime": {
      "source": ["node_modules/rx/src/core/linq/observable/takelastbufferwithtime.js"],
      "dependsOn": []
    },
    "takelastwithtime": {
      "source": ["node_modules/rx/src/core/linq/observable/takelastwithtime.js"],
      "dependsOn": []
    },
    "takeuntil": {
      "source": ["node_modules/rx/src/core/linq/observable/takeuntil.js"],
      "dependsOn": ["frompromise"]
    },
    "takeuntilwithtime": {
      "source": ["node_modules/rx/src/core/linq/observable/takeuntilwithtime.js"],
      "dependsOn": []
    },
    "takewhile": {
      "source": ["node_modules/rx/src/core/linq/observable/takewhile.js"],
      "dependsOn": []
    },
    "takewithtime": {
      "source": ["node_modules/rx/src/core/linq/observable/takewithtime.js"],
      "dependsOn": []
    },
    "thendo": {
      "source": ["node_modules/rx/src/core/linq/observable/then.js"],
      "dependsOn": [
        "nativemap",
        "activeplan",
        "joinobserver",
        "pattern",
        "plan"
      ]
    },
    "debounce": {
      "source": ["node_modules/rx/src/core/linq/observable/debounce.js"],
      "dependsOn": []
    },
    "throttlefirst": {
      "source": ["node_modules/rx/src/core/linq/observable/throttlefirst.js"],
      "dependsOn": []
    },
    "throttlewithselector": {
      "source": ["node_modules/rx/src/core/linq/observable/throttlewithselector.js"],
      "dependsOn": ["frompromise"]
    },
    "throw": {
      "source": ["node_modules/rx/src/core/linq/observable/throw.js"],
      "dependsOn": []
    },
    "timeinterval": {
      "source": ["node_modules/rx/src/core/linq/observable/timeinterval.js"],
      "dependsOn": ["defer","select"]
    },
    "timeout": {
      "source": ["node_modules/rx/src/core/linq/observable/timeout.js"],
      "dependsOn": ["throw"]
    },
    "timeoutwithselector": {
      "source": ["node_modules/rx/src/core/linq/observable/timeoutwithselector.js"],
      "dependsOn": ["never", "throw", "frompromise"]
    },
    "timer": {
      "source": ["node_modules/rx/src/core/linq/observable/timer.js"],
      "dependsOn": ["_observabletimerdate","_observabletimerdateandperiod","_observabletimertimespan","_observabletimertimespanandperiod"]
    },
    "timestamp": {
      "source": ["node_modules/rx/src/core/linq/observable/timestamp.js"],
      "dependsOn": ["select"]
    },
    "toarray": {
      "source": ["node_modules/rx/src/core/linq/observable/toarray.js"],
      "dependsOn": []
    },
    "toasync": {
      "source": ["node_modules/rx/src/core/linq/observable/toasync.js"],
      "dependsOn": []
    },
    "tomap": {
      "source": ["node_modules/rx/src/core/linq/observable/tomap.js"],
      "dependsOn": []
    },
    "topromise": {
      "source": ["node_modules/rx/src/core/linq/observable/topromise.js"],
      "dependsOn": []
    },
    "toset": {
      "source": ["node_modules/rx/src/core/linq/observable/toset.js"],
      "dependsOn": []
    },
    "using": {
      "source": ["node_modules/rx/src/core/linq/observable/using.js"],
      "dependsOn": []
    },
    "when": {
      "source": ["node_modules/rx/src/core/linq/observable/when.js"],
      "dependsOn": [
        "nativemap",
        "activeplan",
        "joinobserver",
        "pattern",
        "plan"
      ]
    },
    "where": {
      "source": ["node_modules/rx/src/core/linq/observable/where.js"],
      "dependsOn": []
    },
    "while": {
      "source": ["node_modules/rx/src/core/linq/observable/while.js"],
      "dependsOn": ["frompromise"]
    },
    "window": {
      "source": ["node_modules/rx/src/core/linq/observable/window.js"],
      "dependsOn": ["empy", "frompromise"]
    },
    "windowwithcount": {
      "source": ["node_modules/rx/src/core/linq/observable/windowwithcount.js"],
      "dependsOn": []
    },
    "windowwithtimeorcount": {
      "source": ["node_modules/rx/src/core/linq/observable/windowwithtimeorcount.js"],
      "dependsOn": []
    },
    "zip": {
      "source": ["node_modules/rx/src/core/linq/observable/zip.js","node_modules/rx/src/core/linq/observable/zipproto.js"],
      "dependsOn": ["frompromise"]
    },
    "ziparray": {
      "source": ["node_modules/rx/src/core/linq/observable/zip.js","node_modules/rx/src/core/linq/observable/ziparray.js"],
      "dependsOn": []
    },
  },
  "aliases": {
    "every":"all",
    "some":"any",
    "flatmap":"selectmany",
    "flatmapobserver":"selectmanyobserver",
    "flatmaplatest":"selectswitch",
    "switchmap":"selectswitch",
    "switchlatest":"switch",
    "map":"select",
    "filter":"where",
    "finallyaction":"finally",
    "returnValue":"return",
    "just":"return",
    "mergeall":"mergeobservable",
    "concatall":"concatobservable",
    "doaction":"do",
    "tap":"do",
    "ifthen":"if",
    "letbind":"let",
    "throwerror":"throw",
    "throwexception":"throw",
    "throttlewithtimeout":"debounce"
  }
};
