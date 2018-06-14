//var updateSum = function () {
//    document.getElementById('sum').innerHTML = math.sum(
//        parseInt(document.getElementById('text1').value),
//        parseInt(document.getElementById('text2').value));
//}


//requirejs(['amd'], function (amd) {
//    document.getElementById('myButton').addEventListener('click', amd.updateSum);
//    return;
//}
//    );


//requirejs.config({
//    baseUrl: './',
//    paths: {
//        amd: './amd'
//    }

//});


//define('wiring', ['./amd'], function (amd) {
//    document.getElementById('myButton').addEventListener('click', amd.updateSum);
//    return;
//});
//wiring();


/*jshint esversion:6 */
import {updateSum} from './ES';
export function wiring() {
    document.getElementById('myButton').addEventListener('click', updateSum);
    return;
}

wiring();

//require('./myStyle.css');

require('./myStyle.scss');