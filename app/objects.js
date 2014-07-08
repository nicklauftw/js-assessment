if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      newA = {
        name : obj.name,
        greeting : obj.greeting,
        newFn : fn
      }
      return newA.newFn();
    },

    alterObjects : function(constructor, greeting) {

    },

    iterate : function(obj) {

    }
  };
});
