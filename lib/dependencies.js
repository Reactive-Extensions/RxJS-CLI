module.exports = { 
  "operators": { 
    "dictionary": {
      "source": ["node_modules/rx/src/core/internal/dictionary.js"],
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
    "_observabletimerdateandperiod": {
      "source": ["node_modules/rx/src/core/linq/observable/_observabletimerdateandperiod.js"],
      "dependsOn": []
    },     
    "_observabletimertimespanandperiod": {
      "source": ["node_modules/rx/src/core/linq/observable/_observabletimertimespanandperiod.js"],
      "dependsOn": ["defer","_observabletimerdateandperiod"]
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
        "localmap",
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
      "dependsOn": ["publish","connectableobservable","filter"]
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
    "select": {
      "source": ["node_modules/rx/src/core/linq/observable/select.js"],
      "dependsOn": []
    },      
    "selectmany": {
      "source": ["node_modules/rx/src/core/linq/observable/selectmany.js"],
      "dependsOn": ["select", "mergeobservable"]
    },
    "where": {
      "source": ["node_modules/rx/src/core/linq/observable/where.js"],
      "dependsOn": []
    }      
  },
  "aliases": {
    "every":"all",
    "some":"any",
    "flatmap":"selectmany",
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
    "letbind":"let"
  }
};