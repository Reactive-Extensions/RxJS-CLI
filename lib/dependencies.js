module.exports = {
  "operators": { 
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
    "returnValue":"return",
    "just":"return",
    "mergeall":"mergeobservable",
    "concatall":"concatobservable"
  }
};