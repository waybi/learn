(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    function fn1() {
        alert('fn1');
    }
    function fn2() {
        alert('fn2');
    }

    // import util1 from './util1'

    fn1();
    fn2();

})));
