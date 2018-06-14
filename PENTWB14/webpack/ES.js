/*jshint esversion:6 */
import { sum } from './math'
export function updateSum() {
            document.getElementById('sum').innerHTML = math.sum(
                parseInt(document.getElementById('text1').value),
                parseInt(document.getElementById('text2').value)
            );
};
   