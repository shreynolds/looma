/*
LOOMA javascript file
Filename: xxx.JS
Description:

Programmer name:
Email:
Owner: VillageTech Solutions (villagetechsolutions.org)
Date:
Revision: Looma 2.0.x

Comments:
 */

'use strict';

/*define functions here */

window.onload = function ()
    {
        function notice () {alert('button clicked');}

        var button = document.getElementById('teach');
        button.addEventListener('click', notice);
    };