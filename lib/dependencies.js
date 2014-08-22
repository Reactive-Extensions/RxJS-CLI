module.exports = {
  "operators": { 
    "_elementatordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/_elementatordefault.js"],
      "dependsOn": []
    }, 
    "_findvalue": {
      "source": ["node_modules/rx/src/core/linq/observable/_findvalue.js"],
      "dependsOn": []
    },  
    "_firstordefault": {
      "source": ["node_modules/rx/src/core/linq/observable/_firstordefault.js"],
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
      "dependsOn": [
        "scan",
        "startwith",
        "finalvalue"
      ]
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
      "dependsOn": ["fromeventpattern", "publish"]
    },     
    "fromevent": {
      "source": ["node_modules/rx/src/core/linq/observable/fromevent-modern.js"],
      "dependsOn": ["fromeventpattern", "publish"]
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
      "dependsOn": ["dictionary"]
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
    "select": {
      "source": ["node_modules/rx/src/core/linq/observable/select.js"],
      "dependsOn": []
    },      
    "selectmany": {
      "source": ["node_modules/rx/src/core/linq/observable/selectmany.js"],
      "dependsOn": [
        "select",
        "mergeobservable"
      ]
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
    "ifthen":"if"
  }
};