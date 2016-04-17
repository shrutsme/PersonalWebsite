var homeC =0;
var aboutC = 0;
var expC =0;
var presentC =0;
var eduC =0;

$(document).ready(function() {




});
function myHome() {
	homeC ++;
_gaq.push(['_setCustomVar',
      1,                   // This custom var is set to slot #1.  Required parameter.
      'Home Click',     // The name acts as a kind of category for the user activity.  Required parameter.
      '1',               // This value of the custom variable.  Required parameter.
      3                    // Sets the scope to page-level.  Optional parameter.
   ]);
 _gaq.push(['_trackEvent',
      'Navbar', // category of activity
      'Home Click', // Action
   ]);

}

function myAbout() {
	aboutC ++;
_gaq.push(['_setCustomVar',
      2,                   // This custom var is set to slot #1.  Required parameter.
      'About Click',     // The name acts as a kind of category for the user activity.  Required parameter.
      aboutC,               // This value of the custom variable.  Required parameter.
      3                    // Sets the scope to page-level.  Optional parameter.
   ]);
 _gaq.push(['_trackEvent',
      'Navbar', // category of activity
      'About Click', // Action
   ]);

}

function myExp() {
	expC++;
_gaq.push(['_setCustomVar',
      3,                   // This custom var is set to slot #1.  Required parameter.
      'Experience Click',     // The name acts as a kind of category for the user activity.  Required parameter.
      '1',               // This value of the custom variable.  Required parameter.
      3                    // Sets the scope to page-level.  Optional parameter.
   ]);
 _gaq.push(['_trackEvent',
      'Navbar', // category of activity
      'Experience Click', // Action
   ]);

}



function myPresentation() {
	presentC++;
_gaq.push(['_setCustomVar',
      4,                   // This custom var is set to slot #1.  Required parameter.
      'Presentation Click',     // The name acts as a kind of category for the user activity.  Required parameter.
      presentC,               // This value of the custom variable.  Required parameter.
      3                    // Sets the scope to page-level.  Optional parameter.
   ]);
 _gaq.push(['_trackEvent',
      'Navbar', // category of activity
      'Presentation Click', // Action
   ]);

}

function myEdu() {
	eduC++;
_gaq.push(['_setCustomVar',
      5,                   // This custom var is set to slot #1.  Required parameter.
      'Education Click',     // The name acts as a kind of category for the user activity.  Required parameter.
      eduC,               // This value of the custom variable.  Required parameter.
      3                    // Sets the scope to page-level.  Optional parameter.
   ]);
 _gaq.push(['_trackEvent',
      'Navbar', // category of activity
      'Education Click', // Action
   ]);

}







